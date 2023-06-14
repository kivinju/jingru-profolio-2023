<template>
    <div class="image-container" style="background-color: #252828">
        <img src="../assets/map/1.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #070707">
        <img src="../assets/map/2.png" class="w-100">
    </div>
    <div class="image-container" style="background-color: #383c3c">
        <img src="../assets/map/3.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #383c3c">
        <img src="../assets/map/4.png" class="container mx-auto d-block">
    </div>
    <div class="image-container py-5" style="background-color: #383c3c">
        <img src="../assets/map/5.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/6.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/7.png" class="container mx-auto d-block">
    </div>
    <div class="image-container pb-5" style="background-color: #f5f5f5">
        <img src="../assets/map/8.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/9.png" class="container mx-auto d-block">
    </div>
    <div class="image-container pb-2" style="background-color: #f5f5f5">
        <img src="../assets/map/10.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/11.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/12.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/13.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #5da399">
        <img src="../assets/map/14.png" class="w-100">
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
</style>