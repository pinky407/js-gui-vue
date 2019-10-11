

const comparer = new Vue({
  el: '#comparer',
  data: {
    guestcomp: 'Emmett',
    str1: newyork,
    str2: chicago
  },
  computed: {
    shorteststring: function () {
      const i = (this.str1)
      const j = (this.str2)
      return `${this.guestcomp}, shortest string is ${ Math.min(i.length, j.length)}.`
    }
  }
})