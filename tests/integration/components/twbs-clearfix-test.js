import { find, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs clearfix', function(hooks) {
  setupRenderingTest(hooks);

  test('when index is null', async function(assert) {
    this.set('index', null);

    await render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when index is NaN', async function(assert) {
    this.set('index', 'abcd');
    await render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when index is negative', async function(assert) {
    this.set('index', -1);
    await render(hbs`{{twbs-clearfix columnCount=3 visible-xs=true index=index}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when columnCount is null', async function(assert) {
    this.set('columnCount', null);
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when columnCount is NaN', async function(assert) {
    this.set('columnCount', 'abcd');
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when columnCount is 0', async function(assert) {
    this.set('columnCount', 0);
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when columnCount is negative', async function(assert) {
    this.set('columnCount', -1);
    await render(hbs`{{twbs-clearfix columnCount=columnCount visible-xs=true index=0}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when rendering a clearfix for all sizes every three columns', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-all=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-all=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-all=true}}`);
    assert.dom('div.twbs-clearfix').hasClass('clearfix');
    assert.dom('div.twbs-clearfix').hasClass('visible-lg-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-md-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-sm-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-xs-block');

    await render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-all=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when rendering three columns', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-xs=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-xs=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-xs=true}}`);
    // assert.dom('div.twbs-clearfix').hasAttribute('style', undefined);
    assert.dom('div.twbs-clearfix').hasClass('clearfix');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-lg-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-md-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-sm-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-xs-block');

    await render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-xs=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when rendering three columns for two different sizes', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=3 index=0 visible-sm=true visible-md=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=1 visible-sm=true visible-md=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=3 index=2 visible-sm=true visible-md=true}}`);
    assert.dom('div.twbs-clearfix').doesNotHaveAttribute('style');
    assert.dom('div.twbs-clearfix').hasClass('clearfix');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-lg-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-md-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-sm-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-xs-block');

    await render(hbs`{{twbs-clearfix columnCount=3 index=3 visible-sm=true visible-md=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');
  });

  test('when rendering two columns', async function(assert) {
    await render(hbs`{{twbs-clearfix columnCount=2 index=0 visible-xs=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=2 index=1 visible-lg=true}}`);
    assert.dom('div.twbs-clearfix').doesNotHaveAttribute('style');
    assert.dom('div.twbs-clearfix').hasClass('clearfix');
    assert.dom('div.twbs-clearfix').hasClass('visible-lg-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-md-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-sm-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-xs-block');

    await render(hbs`{{twbs-clearfix columnCount=2 index=2 visible-xs=true}}`);
    assert.equal(find('div.twbs-clearfix').style.display, 'none');

    await render(hbs`{{twbs-clearfix columnCount=2 index=3 visible-md=true}}`);
    assert.dom('div.twbs-clearfix').doesNotHaveAttribute('style');
    assert.dom('div.twbs-clearfix').hasClass('clearfix');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-lg-block');
    assert.dom('div.twbs-clearfix').hasClass('visible-md-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-sm-block');
    assert.dom('div.twbs-clearfix').hasNoClass('visible-xs-block');
  });
});
