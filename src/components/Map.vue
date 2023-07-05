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
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/map/14.png" class="container mx-auto d-block">
    </div>
    <div class="container-fluid bg-dark">
        <div class="row py-5 mx-4">
            <div class="col-md-6">
                <RouterLink to="om" class="h4 text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0.5 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    Autonomous driving launch system
                </RouterLink>
            </div>
            <div class="col-md-6">
                <RouterLink to="midgar" class="float-end h4 text-decoration-none">Data density platform
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-right-short" viewBox="0 0.5 16 16">
                        <path fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </RouterLink>
            </div>
        </div>
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
a {
    color: #ffffff;
}

a:hover {
    color: rgba(255, 255, 255, 0.65);
}
</style>