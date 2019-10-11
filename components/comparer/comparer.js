const shortest = (x, y) => { return Math.min(x.length, y.length) }

const comparer = new Vue({
  el: '#comparer',
  data: {
    guestc: 'Emmett',
    str1: 'newyork',
    str2: 'chicago'
  },
  computed: {
    shorteststring: function () {
      const i = (this.str1)
      const j = (this.str2)
      return `${this.guestc}, shortest string length is ${shortest(i, j)}.`
    }
  }
})