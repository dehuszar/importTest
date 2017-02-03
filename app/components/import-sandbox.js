import Ember from 'ember';
import ltHelper from 'ember-truth-helpers/helpers/lt';

export default Ember.Component.extend({
  didInsertElement() {
    console.log(ltHelper.ltHelper); // returns function
    debugger // accessing ltHelper at breakpoint fails
  }
});
