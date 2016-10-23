import Ember from 'ember';

export default Ember.Mixin.create({
  'lg?': Ember.computed('_width', function () {
    const width = this.get('_width');
    return width >= 1200;
  }),
  'md?': Ember.computed('_width', function () {
    const width = this.get('_width');
    return width >= 992 && width < 1200;
  }),
  'notLg?': Ember.computed.not('lg?'),
  'notMd?': Ember.computed.not('md?'),
  'notSm?': Ember.computed.not('sm?'),
  'notXs?': Ember.computed.not('xs?'),
  'sm?': Ember.computed('_width', function () {
    const width = this.get('_width');
    return width >= 768 && width < 992;
  }),
  'xs?': Ember.computed('_width', function () {
    const width = this.get('_width');
    return width < 768;
  }),
  _bindWindowResize: Ember.on('init', function () {
    const self = this;
    Ember.$(window).on('resize', () => {
      if (!(self.get('isDestroyed') || self.get('isDestroying'))) {
        self.set('_width', Ember.$(window).width());
      }
    });
  }),
  _width: Ember.$(window).width()
});
