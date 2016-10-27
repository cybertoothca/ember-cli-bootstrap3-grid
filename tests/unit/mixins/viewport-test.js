import Ember from 'ember';
import ViewportMixin from 'ember-cli-bootstrap3-grid/mixins/viewport';
import { module, test } from 'qunit';

module('Unit | Mixin | viewport');

test('it works', function(assert) {
  let ViewportObject = Ember.Object.extend(ViewportMixin);
  let subject = ViewportObject.create();
  assert.ok(subject);
});

test('when xs?', function (assert) {
  let ViewportObject = Ember.Object.extend(ViewportMixin);
  const viewport = ViewportObject.create({ '_width': 767 });
  assert.ok(viewport.get('xs?'), 'Should be xs');
  assert.ok(viewport.get('notSm?'), 'Should be xs');
  assert.ok(viewport.get('notMd?'), 'Should be xs');
  assert.ok(viewport.get('notLg?'), 'Should be xs');
  assert.notOk(viewport.get('notXs?'), 'Should be xs');
  assert.notOk(viewport.get('sm?'), 'Should be xs');
  assert.notOk(viewport.get('md?'), 'Should be xs');
  assert.notOk(viewport.get('lg?'), 'Should be xs');
});

test('when sm?', function (assert) {
  let ViewportObject = Ember.Object.extend(ViewportMixin);
  const viewport = ViewportObject.create({ '_width': 768 });
  assert.ok(viewport.get('notXs?'), 'Should be sm');
  assert.ok(viewport.get('sm?'), 'Should be sm');
  assert.ok(viewport.get('notMd?'), 'Should be sm');
  assert.ok(viewport.get('notLg?'), 'Should be sm');
  assert.notOk(viewport.get('xs?'), 'Should be sm');
  assert.notOk(viewport.get('notSm?'), 'Should be sm');
  assert.notOk(viewport.get('md?'), 'Should be sm');
  assert.notOk(viewport.get('lg?'), 'Should be sm');
});

test('when md?', function (assert) {
  let ViewportObject = Ember.Object.extend(ViewportMixin);
  const viewport = ViewportObject.create({ '_width': 992 });
  assert.ok(viewport.get('notXs?'), 'Should be md');
  assert.ok(viewport.get('notSm?'), 'Should be md');
  assert.ok(viewport.get('md?'), 'Should be md');
  assert.ok(viewport.get('notLg?'), 'Should be md');
  assert.notOk(viewport.get('xs?'), 'Should be md');
  assert.notOk(viewport.get('sm?'), 'Should be md');
  assert.notOk(viewport.get('notMd?'), 'Should be md');
  assert.notOk(viewport.get('lg?'), 'Should be md');
});

test('when lg?', function (assert) {
  let ViewportObject = Ember.Object.extend(ViewportMixin);
  const viewport = ViewportObject.create({ '_width': 1200 });
  assert.ok(viewport.get('notXs?'), 'Should be lg');
  assert.ok(viewport.get('notSm?'), 'Should be lg');
  assert.ok(viewport.get('notMd?'), 'Should be lg');
  assert.ok(viewport.get('lg?'), 'Should be lg');
  assert.notOk(viewport.get('xs?'), 'Should be lg');
  assert.notOk(viewport.get('sm?'), 'Should be lg');
  assert.notOk(viewport.get('md?'), 'Should be lg');
  assert.notOk(viewport.get('notLg?'), 'Should be lg');
});
