
<template>
    <div class="navbar navbar-dark bg-dark header navbar-expand-md">
        <router-link class="navbar-brand" to="/">
            <img src="../assets/favicon.jpg" width="25" height="25" alt="">
            Jingru Zhao
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-sm-4" >
                    <a href="/#projects">Projects</a>
                </li>
                <li class="nav-item mr-sm-2">
                    <a href="resume.pdf" target="_blank">Resume</a>
                </li>
            </ul>
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
        margin-top: -8px;
        z-index: 100;
        border-radius: 0;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 1em;
    }
    .bg-dark {
        background-color: black !important;
    }
</style>