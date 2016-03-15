import Ember from 'ember'
import layout from '../templates/components/frost-password'
import _ from 'lodash'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['frost-password'],
  isCapsOn: false,
  showRevealer: false,
  revealable: false,
  revealed: false,
  type: 'password',
  wasCapsOn: false,

  focusOut: Ember.on('focusOut', function () {
    if (this.get('isCapsOn')) {
      this.set('wasCapsOn', true)
    }
    this.set('isCapsOn', false)
  }),
  focusIn: Ember.on('focusIn', function () {
    if (this.get('wasCapsOn')) {
      this.set('isCapsOn', true)
      this.set('wasCapsOn', false)
    }
  }),
  keyDown: Ember.on('keyDown', function (e) {
    var s = e || window.e
    if (this.get('isCapsOn') === false && (s.which === 20 || s.keyCode === 20)) {
      this.set('isCapsOn', true)
    }
  }),
  keyUp: Ember.on('keyUp', function (e) {
    var s = e || window.e
    if (this.get('isCapsOn') === true && (s.which === 20 || s.keyCode === 20)) {
      this.set('isCapsOn', false)
    }
  }),
  keyPressed: Ember.on('keyPress', function (e) {
    var s = String.fromCharCode(e.which || e.keyCode)   // IE support
    if ((s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) ||
      (s.toUpperCase() !== s && s.toLowerCase() === s && e.shiftKey)) { // caps is on
      this.set('isCapsOn', true)
    }
  }),

  actions: {
    onInput (args) {
      this.set('showRevealer', args.value.length > 0)
      if (_.isFunction(this.get('on-input'))) {
        this.get('on-input')(args)
      }
    },
    toggleReveal () {
      this.toggleProperty('revealed')
      this.set('type', this.get('revealed') ? 'text' : 'password')
    }
  }
})
