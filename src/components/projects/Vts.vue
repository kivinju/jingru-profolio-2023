<template>
    <div class="container-fluid" id="main" style="border: 0; padding-top: 40px">
        <div class="row">
            <Sidebar :indexes="indexes" class="col-md-3"></Sidebar>
            <div class="col-md-8">
                <img src="../../assets/waterme/first_image.png">
                <div>
                    <h2><span>About This Project -- Vts</span></h2>
                    <p><strong>Project type:</strong> Individual project</p>
                    <p><strong>Timeline:</strong> Two Months</p>
                    <p><strong>Context:</strong> This was a project inspired by a phenomenon around my life.</p>
                    <p><strong>Problem:</strong> More and more people care a lot for animals but ignore the companionship of plants.</p>
                    <p><strong>Solution:</strong> An interactive device that is intended to awake the consciousness of the
                        people to care for plants.</p>
                    <p><strong>Youtube:</strong> <a href="https://youtu.be/nShqTc6s6gA" target="_blank"> Water Me</a></p>
                </div>

                <hr />

                <h1 id="i-r" class="text-center">01 / Research</h1>
                <div>
                    <h2 id="i-b"><span>INSPIRATION</span></h2>
                    <div class="row">
                        <div class="offset-lg-1 col-lg-6">
                            <div>

                                <p>More and more people love animals.
                                Animals play with them and make them happy.
                                People take good care of dogs, cats, birds etc. and feed them expensive food.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img src="../../assets/waterme/animal.png">
                        </div>
                    </div>

                    <br  /> <br  /> <br  />

                    <div class="row">
                        <div class="offset-lg-1 col-lg-4">
                            <img src="../../assets/waterme/plant.jpg">
                        </div>
                        <div class="col-lg-6">
                            <div>

                                <p><strong>However</strong>, flowers consume their whole life to accompany people and decorate rooms.</p>
                                <p>Few people care about them. They forget to water them and ignore their existence.</p>
                            </div>
                        </div>
                    </div>

                    <h2 id="i-ca"><span>USER RESEARCH</span></h2>
                    <div class="competitive">
                        <p>I conducted a <strong>survey</strong> among my friends and received <strong>feedback from 121 people</strong>.</p>

                        <img src="../../assets/waterme/survey.png" style="margin-bottom:5px;">

                        <img src="../../assets/waterme/feedback.png" style="margin-bottom:10px;">

                        <p>From the survey, I found that:</p>

                        <div class="feedback">
                            <ul>
                                <li>Some single white collars usually live alone and need to be accompanied.</li>
                                <li>They do not have much time and money to raise pets, so they bought some plants like
                                    potted plants.</li>
                            </ul>
                        </div>

                        <p>But...</p>
                    </div>

                    <h2 id="i-st"><span>USER STORY</span></h2>
                    <div class="story">
                        <img src="../../assets/waterme/persona.png">
                    </div>

                    <h2 id="i-i"><span>INSIGHT</span></h2>
                    <p>Through this project, I would like to create an interaction device to make people aware of the companionship
                        of plants and awakening people to take good care of them.</p>

                </div>


                <hr>
                <h1 id="i-cd" class="text-center">02 / Conceptual Design</h1>
                <div>
                    <h2 id="i-us"><span>MIND MAP</span></h2>
                    <img src="../../assets/waterme/mind_map.png">
                    <p>Other materials : Arduino, Polyfoam, Cotton cloth</p>
                </div>

                <h2 id="i-jm"><span>SKETCH</span></h2>
                <div class="row">
                    <div class="offset-lg-1 col-lg-6">
                        <div>

                            <p>I drew a sketch and contemplated three forms of interaction.</p>
                            <p>Due to limited materials, I finally decided to do the second and the third one.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="../../assets/waterme/sketch.jpg">
                    </div>
                </div>


                <hr>
                <h1 id="i-id" class="text-center">03 / Interaction Design</h1>
                <h2 id="i-w"><span>MATERIALS</span></h2>
                <img src="../../assets/waterme/materials.png">


                <h2 id="i-vd"><span>CIRCUIT DIAGRAM</span></h2>
                <img src="../../assets/waterme/circuit_diagram.png">

                <h2 id="i-pr"><span>PRODUCTION PROGRESS</span></h2>
                <img src="../../assets/waterme/production_progress.png" style="margin-bottom:30px;">
                <p>After setting up the device, I began to connect the circuit and tested LED lights.</p>
                <p>Meanwhile, I wrote code to achieve the desired effect.</p>
                <img src="../../assets/waterme/production_progress_a.png" style="margin-bottom:30px;">
                <img src="../../assets/waterme/production_progress_b.png">

                <h2 id="i-in"><span>INTERACTION PROCESS</span></h2>
                <img src="../../assets/waterme/interaction_process.png" >
                <ul>
                    <li>By rotating the watering can counterclockwise until the protoresistor appears, the LED lights start to
                    imitate the water flow continuously.</li>
                    <li>By rotating the watering can clockwise, it will stop watering.</li>
                </ul>

                <!--<ul>-->
                    <!--<li>Rotate the watering can counterclockwise until the protoresistor appears. The LED lights start to-->
                        <!--imitate the water flow continuously.</li>-->
                    <!--<li>Rotate the watering can clockwise and it will stop watering.</li>-->
                <!--</ul>-->

                <p id="i-ot" style="margin-top:30px;"><strong>OTHER INTERACTIONS</strong></p>
                <div class="row">
                    <div class="offset-lg-1 col-lg-6">
                        <div>
                            <ul>
                                <li>In order to increase the fun, I designed another interactive form with conductive inks.</li>
                                <li>When people connect the vase with their fingers, the vase will be connected with LED lights.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="../../assets/waterme/other_interactions.png">
                    </div>
                </div>

                <h2 id="i-s"><span>USER SCENARIO</span></h2>
                    <img src="../../assets/waterme/user_scenario.png">

                <hr>
                <h1 id="i-ut" class="text-center" style="margin-bottom:50px;">04 / Summary</h1>
                <div class="row">
                    <div class="offset-lg-1 col-lg-6">
                        <div>

                            <p>In the process of making the device, I encountered a lot of difficulties, such as: LED lights were
                                too bright to show a good visual result. I increased the resistance to weaken the lignt.
                                Finally I achieved a desired effect.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="../../assets/waterme/summary.png">
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <!--<hr />-->
                <!--<h1 id="i-rt" class="text-center">05 / Reflection & Takeaways</h1>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../util/Sidebar'

    export default {
        name: "Waterme",
        data() {
            return {
                "indexes": [
                    {
                        'id': 'i-r', 'content': '01 / Research', 'sub': [
                            {'id': 'i-b', 'content': 'INSPIRATION'},
                            {'id': 'i-ca', 'content': 'USER RESEARCH'},
                            {'id': 'i-st', 'content': 'USER STORY'},
                            {'id': 'i-i', 'content': 'INSIGHT'},
                        ]
                    },
                    {
                        'id': 'i-cd', 'content': '02 / Conceptual Design', 'sub': [
                            {'id': 'i-us', 'content': 'MIND MAP'},
                            {'id': 'i-jm', 'content': 'SKETCH'},
                        ]
                    },
                    {
                        'id': 'i-id', 'content': '03 / Interaction Design', 'sub': [
                            {'id': 'i-w', 'content': 'MATERIALS'},
                            {'id': 'i-vd', 'content': 'CIRCUIT DIAGRAM'},
                            {'id': 'i-pr', 'content': 'PRODUCTION PROGRESS'},
                            {'id': 'i-in', 'content': 'INTERACTION PROCESS'},
                            {'id': 'i-s', 'content': 'USER SCENARIO'},
                        ]
                    },
                    {
                        'id': 'i-ut', 'content': '04 / Summary', 'sub': []
                    },
                    // {
                    //     'id': 'i-rt', 'content': '05 / Reflection & Takeaways\n', 'sub': []
                    // },
                ]
            }
        },
        components: {
            Sidebar
        }
    }
</script>

<style scoped>
    img {
        width: 100%;
    }

    h1, h2{
        padding-top: 50px;
    }

    h2 span {
        /*background-color: #3f8ccb;*/
    }

    h2 {
        margin-bottom: 30px;
        font-size: 1.5em;
        color:#3f8ccb;
        /*color: white;*/
    }

    p {
        font-size: 1.2em;
    }

    .jingru-box {
        margin-top: 10px;
        padding-top: 10px;
        /*background-color: rgba(0, 0, 0, 0.1);*/
    }

    .competitive span {
        color: #008afc;
    }


    li {
        font-size: 1.2em;
        line-height: 40px;
    }

    li span {
        color: #ed5a5a;
        font-weight: bold;
    }

    .test {
        margin-top: 80px;
    }

</style>