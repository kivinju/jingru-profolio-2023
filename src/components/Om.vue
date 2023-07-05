<template>
    <div class="image-container" style="background-color: #5da399">
        <img src="../assets/om/1.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/2.png" class="w-100">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/3.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/4.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/5.png" class="container mx-auto d-block">
    </div>
    <div class="image-container py-5" style="background-color: #453731">
        <img src="../assets/om/6.png" class="container mx-auto d-block">
    </div>
    <div class="image-container pb-5" style="background-color: #453731">
        <img src="../assets/om/7.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/8.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/9.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/10.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #252828">
        <img src="../assets/om/11.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/12.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/13.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/14.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/15.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/16.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/17.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/18.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/19.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #000000">
        <video muted loop autoplay src="/om_prototype.mov" width="100%" class="container mx-auto d-block">
        </video>
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/20.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/21.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/22.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/23.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ecefef">
        <img src="../assets/om/24.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #ffffff">
        <img src="../assets/om/25.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/26.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/27.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/28.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/29.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/30.png" class="container mx-auto d-block">
    </div>
    <div class="image-container" style="background-color: #f5f5f5">
        <img src="../assets/om/31.png" class="container mx-auto d-block">
    </div>
    <div class="container-fluid bg-dark">
        <div class="row py-5 mx-4">
            <div class="col-md-6"></div>
            <div class="col-md-6">
                <RouterLink to="map" class="float-end h4 text-decoration-none">Map elements visualizer
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
    name: "Om",
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