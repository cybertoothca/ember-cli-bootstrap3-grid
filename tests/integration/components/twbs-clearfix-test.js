import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | twbs clearfix', function(hooks) {
  setupRenderingTest(hooks);

  test('when index is null', async function(assert) {
    this.set('index', null);

    await render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when index is NaN', async function(assert) {
    this.set('index', 'abcd');
    await render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when index is negative', async function(assert) {
    this.set('index', -1);
    await render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when columnCount is null', async function(assert) {
    this.set('columnCount', null);
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when columnCount is NaN', async function(assert) {
    this.set('columnCount', 'abcd');
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when columnCount is 0', async function(assert) {
    this.set('columnCount', 0);
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when columnCount is negative', async function(assert) {
    this.set('columnCount', -1);
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when rendering a clearfix for all sizes every three columns', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-all=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-all=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-all=true}}`);
    assert.ok(this.$('div').hasClass('clearfix'));
    assert.ok(this.$('div').hasClass('visible-lg-block'));
    assert.ok(this.$('div').hasClass('visible-md-block'));
    assert.ok(this.$('div').hasClass('visible-sm-block'));
    assert.ok(this.$('div').hasClass('visible-xs-block'));

    await render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-all=true}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when rendering three columns', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-xs=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-xs=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-xs=true}}`);
    assert.equal(this.$('div').attr('style'), undefined);
    assert.ok(this.$('div').hasClass('clearfix'));
    assert.notOk(this.$('div').hasClass('visible-lg-block'));
    assert.notOk(this.$('div').hasClass('visible-md-block'));
    assert.notOk(this.$('div').hasClass('visible-sm-block'));
    assert.ok(this.$('div').hasClass('visible-xs-block'));

    await render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-xs=true}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when rendering three columns for two different sizes', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-sm=true visible-md=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-sm=true visible-md=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-sm=true visible-md=true}}`);
    assert.equal(this.$('div').attr('style'), undefined);
    assert.ok(this.$('div').hasClass('clearfix'));
    assert.notOk(this.$('div').hasClass('visible-lg-block'));
    assert.ok(this.$('div').hasClass('visible-md-block'));
    assert.ok(this.$('div').hasClass('visible-sm-block'));
    assert.notOk(this.$('div').hasClass('visible-xs-block'));

    await render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-sm=true visible-md=true}}`);
    assert.equal(this.$('div').css('display'), 'none');
  });

  test('when rendering two columns', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=2 index=0 visible-xs=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=2 index=1 visible-lg=true}}`);
    assert.equal(this.$('div').attr('style'), undefined);
    assert.ok(this.$('div').hasClass('clearfix'));
    assert.ok(this.$('div').hasClass('visible-lg-block'));
    assert.notOk(this.$('div').hasClass('visible-md-block'));
    assert.notOk(this.$('div').hasClass('visible-sm-block'));
    assert.notOk(this.$('div').hasClass('visible-xs-block'));

    await render(hbs`{{twbs-clearfix columnCount=2 index=2 visible-xs=true}}`);
    assert.equal(this.$('div').css('display'), 'none');

    await render(hbs`{{twbs-clearfix columnCount=2 index=3 visible-md=true}}`);
    assert.equal(this.$('div').attr('style'), undefined);
    assert.ok(this.$('div').hasClass('clearfix'));
    assert.notOk(this.$('div').hasClass('visible-lg-block'));
    assert.ok(this.$('div').hasClass('visible-md-block'));
    assert.notOk(this.$('div').hasClass('visible-sm-block'));
    assert.notOk(this.$('div').hasClass('visible-xs-block'));
  });
});
