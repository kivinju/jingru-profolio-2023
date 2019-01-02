<template>
    <div class="ui container">
        <img src="../../assets/parkin/first.jpg">
        <div>
            <h2><span>About This Project</span></h2>
            <p>Project type:</p>
            <p>Timeline:</p>
            <p><strong>Overview:</strong> Helvetica Light is an easy to read font, with tall and narrow letters, that works well on almost every site.</p>
            <p>Problem:</p>
            <p>Solution:</p>
        </div>
        <div class="ui five column grid">
            <div class="column">
                <img src="../../assets/parkin/p1.png">
            </div>
            <div class="column">
                <img src="../../assets/parkin/p2.png"/>
            </div>
            <div class="column">
                <img src="../../assets/parkin/p3.png"/>
            </div>
            <div class="column">
                <img src="../../assets/parkin/p4.png"/>
            </div>
            <div class="column">
                <img src="../../assets/parkin/p5.png"/>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="divider-header">
            <h1>01 / Research</h1>
        </div>
        <div>
            <h2><span>BACKGROUND</span></h2>
            <div class="ui two column grid">
                <div class="column">
                    <div class="vertical-center">
                        <p>The popularity of cars makes people more willing to drive instead of taking a bus or subway. Many shopping centers provide their own parking in order to attract more shoppers.</p>
                        <p>However, in the consequence of lacking guideposts, It is difficult for drivers to find a parking space and remember their cars’ locations in a huge parking lot if it is full of cars.</p>
                    </div>
                </div>
                <div class="column">
                    <img src="../../assets/parkin/la.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Parkin"
    }
</script>

<style scoped>
img {
    width: 100%;
}
.divider-header {
    text-align: center;
}
h2 span{
    background-color: orange;
}
.vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
</style>