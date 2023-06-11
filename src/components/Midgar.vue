<template>
    <div class="image-container">
        <img src="../assets/midgar/1.png">
        <img src="../assets/midgar/2.png">
        <img src="../assets/midgar/3.png">
        <img src="../assets/midgar/4.png">
        <img src="../assets/midgar/5.png">
        <img src="../assets/midgar/6.png">
        <img src="../assets/midgar/7.png">
        <img src="../assets/midgar/8.png">
        <img src="../assets/midgar/9.png">
        <img src="../assets/midgar/10.png">
        <img src="../assets/midgar/11.png">
        <img src="../assets/midgar/12.png">
        <img src="../assets/midgar/13.png">
        <img src="../assets/midgar/14.png">
        <img src="../assets/midgar/15.png">
        <img src="../assets/midgar/16.png">
        <img src="../assets/midgar/17.png">
        <img src="../assets/midgar/18.png">
        <img src="../assets/midgar/19.png">
        <img src="../assets/midgar/20.png">
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: "Midgar",
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