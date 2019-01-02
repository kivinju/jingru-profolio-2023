<template>
    <div class="ui inverted menu footer">
        <div class="ui container">
            footer can use absolute
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
</style>