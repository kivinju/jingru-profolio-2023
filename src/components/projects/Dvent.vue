<template>
    <div class="container-fluid" id="main" style="border: 0; padding-top: 40px; padding-bottom: 170px">
        <div class="row">
            <Sidebar :indexes="indexes" class="col-md-3"></Sidebar>
            <h1>Dvent</h1>
            <div class="col-md-8">
                <img src="../../assets/parkin/first.png">
                <div>
                    <h2><span>About This Project</span></h2>
                    <p><strong>Project type:</strong> Individual project</p>
                    <p><strong>Timeline:</strong> Two Months</p>
                    <p><strong>Context:</strong> This was my first project inspired by one of my best friends,
                        a driver with a poor sense of direction.</p>
                    <p><strong>Problem:</strong> It is difficult for drivers to find suitable parking spaces and
                        remember their
                        cars’ locations in a huge parking lot full of cars.</p>
                    <p><strong>Solution:</strong> A mobile application, by presenting the available parking spots and
                        parking information, helps drivers find suitable spots before they even show up in the
                        parking
                        lot.
                        It also helps drivers to locate their cars quickly.</p>
                </div>
                <div class="row jingru-box">
                    <div class="col-md">
                        <img src="../../assets/parkin/p1.png">
                    </div>
                    <div class="col-md">
                        <img src="../../assets/parkin/p2.png"/>
                    </div>
                    <div class="col-md">
                        <img src="../../assets/parkin/p3.png"/>
                    </div>
                    <div class="col-md">
                        <img src="../../assets/parkin/p4.png"/>
                    </div>
                    <div class="col-md">
                        <img src="../../assets/parkin/p5.png"/>
                    </div>
                </div>
                <hr />

                <h1 id="i-r" class="text-center">01 / Research</h1>
                <div>
                    <h2 id="i-b"><span>BACKGROUND</span></h2>
                    <div class="row">
                        <div class="col-lg-8">
                            <div>
                                <p>The popularity of cars makes people more willing to drive instead of taking a bus or
                                    subway.
                                    Many shopping centers provide their own parking in order to attract more
                                    shoppers.</p>
                                <p>Because parking lots lack guideposts, it is difficult for drivers to find parking
                                    spaces and remember their cars’ locations in huge parking lots full of cars.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img src="../../assets/parkin/background.png">
                        </div>
                    </div>

                    <h2 id="i-ca"><span>COMPETITIVE ANALYSIS</span></h2>
                    <div class="competitive">
                        <p>During the market research, <strong>I found</strong> that most car navigation products share
                            the
                            same four functions: <span>search parking lot</span>, <span>real-time cost</span>,
                            <span>vacant space,</span> and <span>online payment</span>.</p>
                        <!--<p>In my design, I consider to keep them as they are very important.</p>-->

                        <div class="row">
                            <div class="col">
                                <img src="../../assets/parkin/competitive_analysis_a.png">
                            </div>
                            <div class="col">
                                <img src="../../assets/parkin/competitive_analysis_b.png">
                            </div>
                        </div>

                    </div>

                    <h2 id="i-ui"><span>USER INTERVIEWS</span></h2>
                    <div class="interview">
                        <p>I conducted 12 interviews and recorded them as videos.</p>
                        <p>This was one of the interviews with my friend “Mei Han”, who was a 50-year-old new driver.</p>
                        <p>I interviewed her when she was parking in the parking lot of a supermarket. I hoped to
                            discover her
                            essential requirements for parking.</p>

                        <img src="../../assets/parkin/user_interviews_a.png" style="margin-bottom:5px;">
                        <img src="../../assets/parkin/user_interviews_b.png">
                    </div>

                    <h2 id="i-p"><span>PERSONA</span></h2>
                    <div class="persona">
                        <img src="../../assets/parkin/persona.png">
                    </div>

                    <h2 id="i-i"><span>INSIGHT</span></h2>
                    <div class="insight">
                        <ol>
                            <li>Provide <span>navigation</span> from current location to the
                                <span>parking lot</span> and
                                <span>parking space</span>.
                            </li>
                            <li>Provide <span>information</span> about the parking lot.</li>
                            <li>Provide <strong>navigation</strong> to <span>find the car and elevators</span> quickly
                                in the
                                parking lot.
                            </li>
                            <li>Provide <span>online payment</span> to decrease the time of payment.</li>
                            <li>Provide <span>real-time reminder</span> about parking time and cost.</li>
                        </ol>
                    </div>
                </div>


                <hr>
                <h1 id="i-cd" class="text-center">02 / Conceptual Design</h1>
                <div>
                    <h2 id="i-us"><span>USER SCENARIO</span></h2>
                    <p>Using my user stories, I created a scenario for each to start ideating around I might solve
                        for each
                        of their needs. I then identified key paths of their user journey and mapped out the flow of
                        user
                        steps. Some of the flows I explored included: </p>
                    <ol>
                        <li>Search for an ideal parking lot and navigate to it.</li>
                        <li>Choose a parking space.</li>
                        <li>Record the parking space (If the parking space has been chosen, ignore this step).</li>
                        <li>Check parking time and cost.</li>
                        <li>Navigate to the car.</li>
                        <li>Pay the parking fee online.</li>
                    </ol>

                    <div class="row">
                        <div class="col">
                            <img src="../../assets/parkin/user_scenario.jpg">
                        </div>
                        <div class="col">
                            <img src="../../assets/parkin/user_scenario_detail.jpg">
                        </div>
                    </div>
                </div>

                <h2 id="i-jm"><span>JOURNEY MAP</span></h2>
                <div class="map">
                    <p>After the scenario, I “zoomed out” to observe the whole picture. The site map allowed me to
                        design a fluid and intuitive way of navigating the application's content.</p>
                    <img src="../../assets/parkin/journey_map.png">
                </div>


                <hr>
                <h1 id="i-id" class="text-center">03 / Interaction Design</h1>
                <h2 id="i-w"><span>WIREFRAMES</span></h2>
                <div class="row">
                    <div class="col-lg-8">
                        <div>
                            <p>For the design process I first started with paper sketching and then gradually moved up,
                                creating
                                lo-fi wireframes to hi-fi prototypes.</p>
                            <p>Initially, I didn't focus on creating pixel perfect designs as they would change after
                                getting
                                feedback.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="../../assets/parkin/paper_wireframe.png">
                    </div>
                    <img src="../../assets/parkin/wireframe.png" style="height: 100%;">
                </div>

                <h2 id="i-vd"><span>VISUAL DESIGN</span></h2>
                <div class="visual">
                    <p>I created visual pages and a logo that was inspired by colors of traffic signs and traffic lights.
                        The combination of yellow and black gives people a good reminder. </p>
                </div>

                <img src="../../assets/parkin/visual_design_a.png" style="margin-bottom:10px;">
                <img src="../../assets/parkin/visual_design_b.png">

                <hr>
                <h1 id="i-ut" class="text-center">04 / Usability Test</h1>

                <div class="test">
                    <p>I created a prototype that could communicate the service as it would be as if it was running like
                        a real application. I chose a potential user, the person who inspired me of this project, to walk through all the
                        steps.</p>
                    <p>By observing her complete these tasks I was able to uncover things that were confusing, unclear,
                        or needed to be changed.</p>
                </div>
                <img src="../../assets/parkin/usability_test.png">
                <p>During the test, I found the application could be improved in some ways:</p>
                <ol>
                    <li>Adjust the font size</li>
                    <li>Simplify the procedure</li>
                    <li>Ease navigation back to the main page</li>
                </ol>

                <h2 id="i-it"><span>ITERATION</span></h2>
                <p>As the tests validated or disproved many initial hypotheses, I continued to iterate on the designs.
                    Through each iteration I honed my visual design skills and learned a lot about information architecture,
                    hierarchy, and typography.</p>
                <p>This is the iteration page for the “search for a parking lot” page. I increased font size and the size of
                    pop-up page so the information was displayed clearly and the “Go” button can be clicked easily. Also,
                    I dimmed the background color to emphasize the main information.</p>
                <img src="../../assets/parkin/visual_revision.png">

                <hr />
                <h1 id="i-rt" class="text-center">05 / Reflection & Takeaways</h1>
                <h2 class="takeaways">Using lo-fi prototype instead of hi-fi prototype to do the usability test</h2>
                <p>After the first project, I realized that lo-fi prototypes (e.g. paper prototypes) are better for usability
                    testing. Hi-fi prototypes take a long time to build and change. Also, users could be influenced by
                    colors and fonts so sometimes we can not get the feedback on functions.</p>
                <h2 class="takeaways">You are not your users</h2>
                <p>Discovered and framed the problem myself, it was a tempting pitfall to design for myself.
                    Fortunately, conducting interviews with potential users expanded my understanding of the problem
                    and gave me many fresh ideas.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../util/Sidebar'

    export default {
        name: "Dvent",
        data() {
            return {
                "indexes": [
                    {
                        'id': 'i-r', 'content': '01 / Research', 'sub': [
                            {'id': 'i-b', 'content': 'BACKGROUND'},
                            {'id': 'i-ca', 'content': 'COMPETITIVE ANALYSIS'},
                            {'id': 'i-ui', 'content': 'USER INTERVIEWS'},
                            {'id': 'i-p', 'content': 'PERSONA'},
                            {'id': 'i-i', 'content': 'INSIGHT'},
                        ]
                    },
                    {
                        'id': 'i-cd', 'content': '02 / Conceptual Design', 'sub': [
                            {'id': 'i-us', 'content': 'USER SCENARIO'},
                            {'id': 'i-jm', 'content': 'JOURNEY MAP'},
                        ]
                    },
                    {
                        'id': 'i-id', 'content': '03 / Interaction Design', 'sub': [
                            {'id': 'i-w', 'content': 'WIREFRAMES'},
                            {'id': 'i-vd', 'content': 'VISUAL DESIGN'},
                        ]
                    },
                    {
                        'id': 'i-ut', 'content': '04 / Usability Test', 'sub': [
                            {'id': 'i-it', 'content': 'ITERATION'}
                        ]
                    },
                    {
                        'id': 'i-rt', 'content': '05 / Reflection & Takeaways\n', 'sub': []
                    },
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
        background-color: #FDDB4D;
    }

    h2 {
        margin-bottom: 30px;
        font-size: 1.5em;
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

    .takeaways {
        margin-bottom: 10px;
    }
</style>