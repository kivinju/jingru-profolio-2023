<template>
    <div>
        <div class="sidebar" v-if="show_side ">

            <ul v-for="i in indexes" :key="i.id">
                <li @click="go(i.id)">
                    {{ i.content }}
                </li>
                <ul v-if="i.sub.length > 0">
                    <li v-for="s in i.sub" :key="s.id" @click="go(s.id)">
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
        methods: {
          go: function (hash) {
              window.location.hash = hash
          },
          onscroll: function () {
              window.console.log(window.scrollY)
              window.console.log(window.document.getElementById('i-b').offsetTop)
          }
        },
        computed: {
          show_side: function () {
              return window.innerWidth >= 768
          }
        },
        mounted() {
            window.addEventListener('scroll', this.onscroll)
        },
        destroyed() {
            window.removeEventListener('scroll', this.onscroll)
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
</style>