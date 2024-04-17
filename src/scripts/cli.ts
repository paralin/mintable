#!/usr/bin/env node

import prompts from 'prompts'
import chalk from 'chalk'
import { updateConfig, readConfig, getConfigSource } from '../common/config'
import google from '../integrations/google/setup'
import csvImport from '../integrations/csv-import/setup'
import csvExport from '../integrations/csv-export/setup'
import teller from '../integrations/teller/setup'
import tellerAccountSetup from '../integrations/teller/accountSetup'
import fetch from './fetch'
import { logError } from '../common/logging'
;(async function () {
  const logo = [
    '\n',
    '          %',
    '          %%',
    '         %%%%%',
    '       %%%%%%%%',
    '     %%%%%%%%%%',
    '   %%%%%%%%%%%%',
    '  %%%% %%%%%%%%',
    '  %%%  %%%%%%',
    '  %%   %%%%%%',
    '   %   %%%',
    '        %%%',
    '         %%',
    '           %',
    '\n',
  ]

  logo.forEach((line) => {
    console.log(chalk.green(line))
  })

  console.log(' M I N T A B L E\n')

  const commands = {
    fetch: fetch,
    'google-setup': google,
    'csv-import-setup': csvImport,
    'csv-export-setup': csvExport,
    'teller-setup': teller,
    'teller-account-setup': tellerAccountSetup,
  }

  const arg = process.argv[2]

  if (arg == 'setup') {
    const configSource = getConfigSource()
    if (readConfig(configSource, true)) {
      const overwrite = await prompts([
        {
          type: 'confirm',
          name: 'confirm',
          message: 'Config already exists. Do you to overwrite it?',
          initial: false,
        },
      ])
      if (overwrite.confirm === false) {
        logError('Config update cancelled by user.')
      }
    }
    updateConfig((config) => config, true)
    await google()
  } else if (commands.hasOwnProperty(arg)) {
    commands[arg]()
  } else {
    console.log('\nusage: mintable <command>\n')
    console.log('available commands:')
    Object.keys(commands)
      .concat(['setup'])
      .forEach((command) => console.log(`\t${command}`))
  }
})()
