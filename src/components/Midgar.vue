<template>
    <div class="image-container" style="background-color: #8564e6">
        <img src="../assets/midgar/1.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #56585f">
        <img src="../assets/midgar/2.png" class="w-100">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/3.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #383c3c">
        <img src="../assets/midgar/4.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/5.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #383c3c">
        <img src="../assets/midgar/6.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/7.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/8.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/9.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/10.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/11.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #e3e3e3">
        <img src="../assets/midgar/12.png" class="w-100">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/13.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/14.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/15.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/16.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/17.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/18.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/midgar/19.png" class="container mx-auto d-block">
    </div>
    
    <div class="container-fluid bg-dark">
        <div class="row py-5 mx-4">
            <div class="col-md-6">
                <RouterLink to="map" class="h4 text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-arrow-left-short" viewBox="0 0.5 16 16">
                        <path fill-rule="evenodd"
                            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    Map elements visualizer
                </RouterLink>
            </div>
            <div class="col-md-6">
            </div>
        </div>
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
a {
    color: #ffffff;
}

a:hover {
    color: rgba(255, 255, 255, 0.65);
}
</style>