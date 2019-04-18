<template>
    <div class="container-fluid" id="main" style="border: 0; padding-top: 40px; padding-bottom: 170px">
        <div class="row">
            <Sidebar :indexes="indexes" class="col-md-3"></Sidebar>
            <div class="col-md-8">
                <h1>Office Hour Scheduler</h1>
                <img src="../../assets/scheduler/first.png">
                <div>
                    <h2><span>About This Project</span></h2>
                    <p><strong>Project type:</strong> Coursework individual project</p>
                    <p><strong>Timeline:</strong> One week</p>
                    <p><strong>My Role:</strong> Flowcharts, Mockup, and Prototype Design</p>
                    <p><strong>Context:</strong> For this project, I will design an interface that
                        allows DePaul University instructors to enter their office hours for a specific quarter.</p>
                    <!--<p><strong>Problem:</strong> It is difficult for drivers to find suitable parking spaces and
                        remember their
                        cars’ locations in a huge parking lot full of cars.</p>
                    <p><strong>Solution:</strong> A mobile application, by presenting the available parking spots and
                        parking information, helps drivers find suitable spots before they even show up in the
                        parking
                        lot.
                        It also helps drivers to locate their cars quickly.</p>-->
                </div>

                <hr />

                <h1 id="i-r" class="text-center">01 / Conceptual Design</h1>
                <div>
                    <h2 id="i-b"><span>REQUIREMENTS</span></h2>
                    <div class="requirement">
                        <p>The teacher needs to specify the following:</p>
                        <ul>
                            <li>The quarter (e.g. Summer/Winter/Fall 2018)</li>
                            <li>A series of date/time blocks, each with the following:</li>
                            <ul>
                                <li>Day of the week</li>
                                <li>Start time</li>
                                <li>Stop time</li>
                                <li>Location; common options include classroom and office</li>
                            </ul>
                            <li>The teacher should be able to review, edit and delete any of the time blocks.</li>
                        </ul>
                    </div>

                    <h2 id="i-ca"><span>USER SCENARIO</span></h2>
                    <div class="competitive">
                        <ul>
                            <li>Mary has been a full-time instructor at DePaul for three years.
                                She will be teaching two courses this quarter. She considers when the courses are offered
                                and thinks of office hour times that would be convenient to the students.
                                She decides that Mondays 4 to 5:30 and Wednesdays noon to 1:30 would work well.
                                She enters those time blocks and then reviews them to see that she has a total of 3 advising hours per week.</li>
                            <li>Sam is just starting as a part-time instructor at DePaul.
                                He is teaching his first course Tuesday evenings from 5:45 to 9:00. He decides to hold
                                his office hours right before and right after class in the classroom. Before class
                                he can arrive 45 minutes early and after class he can stay 45 minutes for a total of 1.5 hours.
                                He enters and then checks the time blocks.</li>
                            <li>Both Mary and Sam have experience using web browsers on a daily basis.
                                They can easily complete tasks found in common web apps (e.g. online banking, travel tickets).</li>
                        </ul>


                    </div>


                </div>


                <hr>
                <h1 id="i-cd" class="text-center">02 / Interaction Design</h1>
                <div>

                    <h2 id="i-ba"><span>FLOWCHART</span></h2>
                    <div class="analysis">
                        <p>After fully understanding the requirements and the scenarios, I created a flowchart
                            for the whole process of my future design by using Axure.</p>

                        <img src="../../assets/scheduler/scheduler_flowchart.png">
                    </div>

                    <h2 id="i-us"><span>WIREFRAMES</span></h2>
                    <p>Based on the flowchart, I created wireframes for both full-time and part-time instructors by using Adobe XD.</p>
                            <img src="../../assets/scheduler/screenshot.png">
                    <br /><br /><br />

                    <p>For the <strong>full_time</strong> instructor:</p>
                        <img src="../../assets/scheduler/full_time.png">
                    <br /><br />
                    <p>Wireframes link: <a href="https://m4gy33.axshare.com/#c=2" target="_blank"> https://m4gy33.axshare.com/#c=2</a></p>

                    <br /><br />

                    <p>For the <strong>part_time</strong> instructor:</p>
                    <img src="../../assets/scheduler/part_time.png">
                    <br /><br />
                    <p>Wireframes link: <a href="https://tzdm22.axshare.com/#c=2" target="_blank"> https://tzdm22.axshare.com/#c=2</a></p>




                </div>

                <h2 id="i-jm"><span>VISUAL DESIGN</span></h2>
                <div class="map">
                    <p>The main colour I used for my visual design is the DePaul representative blue color. I created this design by using Adobe XD.</p>
                    <img src="../../assets/scheduler/visual.png">

                </div>

                <h2 id="i-pr"><span>PROTOTYPE</span></h2>
                <p>I created this prototype by using Adobe XD.</p>
                <p>(add video)</p>


                <hr />
                <h1 id="i-rt" class="text-center">03 / Reflection & Takeaways</h1>

                <h2 class="takeaways">Drawing a flowchart is an important step</h2>
                <p>While designing Office Hours Scheduler, I needed to understand the whole process of using my future
                    product before beginning the design process. In order to design wireframes and interfaces for the product,
                    I created a flowchart, which helped me to understand how users will interact with the system;
                    I needed to know the steps of their usage. By gaining this understanding, I was able to fulfill the
                    demands of the scenarios and requirements.</p>

                <h2 class="takeaways">Adobe XD is a very useful tool for wireframes and prototypes</h2>
                <p>In order to design Office Hours Scheduler, I had the opportunity to learn how to use Adobe XD for the
                    first time. After fully gaining competence in the software, I was able to use it for the design of
                    my wireframes and prototypes of the project. Not only was it easy to learn, but it was also a
                    user-friendly tool which I highly recommend to UX designers.</p>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../util/Sidebar'

    export default {
        name: "Scheduler",
        data: function () {
            return {
                "indexes": [
                    {
                        'id': 'i-r', 'content': '01 / Conceptual Design', 'sub': [
                            {'id': 'i-b', 'content': 'REQUIREMENTS'},
                            {'id': 'i-ca', 'content': 'USER SCENARIO'},
                            /*{'id': 'i-ui', 'content': 'INITIAL DESIGN'},
                            {'id': 'i-p', 'content': 'ITERATION'},*/
                        ]
                    },
                    {
                        'id': 'i-cd', 'content': '02 / Interaction Design', 'sub': [
                            {'id': 'i-ba', 'content': 'FLOWCHART'},
                            {'id': 'i-us', 'content': 'WIREFRAMES'},
                            {'id': 'i-jm', 'content': 'VISUAL DESIGN'},
                            {'id': 'i-pr', 'content': 'PROTOTYPE'},
                        ]
                    },

                    {
                        'id': 'i-rt', 'content': '03 / Reflection & Takeaways\n', 'sub': []
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
        background-color: #eb9058;
    }

    h2 {
        margin-bottom: 30px;
        font-size: 1.5em;
        color:white;
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
        color: #3c3c3c;
    }
</style>