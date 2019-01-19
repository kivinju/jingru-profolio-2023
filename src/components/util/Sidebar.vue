<template>
    <div>
        <div class="sidebar" v-if="show_side ">

            <ul v-for="i in indexes" :key="i.id">
                <li @click="go(i.id)" :class="{'highlight': i.id === highlight}">
                    {{ i.content }}
                </li>
                <ul v-if="i.sub.length > 0">
                    <li v-for="s in i.sub" :key="s.id" @click="go(s.id)" :class="{'highlight': s.id === highlight}">
                        {{ s.content }}
                    </li>
                </ul>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        props: ['indexes'],
        data() {
            return {
                'highlight': '',
                'innerWidth': 0
            }
        },
        methods: {
          go: function (hash) {
              window.location.hash = hash
          },
          onscroll: function () {
              let els = []
              let min = 1e10
              let min_highlight = this.highlight
              this.indexes.forEach(i => {
                  els.push(i)
                  i.sub.forEach(s => {els.push(s)})
              })
              els.forEach(i => {
                  let offset = window.scrollY - window.document.getElementById(i.id).offsetTop
                  if (offset > 0 && offset < min) {
                      min = offset
                      min_highlight = i.id
                  }
              })
              this.highlight = min_highlight
              window.console.log(this.highlight)
          },
          onResize: function () {
              this.innerWidth = window.innerWidth
          }
        },
        computed: {
          show_side: function () {
              return this.innerWidth >= 768
          }
        },
        mounted() {
            this.onResize()
            window.addEventListener('scroll', this.onscroll)
            window.addEventListener('resize', this.onResize)
        },
        destroyed() {
            window.removeEventListener('scroll', this.onscroll)
            window.removeEventListener('resize', this.onResize)
        }
    }
</script>

<style scoped>
 .sidebar {
     position: fixed;
     top: 50%;
     -ms-transform: translateY(-50%);
     transform: translateY(-50%);
     color: gray;
 }
a {
    text-decoration: none;
}
ul {
    list-style-type: none;
    padding-inline-start: 20px;
}
li {
    margin-bottom: 10px;
    cursor: pointer;
}
.highlight {
    color: red;
}
</style>