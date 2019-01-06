<template>
    <div id="home">
        <div style="position: relative">
            <video autoplay muted loop id="myVideo">
                <source src="../assets/home.mp4" type="video/mp4">
            </video>
            <div id="title">
                <h1>Jingru Zhao</h1>
                <h2>UI/UX Designer</h2>
            </div>
        </div>
        <Header/>
        <div class="container" id="projects">
            <div class="row">
                <div class="col-lg-6">
                    <router-link class="card" to="/project/parkin">
                        <img src="../assets/parkin.png" class="card-img-top">
                        <div class="card-body">
                            <div class="card-title">Park in</div>
                            <div class="card-text">
                                Park in Park in Park in Park in Park in Park in Park in Park in Park in Park in
                            </div>
                        </div>
                        <div class="card-footer">
                            <span class="float-right">
                                2 months
                            </span>
                            <span>
                                Individual Project
                            </span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './Header'
    import Footer from './Footer'

    export default {
        name: 'HelloWorld',
        props: {},
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped>
    #myVideo {
        position: relative;
        top: 0;
        left: 0;
        min-width: 100%;
        /*opacity: 0.75;*/
        /*filter: grayscale(50%);*/
    }

    #title {
        position: absolute;
        left: 50%;
        top: 50%;
        color: white;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    h1 {
        font-size: 8em;
    }

    h2 {
        font-size: 4em;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>
