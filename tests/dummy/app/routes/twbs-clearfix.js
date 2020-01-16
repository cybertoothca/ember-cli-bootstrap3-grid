import EmberObject from '@ember/object';
import { A } from '@ember/array';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return A().pushObjects([
      EmberObject.create({name: 'A'}),
      EmberObject.create({name: 'B'}),
      EmberObject.create({name: 'C'}),
      EmberObject.create({name: 'D'}),
      EmberObject.create({name: 'E'}),
      EmberObject.create({name: 'F'}),
      EmberObject.create({name: 'G'}),
      EmberObject.create({name: 'H'}),
      EmberObject.create({name: 'I'}),
      EmberObject.create({name: 'J'}),
      EmberObject.create({name: 'K'}),
    ]);
  }
});
