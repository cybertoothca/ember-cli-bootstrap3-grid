# How To Contribute

## Installation

- `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-grid.git`
- `cd ember-cli-bootstrap3-grid`
- `yarn install`

## Linting

- `yarn lint:hbs`
- `yarn lint:js`
- `yarn lint:js --fix`

## Running tests

- `ember test` – Runs the test suite on the current Ember version
- `ember test --server` – Runs the test suite in "watch mode"
- `ember try:each` – Runs the test suite against multiple Ember versions

## Running the dummy application

- `ember serve`
- Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

## Deployment Guide

Visit the [Deployment](DEPLOYMENT.md) guide.

## Linking This Add-on For Local Testing

### Linking

Use yarn.

```bash
# from this add-on project
$ yarn link
# from the other project that depends on this add-on
$ yarn link ember-simple-auth-okta
```

Note: I've actually had to go into my _other project_ and put this into its `package.json`:
`"ember-simple-auth-okta": "*",`

### Unlinking

Again, use yarn.

```bash
# from this add-on project
$ yarn unlink
# from the other project that linked to this add-on
$ yarn unlink ember-simple-auth-okta
```

## Committing Code

Fork and submit a pull request.

## Releasing & Publishing To NPM

```bash
# `yarn publish` will prompt you for the next/new version name
$ yarn publish
$ git push
$ git push --tags
```
