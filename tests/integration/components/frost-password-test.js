import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-password',
  'Integration: EmberFrostPasswordComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-password}}
      //     template content
      //   {{/frost-password}}
      // `)

      this.render(hbs`{{frost-password}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
