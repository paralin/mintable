import { GoogleConfig } from './integrations/google'
import { CSVImportConfig } from './integrations/csv-import'
import { CSVExportConfig } from './integrations/csv-export'
import { TellerConfig } from './integrations/teller'

export enum IntegrationType {
  Import = 'import',
  Export = 'export',
}

export enum IntegrationId {
  Google = 'google',
  CSVImport = 'csv-import',
  CSVExport = 'csv-export',
  Teller = 'teller',
}

export interface BaseIntegrationConfig {
  id: IntegrationId
  name: string
  type: IntegrationType
}

export type IntegrationConfig =
  | GoogleConfig
  | CSVImportConfig
  | CSVExportConfig
  | TellerConfig
