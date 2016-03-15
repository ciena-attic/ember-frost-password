import Ember from 'ember'

export default Ember.Controller.extend({
  errored: true,

  actions: {
    text (attrs) {
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    toggleError () {
      this.toggleProperty('error')
    }
  }
})
