<h4 align="center"><img width="100" src="./docs/img/icon.png" alt="Mintable"></h4>
<h1 align="center" style="font-weight: 500; font-size: 60px !important; border-bottom: 0 !important;">Mintable</h1>

<h4 align="center">Automate your personal finances – for free, with no ads, and no data collection.</h4>

<br>

Mintable helps you:

- Keep track of your account balances
- Aggregate transactions from all your banking institutions, including checking accounts, savings accounts, and credit cards
- Analyze and budget your spending using a spreadsheet and formulas

![](./docs/img/mintable.png)

---

## Quickstart

Create [Teller] account. Download client cert: private_key.pem and certificate.pem

[Teller]: https://teller.io

Then setup:

```
git clone -b paralin git@github.com:paralin/mintable.git
cd ./mintable

yarn
tsx ./src/scripts/cli.ts setup
```

You will need to:

1. Create a Google Cloud Console project: https://console.cloud.google.com
2. Enable the Sheets API: https://console.cloud.google.com/apis/api/sheets.googleapis.com/overview
3. Follow the guide as printed by mintable.

Setup teller:

```
# Setup your teller instance.
tsx ./src/scripts/cli.ts teller-setup
# Setup your particular bank account with Teller.
tsx ./src/scripts/cli.ts teller-account-setup
```

To fetch:

```
tsx ./src/scripts/cli.ts fetch
```

## Documentation

Check out the full documentation [in the `./docs` folder](./docs/README.md).

## FAQs

**WTF is 'Mintable'?!**

> **min·ta·ble**: _noun._
> 1. An open-source tool to automate your personal finances – for free, with no ads, and no data collection. Derived from *mint* (the [wildly popular personal finance app from Intuit](https://www.mint.com/)) + *table* (a spreadsheet).

**Do I have to use Teller?**

* Nope. You can [import transactions from a CSV bank statement](./docs/README.md#manually--on-your-local-machine--via-csv-bank-statements) exclusively on your local machine. We also have [templates](./docs/templates) to get you started.

**Do I have to use Google Sheets?**

* Nope. You can [export your account balances & transactions to a CSV file](./docs/README.md#on-your-local-machine--via-csv-files) exclusively on your local machine.

**Do I have to manually run this every time I want new transactions in my spreadsheet?**

* Nope. You can automate it for free using [BitBar](./docs/README.md#automatically-in-your-macs-menu-bar--via-bitbar), [`cron`](./docs/README.md#automatically-in-your-local-machines-terminal--via-cron), or [GitHub Actions](./docs/README.md#automatically-in-the-cloud--via-github-actions).

**How do I use it with Windows?**

* Windows is not natively supported but you can try [this](https://github.com/kevinschaich/mintable/issues/125#issuecomment-1253961155).

**It's not working!**

- [File an issue](https://github.com/kevinschaich/mintable/issues)

