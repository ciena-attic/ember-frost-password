import Ember from 'ember'
import layout from '../templates/components/frost-password'
import _ from 'lodash'

export default Ember.Component.extend({
  layout: layout,
  type: 'password',
  classNames: ['frost-password'],
  revealable: false,
  showRevealer: false,
  revealed: false,
  timeoutInterval: 3000,
  timeout: undefined,
  prompt: Ember.computed('revealed', function () {
    return this.get('revealed') ? 'hide' : 'show'
  }),
  actions: {
    toggleReveal () {
      this.toggleProperty('revealed')
      this.set('type', this.get('revealed') ? 'text' : 'password')
      if (this.get('revealed')) {
        this.startTimeout()
      } else {
        Ember.run.cancel(this.timeout)
      }
    },
    onInput (args) {
      this.set('showRevealer', args.value.length > 0)
      if (_.isFunction(this.get('on-input'))) {
        this.get('on-input')(args)
      }
    }
  },
  startTimeout () {
    this.timeout = Ember.run.later(() => {
      this.actions.toggleReveal.bind(this)()
    }, this.timeoutInterval)
  }
})
