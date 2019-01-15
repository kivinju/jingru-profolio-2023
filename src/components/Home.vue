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
                    <router-link class="card card-top" to="/project/parkin">
                        <img src="../assets/parkin.png" class="card-img-top">
                        <div class="card-body">
                            <div class="card-title">Park In</div>
                            <!--<div class="card-description">-->
                                <!--Interaction & Interface Design-->
                            <!--</div>-->
                            <div class="card-text">
                                A mobile application that helps drivers find parking spots easily and save time in a large parking lot.
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
                <div class="col-lg-6">
                    <router-link class="card card-top" to="/project/waterme">
                        <img src="../assets/water_me.gif" class="card-img-top">
                        <div class="card-body">
                            <div class="card-title">Water Me</div>
                            <div class="card-text">
                                An interactive device that intended to awake the consciousness of the people to care for plants.
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
                <div class="col-lg-6">
                    <router-link class="card" to="/project/dvent">
                        <img src="../assets/parkin.png" class="card-img-top">
                        <div class="card-body">
                            <div class="card-title">Park In</div>
                            <!--<div class="card-description">-->
                            <!--Interaction & Interface Design-->
                            <!--</div>-->
                            <div class="card-text">
                                A mobile application that helps drivers find parking spots easily and save time in a large parking lot.
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
                <div class="col-lg-6">
                    <router-link class="card" to="/project/jot">
                        <img src="../assets/parkin.png" class="card-img-top">
                        <div class="card-body">
                            <div class="card-title">Park In</div>
                            <!--<div class="card-description">-->
                            <!--Interaction & Interface Design-->
                            <!--</div>-->
                            <div class="card-text">
                                A mobile application that helps drivers find parking spots easily and save time in a large parking lot.
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
        <blockquote class="container blockquote text-center">
            <hr>
            <h3 class="mb-0 blockquote-content">"I haven't failed. I've just found 10,000 ways that won't work"</h3>
            <footer class="blockquote-footer" style="font-size: 1em">Thomas Edison</footer>
        </blockquote>
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
        margin-bottom: 1px;
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

    .card-description {
        opacity: 0.5;
        font-size: 15px;
        /*background-color: #FDDB4D;*/
    }

    .card-top {
        margin-bottom: 30px ;
    }

    .card-title {
        font-size: 2em;
    }

    .card-text, .card-footer {
        opacity: 0.75;
    }

    .blockquote {
        /*padding-top: 20px;*/
    }

    .blockquote-content {
        padding-top: 10%;
    }

    .blockquote-footer {
        padding-top: 30px;
        padding-bottom: 10%;
    }
</style>
