<template>
    <div id="home">
        <div style="position: relative" v-if="bigScreen">
            <video autoplay muted loop id="myVideo" width="100%">
                <source src="home.mp4" type="video/mp4">
            </video>
            <div id="title">
                <h1>Jingru Zhao</h1>
                <h3>User Experience Designer</h3>
            </div>
        </div>
        <Header/>
        <div class="container" id="projects">
            <router-link class="card" :class="{'card-bigscreen': bigScreen}" to="/project/parkin">
                <div class="row">
                    <div class="col-sm-1" v-if="bigScreen">
                        <ul class="vertical-center">
                            <li class="active">&nbsp;&nbsp;01&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;02&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;03&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;04&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div class="col-sm-5">
                        <img src="../assets/parkin_cover.png" width="100%" :class="{'img-bigscreen': bigScreen}">
                    </div>
                    <div class="col-sm-6">
                        <div class="card-description" :class="{'vertical-center': bigScreen, 'card-description-bigscreen': bigScreen}">
                            <h1>Park In</h1>
                            <p>A mobile application that helps drivers find parking spots easily and save time in a large parking lot.</p>
                            <div class="row">
                                <div class="col-4">
                                    <h2 class="hline"></h2>
                                </div>
                                <div class="col-8">
                                    <h2>R E A D &nbsp;&nbsp;&nbsp;O N</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="card" :class="{'card-bigscreen': bigScreen}" to="/project/waterme">
                <div class="row">
                    <div class="col-sm-1" v-if="bigScreen">
                        <ul class="vertical-center">
                            <li>&nbsp;&nbsp;01&nbsp;&nbsp;</li>
                            <li class="active">&nbsp;&nbsp;02&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;03&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;04&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div class="col-sm-5">
                        <img src="../assets/waterme_cover.png" width="100%" :class="{'img-bigscreen': bigScreen}">
                    </div>
                    <div class="col-sm-6">
                        <div class="card-description" :class="{'vertical-center': bigScreen, 'card-description-bigscreen': bigScreen}">
                            <h1>Water Me</h1>
                            <p>An interactive device that intends to awake the consciousness of the people to care for plants.</p>
                            <div class="row">
                                <div class="col-4">
                                    <h2 class="hline"></h2>
                                </div>
                                <div class="col-8">
                                    <h2>R E A D &nbsp;&nbsp;&nbsp;O N</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="card" :class="{'card-bigscreen': bigScreen}" to="/project/dvent">
                <div class="row">
                    <div class="col-sm-1" v-if="bigScreen">
                        <ul class="vertical-center">
                            <li>&nbsp;&nbsp;01&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;02&nbsp;&nbsp;</li>
                            <li class="active">&nbsp;&nbsp;03&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;04&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div class="col-sm-5">
                        <img src="../assets/dvent_cover_a.png" width="100%" :class="{'img-bigscreen': bigScreen}">
                    </div>
                    <div class="col-sm-6">
                        <div class="card-description" :class="{'vertical-center': bigScreen, 'card-description-bigscreen': bigScreen}">
                            <h1>Dvent</h1>
                            <p>An interactive application that helps DePaul CDM schools' students find their interested events and make more friends.</p>
                            <div class="row">
                                <div class="col-4">
                                    <h2 class="hline"></h2>
                                </div>
                                <div class="col-8">
                                    <h2>R E A D &nbsp;&nbsp;&nbsp;O N</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="card" :class="{'card-bigscreen': bigScreen}" to="/project/tft">
                <div class="row">
                    <div class="col-sm-1" v-if="bigScreen">
                        <ul class="vertical-center">
                            <li>&nbsp;&nbsp;01&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;02&nbsp;&nbsp;</li>
                            <li>&nbsp;&nbsp;03&nbsp;&nbsp;</li>
                            <li class="active">&nbsp;&nbsp;04&nbsp;&nbsp;</li>
                        </ul>
                    </div>
                    <div class="col-sm-5">
                        <img src="../assets/TFT.png" width="100%" :class="{'img-bigscreen': bigScreen}">
                    </div>
                    <div class="col-sm-6">
                        <div class="card-description" :class="{'vertical-center': bigScreen, 'card-description-bigscreen': bigScreen}">
                            <h1>TFT</h1>
                            <p>An interactive application that helps DePaul CDM schools' students find their interested events and make more friends.</p>
                            <div class="row">
                                <div class="col-4">
                                    <h2 class="hline"></h2>
                                </div>
                                <div class="col-8">
                                    <h2>R E A D &nbsp;&nbsp;&nbsp;O N</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
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
        },
        data () {
            return {
                innerWidth: 0
            }
        },
        methods:{
            onResize: function () {
                this.innerWidth = window.innerWidth
            }
        },
        computed: {
            bigScreen: function () {
                return this.innerWidth >= 768
            }
        },
        mounted() {
            this.onResize()
            window.addEventListener('scroll', this.onscroll)
            window.addEventListener('resize', this.onResize)
        },
        destroyed() {
            window.removeEventListener('scroll', this.onscroll)
            window.removeEventListener('resize', this.onResize)
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

    .card {
        margin-top: 30px;
        box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.6);
        padding: 5% 0 5% 0;
    }

    .card-bigscreen {
        padding: 40px 40px 40px 0;
    }

    .vertical-center {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .card img {
        padding: 5% 10% 5% 10%;
    }

    .card .img-bigscreen {
        padding: 8% 5% 8% 20%;
    }
    .card-description {
        padding: 0 10% 0 10%;
    }
    .card-description-bigscreen {
        padding: 0 20% 0 10%;
    }

    .card ul {
        list-style-type: none;
    }

    .card li {
        padding: 10px 0 10px 0;
        color: rgba(0, 0, 0, 0.1);
        font-size: 1.3em;
    }

    .card li.active {
        color: rgba(0, 0, 0, 0.8);
        /*text-decoration: line-through;*/
    }

    .card h1 {
        font-size: 3em;
        color: black;

    }
    .card h2 {
        font-size: 1em;
        font-weight: bolder;
    }
    .card .hline {
        text-align:center;
        border-bottom: 2px solid #000;
        margin: 8px 0 20px;
    }
    .card a{
        text-decoration: none;
    }
    .card p {
        margin-top: -5px;
        margin-bottom: 30px;
    }

    .card-description-bigscreen p {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    #home {
        background-color: rgba(0, 0, 0, 0.1);
    }
    #projects {
        padding: 0 10% 0 10%;
    }
</style>
