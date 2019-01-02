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
        <div class="ui container" id="projects">
            <div class="ui two column grid">
                <div class="column">
                    <router-link class="ui link fluid card" to="/project/parkin">
                        <div class="image">
                            <img src="../assets/parkin.png">
                        </div>
                        <div class="content">
                            <div class="header">Park in</div>
                            <div class="meta">
                                <a>Interaction and Interface Design</a>
                            </div>
                            <div class="description">
                                Park in Park in Park in Park in Park in Park in Park in Park in Park in Park in
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                2 months
                            </span>
                            <span>
                                <i class="user icon"></i>
                                Individual Project
                            </span>
                        </div>
                    </router-link>
                </div>
                <div class="column">
                    <router-link class="ui link fluid card" to="/project/parkin">
                        <div class="image">
                            <img src="../assets/parkin.png">
                        </div>
                        <div class="content">
                            <div class="header">Park in</div>
                            <div class="meta">
                                <a>Interaction and Interface Design</a>
                            </div>
                            <div class="description">
                                Park in Park in Park in Park in Park in Park in Park in Park in Park in Park in
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                2 months
                            </span>
                            <span>
                                <i class="user icon"></i>
                                Individual Project
                            </span>
                        </div>
                    </router-link>
                </div>
                <div class="column">
                    <router-link class="ui link fluid card" to="/project/parkin">
                        <div class="image">
                            <img src="../assets/parkin.png">
                        </div>
                        <div class="content">
                            <div class="header">Park in</div>
                            <div class="meta">
                                <a>Interaction and Interface Design</a>
                            </div>
                            <div class="description">
                                Park in Park in Park in Park in Park in Park in Park in Park in Park in Park in
                            </div>
                        </div>
                        <div class="extra content">
                            <span class="right floated">
                                2 months
                            </span>
                            <span>
                                <i class="user icon"></i>
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
        opacity: 0.75;
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
</style>
