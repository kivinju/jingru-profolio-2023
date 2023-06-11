<template>
    <div class="image-container">
        <img src="../assets/map/1.png">
        <img src="../assets/map/2.png">
        <img src="../assets/map/3.png">
        <img src="../assets/map/4.png">
        <img src="../assets/map/5.png">
        <img src="../assets/map/6.png">
        <img src="../assets/map/7.png">
        <img src="../assets/map/8.png">
        <img src="../assets/map/9.png">
        <img src="../assets/map/10.png">
        <img src="../assets/map/11.png">
        <img src="../assets/map/12.png">
        <img src="../assets/map/13.png">
        <img src="../assets/map/14.png">
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: "Map",
    beforeRouteEnter: store.next_func
}
</script>

<style scoped>
.image-container img {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
}
</style>