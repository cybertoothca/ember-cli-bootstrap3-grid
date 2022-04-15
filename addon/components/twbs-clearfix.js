import Component from '@ember/component';
import { computed } from '@ember/object';
import { and, not, or } from '@ember/object/computed';

// noinspection JSFileReferences
import layout from '../templates/components/twbs-clearfix';

/**
 * A convenience component for rendering _Responsive Column Resets_ as described in the Bootstrap documentation.  This
 * is meant to go at the end of an each-loop where you pass the index of the loop into the component and the sizes
 * that you want the column-reset rendered for.
 * @see http://getbootstrap.com/css/#grid-responsive-resets
 */
export default Component.extend({
  attributeBindings: ['_isHidden:hidden'],
  /**
   * The class bindings based on the computed properties within.
   */
  classNameBindings: ['clearfix', 'visibleLgBlock', 'visibleMdBlock', 'visibleSmBlock', 'visibleXsBlock'],
  classNames: ['twbs-clearfix'],
  /**
   * Used in the classNameBinding.
   */
  clearfix: or('visibleLgBlock', 'visibleMdBlock', 'visibleSmBlock', 'visibleXsBlock'),
  /**
   * REQUIRED.  Specify the positive-non-zero column count that you expect the responsive column reset to be applied to.
   */
  columnCount: 1,
  /**
   * REQUIRED.  Supply the index from the each loop.
   */
  index: undefined,
  layout,
  tagName: 'div',
  /**
   * OPTIONAL.
   * Used to specify that you'd like a clearfix for ALL sizes.
   */
  'visible-all': false,
  /**
   * OPTIONAL.
   */
  'visible-lg': false,
  /**
   * OPTIONAL.
   */
  'visible-md': false,
  /**
   * OPTIONAL.
   */
  'visible-sm': false,
  /**
   * OPTIONAL.
   */
  'visible-xs': false,
  /**
   * Used in the classNameBinding.
   */
  visibleLgBlock: and('_isRender', '_visibleLg'),
  /**
   * Used in the classNameBinding.
   */
  visibleMdBlock: and('_isRender', '_visibleMd'),
  /**
   * Used in the classNameBinding.
   */
  visibleSmBlock: and('_isRender', '_visibleSm'),
  /**
   * Used in the classNameBinding.
   */
  visibleXsBlock: and('_isRender', '_visibleXs'),
  _isRender: computed('columnCount', 'index', function () {
    return this.index > 0 && (this.index + 1) % this.columnCount === 0;
  }),
  _isHidden: not('_isRender'),
  _visibleLg: or('visible-lg', 'visible-all'),
  _visibleMd: or('visible-md', 'visible-all'),
  _visibleSm: or('visible-sm', 'visible-all'),
  _visibleXs: or('visible-xs', 'visible-all'),
});
