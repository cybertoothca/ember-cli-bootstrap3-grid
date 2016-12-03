# ember-cli-bootstrap3-grid [![GitHub version](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-grid.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-grid)

[![npm version](https://badge.fury.io/js/ember-cli-bootstrap3-grid.svg)](https://badge.fury.io/js/ember-cli-bootstrap3-grid) [![CircleCI](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-grid.svg?style=shield)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-grid) [![Code Climate](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-grid/badges/gpa.svg)](https://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-grid) ![Dependencies](https://david-dm.org/cybertoothca/ember-cli-bootstrap3-grid.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-grid.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-grid) [![License](https://img.shields.io/npm/l/ember-cli-bootstrap3-grid.svg)](LICENSE.md)

This addon gives you access to several helpful components and mixins
that can be used to compliment the
[Bootstrap3 Grid System](http://getbootstrap.com/css/#grid).

__You must have Bootstrap 3.x installed in your Ember application.__  
Feel free to use the
[ember-cli-bootstrap3-sass](https://emberobserver.com/addons/ember-cli-bootstrap3-sass)
addon to setup Bootstrap if you haven't already done so.

## What Does This Addon Do?

This addon supplied the following _components_:

* `twbs-clearfix` - used for responsive column resets at the end of an
each loop

...and the following _mixins_:

* `Viewport` - imported as
`import Viewport as 'ember-cli-bootstrap3-grid/mixins/viewport'`

_Further information about these items can be found in the Usage
section below._

## Requirements

* Ember >= 1.13.0
* Ember CLI

## Installation

The following will install this addon:

    $ ember install ember-cli-bootstrap3-grid

__As mentioned you must install some version of Bootstrap3 in your
Ember application should you want this to work.__

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-grid` command once
you are done to get the latest version of the addon.

## Usage

### Components

#### `{{twbs-clearfix}}`

Ever wanted an efficient way to render those
`<div class="clearfix"></div>` for [responsive column resets](http://getbootstrap.com/css/#grid-responsive-resets)?
Use this component in your each-loop.

##### Arguments

* `columnCount` - the number of columns that are being rendered in the
grid.  __Required Default: `1`__
* `index` - the loop index. __Required__
* `visible-all` - render the clearfix element for all screen sizes.  __Default `false`__
* `visible-lg` - render the element for large size screens only.
__Default `false`__
* `visible-md` - render the element for medium size screens only.
__Default `false`__
* `visible-sm` - render the element for small size screens only.
__Default `false`__
* `visible-xs` - render the element for extra-small size screens only.
__Default `false`__

##### Examples

Inside the following loop three columns are being rendered for
sizes _sm_/_md_/_lg_.  To create the clearfix-div(s) it would
usually take considerable conditional logic.  Instead use this
component the following way:

    <div class="row">
      {{#each itemList as |item index|}}
        <div class="col-sm-4">
          Some Item Column
        </div>
        {{twbs-clearfix columnCount=3 index=index visible-sm=true visible-md=true visible-lg=true}}
      {{/each}}
    </div>

... the `{{twbs-clearfix ...}}` in the above example will render the
clearfix after every third column:

    <div class="ember-view clearfix visible-sm-block visible-md-block visible-lg-block"></div>

---

Here's another example where you may need multiple clearfix resets:

    <div class="row">
      {{#each itemList as |item index|}}
        <div class="col-sm-6 col-md-4 col-lg-3">
          Some Item Column
        </div>
        {{twbs-clearfix columnCount=2 index=index visible-sm=true}}
        {{twbs-clearfix columnCount=3 index=index visible-md=true}}
        {{twbs-clearfix columnCount=4 index=index visible-lg=true}}
      {{/each}}
    </div>

... the `{{twbs-clearfix ...}}` components in the above example will
render the clearfix for small displays every second column, and for
medium displays every third column, and for large displays every
fourth column.

---

Here's an example where you may need clearfix resets EVERY three columns:

    <div class="row">
      {{#each itemList as |item index|}}
        <div class="col-xs-4">
          Some Item Column
        </div>
        {{twbs-clearfix columnCount=3 index=index visible-all=true}}
      {{/each}}
    </div>

... the `{{twbs-clearfix ...}}` in the above example will render the
clearfix after every third column for all sizes:

    <div class="ember-view clearfix visible-xs-block visible-sm-block visible-md-block visible-lg-block"></div>


### Mixins

#### `Viewport`

A mixin that captures the width of the browser viewport on resizes and
offers several helpful queries to determine the size.

##### Properties

* `lg?` - `true` when viewport is 1200px or wider, `false` otherwise.
* `md?` - `true` when viewport is 992px to 1199px, `false` otherwise.
* `notLg?` - compliment to `lg?`.
* `notMd?` - compliment to `md?`.
* `notSm?` - compliment to `sm?`.
* `notXs?` - compliment to `xs?`.
* `sm?` - `true` when viewport is 768px to 991px, `false` otherwise.
* `xs?` - `true` when viewport is smaller than 768px, `false` otherwise.

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
