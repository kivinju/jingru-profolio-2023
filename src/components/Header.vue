
<template>
    <div class="ui inverted menu header">
        <router-link class="item" to="/">Jingru Zhao</router-link>
        <div class="right menu">
            <a class="item" href="/#projects" >
                Projects
            </a>
            <a class="item" href="#">
                Resume
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header {
        position: sticky;
        top: 0;
        margin-top: -5px;
        z-index: 100;
    }
    .item {
        text-decoration: none;
        color: white;
        font-size: 1em;
    }
</style>