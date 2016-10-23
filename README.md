# ember-cli-bootstrap3-grid [![GitHub version](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-grid.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-grid)

[![npm version](https://badge.fury.io/js/ember-cli-bootstrap3-grid.svg)](https://badge.fury.io/js/ember-cli-bootstrap3-grid) [![Build Status](https://travis-ci.org/cybertoothca/ember-cli-bootstrap3-grid.svg)](https://travis-ci.org/cybertoothca/ember-cli-bootstrap3-grid) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-grid/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-grid) ![Dependencies](https://david-dm.org/cybertoothca/ember-cli-bootstrap3-grid.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-grid.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-grid) [![License](https://img.shields.io/npm/l/ember-cli-bootstrap3-grid.svg)](LICENSE.md)

This addon gives you access to several helpful components and mixins
that can be used to compliment the 
[Bootstrap3 Grid System](http://getbootstrap.com/css/#grid).  __You must
have Bootstrap 3.x installed in your Ember application.__  Feel 
free to use the 
[ember-cli-bootstrap3-sass](https://emberobserver.com/addons/ember-cli-bootstrap3-sass) 
addon to setup Bootstrap.

## What Does This Addon Do?

This addon supplied the following _components_:

* 

...and the following _mixins_:

* Viewport - imported as 
`import Viewport as 'ember-cli-bootstrap3-grid/mixins/viewport'` 

_Further information about these items can be found in the Usage 
section below._

## Installation

The following will install this addon:

    $ ember install ember-cli-bootstrap3-grid

__As mentioned you must install some version of Bootstrap3 in your
Ember application should you want this to work.__

## Usage

### Components

### Mixins



### Troubleshooting And Tips

1.

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-grid.git`
* `npm install`
* `bower install`

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

1. From the command line at the root of __this__ project run the 
`npm link` command to _link_ this addon within your local 
node repository.
1. From the _other_ Ember project that you wish to test this addon 
in, execute the following command:
`npm link ember-cli-bootstrap3-grid`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-bootstrap3-grid": "*"`.  Now
when/if you execute `npm install` on this _other_ project it 
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-bootstrap3-grid`
1. Remove the reference to the `ember-cli-bootstrap3-grid` 
in your _other_ project's `package.json`.
1. Run an `npm prune` from the root of your _other_ project's command line.
