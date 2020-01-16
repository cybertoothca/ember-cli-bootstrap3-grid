import Ember from 'ember';
// noinspection JSFileReferences
import layout from '../templates/components/twbs-clearfix';

/**
 * A convenience component for rendering _Responsive Column Resets_ as described in the Bootstrap documentation.  This
 * is meant to go at the end of an each-loop where you pass the index of the loop into the component and the sizes
 * that you want the column-reset rendered for.
 * @see http://getbootstrap.com/css/#grid-responsive-resets
 */
export default Ember.Component.extend({
  /**
   * The class bindings based on the computed properties within.
   */
  classNameBindings: [
    'clearfix',
    'visibleLgBlock',
    'visibleMdBlock',
    'visibleSmBlock',
    'visibleXsBlock'
  ],
  /**
   * Used in the classNameBinding.
   */
  clearfix: Ember.computed.or('visibleLgBlock', 'visibleMdBlock', 'visibleSmBlock', 'visibleXsBlock'),
  /**
   * REQUIRED.  Specify the positive-non-zero column count that you expect the responsive column reset to be applied to.
   */
  columnCount: 1,
  /**
   * REQUIRED.  Supply the index from the each loop.
   */
  index: undefined,
  /**
   * If the index has not been supplied, then don't render anything.
   */
  isVisible: Ember.computed.alias('_isRender'),
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
  visibleLgBlock: Ember.computed.and('_isRender', '_visibleLg'),
  /**
   * Used in the classNameBinding.
   */
  visibleMdBlock: Ember.computed.and('_isRender', '_visibleMd'),
  /**
   * Used in the classNameBinding.
   */
  visibleSmBlock: Ember.computed.and('_isRender', '_visibleSm'),
  /**
   * Used in the classNameBinding.
   */
  visibleXsBlock: Ember.computed.and('_isRender', '_visibleXs'),
  _isRender: Ember.computed('columnCount', 'index', function () {
    return this.get('index') > 0 && ((this.get('index') + 1) % this.get('columnCount')) === 0;
  }),
  _visibleLg: Ember.computed.or('visible-lg', 'visible-all'),
  _visibleMd: Ember.computed.or('visible-md', 'visible-all'),
  _visibleSm: Ember.computed.or('visible-sm', 'visible-all'),
  _visibleXs: Ember.computed.or('visible-xs', 'visible-all')
});
