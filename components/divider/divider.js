const divide = (x, y) => { return x / y }

const divider = new Vue({
  el: '#divider',
  data: {
    guestdiv: 'Emmett',
    num1: 5,
    num2: 3
  },
  computed: {
    resultdiv: function () {
      const i = parseInt(this.num1)
      const j = parseInt(this.num2)
      return `${this.guestdiv}, your sum is ${divide(i, j)}.`
    }
  }
})