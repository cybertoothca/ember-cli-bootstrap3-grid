import { computed } from '@ember/object';
import { not } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import $ from 'jquery';

/**
 * The Viewport mixin can be used to add a number of helpful responsive queries to any component.  These
 * queries will update as the browser window resizes.  Follows Bootstrap `xs`, `sm`, `md`, and `lg` widths.
 * xs < 768px
 * sm >= 768px
 * md >= 992px
 * lg >= 1200px
 * @see http://getbootstrap.com/css/#grid-options
 */
export default Mixin.create({
  /**
   * @return true when viewport is 1200px or wider, false otherwise.
   */
  'lg?': computed('_width', function() {
    const width = this.get('_width');
    return width >= 1200;
  }),
  /**
   * @return true when viewport is 992px to 1199px, false otherwise.
   */
  'md?': computed('_width', function() {
    const width = this.get('_width');
    return width >= 992 && width < 1200;
  }),
  /**
   * @return true when the Viewport is less than 1200px, false otherwise.
   */
  'notLg?': not('lg?'),
  /**
   * @return true when the Viewport is less than 992px or greater than 1199px, false otherwise.
   */
  'notMd?': not('md?'),
  /**
   * @return true when the Viewport is less than 768px or greater than 991px, false otherwise.
   */
  'notSm?': not('sm?'),
  /**
   * @return true when the Viewport is greater than 767px, false otherwise.
   */
  'notXs?': not('xs?'),
  /**
   * @return true when viewport is 768px to 991px, false otherwise.
   */
  'sm?': computed('_width', function() {
    const width = this.get('_width');
    return width >= 768 && width < 992;
  }),
  /**
   * @return true when viewport is smaller than 768px, false otherwise.
   */
  'xs?': computed('_width', function() {
    const width = this.get('_width');
    return width < 768;
  }),
  /**
   * Handles `window` resize events, recording the width of the Viewport to this mixin's `_width` property.
   */
  init() {
    this._super(arguments);
    const self = this;
    $(window).on('resize', () => {
      if (!(self.get('isDestroyed') || self.get('isDestroying'))) {
        self.set('_width', $(window).width());
      }
    });
  },
  _width: $(window).width()
});
