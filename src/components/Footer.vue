<template>
    <div class="bg-dark footer">
        <div class="ui container">
            <p class="text-center footer-text">© 2019 Jingru Zhao</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        position: relative;
        bottom: 0;
        height: 100px;
        color: white;
        margin-top: 50px;
    }
    .footer-text {
        padding-top: 30px;
    }
    .bg-dark {
        background-color: black !important;
    }
</style>