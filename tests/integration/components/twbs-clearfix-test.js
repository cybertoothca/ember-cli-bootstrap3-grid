import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-clearfix', 'Integration | Component | twbs clearfix', {
  integration: true
});

test('when index is null', function (assert) {
  this.set('index', null);
  this.render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when index is NaN', function (assert) {
  this.set('index', 'abcd');
  this.render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when index is negative', function (assert) {
  this.set('index', -1);
  this.render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when columnCount is null', function (assert) {
  this.set('columnCount', null);
  this.render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when columnCount is NaN', function (assert) {
  this.set('columnCount', 'abcd');
  this.render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when columnCount is 0', function (assert) {
  this.set('columnCount', 0);
  this.render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when columnCount is negative', function (assert) {
  this.set('columnCount', -1);
  this.render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when rendering three columns', function (assert) {
  this.render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-xs=true}}`);
  assert.equal(this.$('div').css('display'), 'none');

  this.render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-xs=true}}`);
  assert.equal(this.$('div').css('display'), 'none');

  this.render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-xs=true}}`);
  assert.equal(this.$('div').attr('style'), undefined);
  assert.ok(this.$('div').hasClass('clearfix'));
  assert.notOk(this.$('div').hasClass('visible-lg-block'));
  assert.notOk(this.$('div').hasClass('visible-md-block'));
  assert.notOk(this.$('div').hasClass('visible-sm-block'));
  assert.ok(this.$('div').hasClass('visible-xs-block'));

  this.render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-xs=true}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when rendering three columns for two different sizes', function (assert) {
  this.render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-sm=true visible-md=true}}`);
  assert.equal(this.$('div').css('display'), 'none');

  this.render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-sm=true visible-md=true}}`);
  assert.equal(this.$('div').css('display'), 'none');

  this.render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-sm=true visible-md=true}}`);
  assert.equal(this.$('div').attr('style'), undefined);
  assert.ok(this.$('div').hasClass('clearfix'));
  assert.notOk(this.$('div').hasClass('visible-lg-block'));
  assert.ok(this.$('div').hasClass('visible-md-block'));
  assert.ok(this.$('div').hasClass('visible-sm-block'));
  assert.notOk(this.$('div').hasClass('visible-xs-block'));

  this.render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-sm=true visible-md=true}}`);
  assert.equal(this.$('div').css('display'), 'none');
});

test('when rendering two columns', function (assert) {
  this.render(hbs`{{twbs-clearfix columnCount=2 index=0 visible-xs=true}}`);
  assert.equal(this.$('div').css('display'), 'none');

  this.render(hbs`{{twbs-clearfix columnCount=2 index=1 visible-lg=true}}`);
  assert.equal(this.$('div').attr('style'), undefined);
  assert.ok(this.$('div').hasClass('clearfix'));
  assert.ok(this.$('div').hasClass('visible-lg-block'));
  assert.notOk(this.$('div').hasClass('visible-md-block'));
  assert.notOk(this.$('div').hasClass('visible-sm-block'));
  assert.notOk(this.$('div').hasClass('visible-xs-block'));

  this.render(hbs`{{twbs-clearfix columnCount=2 index=2 visible-xs=true}}`);
  assert.equal(this.$('div').css('display'), 'none');

  this.render(hbs`{{twbs-clearfix columnCount=2 index=3 visible-md=true}}`);
  assert.equal(this.$('div').attr('style'), undefined);
  assert.ok(this.$('div').hasClass('clearfix'));
  assert.notOk(this.$('div').hasClass('visible-lg-block'));
  assert.ok(this.$('div').hasClass('visible-md-block'));
  assert.notOk(this.$('div').hasClass('visible-sm-block'));
  assert.notOk(this.$('div').hasClass('visible-xs-block'));
});
