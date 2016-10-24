import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.A().pushObjects([
      Ember.Object.create({name: 'A'}),
      Ember.Object.create({name: 'B'}),
      Ember.Object.create({name: 'C'}),
      Ember.Object.create({name: 'D'}),
      Ember.Object.create({name: 'E'}),
      Ember.Object.create({name: 'F'}),
      Ember.Object.create({name: 'G'}),
      Ember.Object.create({name: 'H'}),
      Ember.Object.create({name: 'I'}),
      Ember.Object.create({name: 'J'}),
      Ember.Object.create({name: 'K'}),
    ]);
  }
});
