<template>
    <div class="image-container">
        <img src="../assets/om/1.png">
        <video muted loop autoplay src="/om_prototype.mov" width="100%">
        </video>
        <img src="../assets/om/2.png">
        <img src="../assets/om/3.png">
        <img src="../assets/om/4.png">
        <img src="../assets/om/5.png">
        <img src="../assets/om/6.png">
        <img src="../assets/om/7.png">
        <img src="../assets/om/8.png">
        <img src="../assets/om/9.png">
        <img src="../assets/om/10.png">
        <img src="../assets/om/11.png">
        <img src="../assets/om/12.png">
        <img src="../assets/om/13.png">
        <img src="../assets/om/14.png">
        <img src="../assets/om/15.png">
        <img src="../assets/om/16.png">
        <img src="../assets/om/17.png">
        <img src="../assets/om/18.png">
        <img src="../assets/om/19.png">
        <img src="../assets/om/20.png">
        <img src="../assets/om/21.png">
        <img src="../assets/om/22.png">
        <img src="../assets/om/23.png">
        <img src="../assets/om/24.png">
        <img src="../assets/om/25.png">
        <img src="../assets/om/26.png">
        <img src="../assets/om/27.png">
        <img src="../assets/om/28.png">
        <img src="../assets/om/29.png">
        <img src="../assets/om/30.png">
        <img src="../assets/om/31.png">
        <img src="../assets/om/32.png">
    </div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: "Om",
    beforeRouteEnter: store.next_func
}
</script>

<style scoped>
.image-container img,
.image-container video {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
}
</style>