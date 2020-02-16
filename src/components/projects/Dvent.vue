<template>
    <div class="container-fluid" id="main" style="border: 0; padding-top: 40px; padding-bottom: 170px">
        <div class="row">
            <Sidebar :indexes="indexes" class="col-md-3"></Sidebar>

            <div class="col-md-8">
                <img src="../../assets/dvent/firstpage.png">
                <div>
                    <h2><span>About This Project</span></h2>
                    <p><strong>Project type:</strong> Coursework Team Project</p>
                    <p><strong>My Role:</strong> User research, Persona, Wireframes, and Usability Test</p>
                    <p><strong>Context:</strong> This was a coursework project for course <i>Intro to User-Centered Design</i>.
                        I have three team members: Harry, Scott and Yuchen.</p>
                    <p><strong>Problem:</strong> The College of Computing and Digital Media in DePaul University consists of
                        three schools: Cinematic Arts, Computing, and Design. CDM graduate students have a difficult time
                        getting information about their interested activities and staying connected with their fellow classmates.</p>
                    <p><strong>Solution:</strong> An activities information collection platform for CDM graduate students.</p>
                </div>


                <div class="row jingru-box">
                    <div class="col-md">
                        <img src="../../assets/dvent/p_a.png">
                    </div>
                    <div class="col-md">
                        <img src="../../assets/dvent/p_b.png"/>
                    </div>
                    <div class="col-md">
                        <img src="../../assets/dvent/p_c.png"/>
                    </div>
                </div>

                <!--<div class="row jingru-box">-->
                    <!--<div class="col-md">-->
                        <!--<img src="../../assets/parkin/p1.png">-->
                    <!--</div>-->
                    <!--<div class="col-md">-->
                        <!--<img src="../../assets/parkin/p2.png"/>-->
                    <!--</div>-->
                    <!--<div class="col-md">-->
                        <!--<img src="../../assets/parkin/p3.png"/>-->
                    <!--</div>-->
                    <!--<div class="col-md">-->
                        <!--<img src="../../assets/parkin/p4.png"/>-->
                    <!--</div>-->
                    <!--<div class="col-md">-->
                        <!--<img src="../../assets/parkin/p5.png"/>-->
                    <!--</div>-->
                <!--</div>-->
                <hr />

                <h1 id="i-r" class="text-center">01 / RESEARCH</h1>
                <div>
                    <h2 id="i-b"><span>Background</span></h2>
                    <!--<div class="row">-->
                        <!--<div class="col-lg-8">-->
                            <div>
                                <p>The College of Computing and Digital Media in DePaul University consists of
                                    three schools: Cinematic Arts, Computing, and Design. All three schools are relatively
                                    independent but also highly interactive, sometimes the student of one school may be
                                    asked to connect with students from other schools.</p>
                                <p>All the students are in different courses, and have classes only two or three days a week.
                                    Both locals and international students are desired to integrate into this new environment as soon as possible.
                                   Also, We need to know the latest information about our fields, such as the new technologies, potential positions, salaries, trend, etc.</p>
                            </div>
                        <!--</div>-->
                        <!--<div class="col-lg-4">-->
                            <!--<img src="../../assets/parkin/background.png">-->
                        <!--</div>-->
                    <!--</div>-->

                    <h2 id="i-in"><span>Interview</span></h2>
                    <p>Before the interview, our team met to define potential users, discuss what questions needed to be
                        asked, and what information we required. The questions primarily involved asking the potential users
                        about current methods of communication and finding CDM graduate social events. After meeting, each
                        team member found at least two interviewees in shared classes, on the first floor CDM computer lab, and
                        individuals met through the Depaul Graduate network, then conducted interviews once information consent
                        was obtained. The interview consists of asking questions, observing the users’ behavior while walking
                        through the processes of finding activities, and recording the results. </p>


                    <h2 id="i-ui"><span>User Challenge</span></h2>
                    <p>Interviews were conducted in person or remotely with CDM Graduate students in order to understand
                        how they are finding activities and interacting with students. We prepared ten questions, observed
                        their behaviors and took notes. Through the interviews, some major findings were:</p>
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="challenge">
                                <ul>
                                    <li>All the interviewees want to communicate with other CDM students but they have some
                                        difficulties in getting information about activities.</li>
                                    <li>Flyers sometimes are outdated and unclear.</li>
                                    <li>It is hard to categorize emails and social media efficiently.
                                        Sometimes users miss important information.</li>
                                    <li>Social media like OrgSync cannot search events by subject and interest.</li>
                                    <li>Full-time students with jobs do not have enough time to search for events.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <img src="../../assets/dvent/user_challenge.jpg">
                        </div>

                    </div>



                    <h2 id="i-p"><span>Persona</span></h2>
                    <div class="persona">
                        <img src="../../assets/dvent/persona.png">
                        <p style="margin-top:30px;">Our team met and compiled the findings using a whiteboard to write out commonalities.</p>
                        <img src="../../assets/dvent/persona_process_a.png">
                    </div>

                    <h2 id="i-i"><span>Insight</span></h2>
                    <p>Based on our previous findings, all potential users faced the same major issue: Access to information
                        is cumbersome and inconvenient. We found the resolution to be more easily broken down into four major requirements:</p>
                    <p>For the user</p>
                    <div class="insight_user">
                        <ul>
                            <li>User requires the ability to search for events via subjects or interests.</li>
                            <li>User wants to get the concise date and location of events.</li>
                            <li>User needs to schedule events in advance.</li>
                            <li>User wants to be informed passively on pre-existing plans.</li>
                        </ul>
                    </div>

                    <p>For the system</p>
                    <div class="insight_system">
                        <ul>
                            <li><strong>Filter:</strong> Customize event preferences based on user needs.</li>
                            <li><strong>Event listed:</strong> Display events related to filtered search and brief event information.</li>
                            <li><strong>Calendar:</strong> Update pre-existing calendar and helps with scheduling.</li>
                            <li><strong>Notification:</strong> Reminder system for users to avoid missing previously scheduled events.</li>
                        </ul>
                    </div>
                </div>


                <hr>
                <h1 id="i-cd" class="text-center">02 / CONCEPTUAL DESIGN</h1>
                <div>

                    <p style="margin-top:50px;">We created some conceptual designs and two of them were listed here. </p>
                    <p>Version one:</p>
                    <img src="../../assets/dvent/Jingru.png">
                    <P>Version two:</P>
                    <img src="../../assets/dvent/Yuchen.jpg">



                </div>


                <hr>
                <h1 id="i-id" class="text-center">03 / INTERACTION DESIGN</h1>
                <h2 id="i-s"><span>Scenario</span></h2>
                <p>Davis is a CDM graduate student seeking a degree in HCI and wants to find an event that relates to his
                    degree. He opens “Dvent” application and logs in by using his Campus Connect login information.
                    The application automatically displays shortcuts which relate to his degree. He presses the “UX”
                    shortcut first, and all the activities that relate to UX are shown below. He is free this weekend,
                    so he clicks the calendar and chooses the date. He scrolls through the events feed, and finds an event
                    on UX portfolios that interests him. He clicks the event in order to get more details.
                    He’d like to attend the event and clicks the “Add to calendar” button. Then a box pops up over the
                    screen and asks if he wants to receive a notification. He clicks “Yes” button and a reminder will be
                    sent to him for the upcoming event. Once the dialog box disappears, he notices another event that interests him.
                    He adds the event to his “watchlist” by clicking the star in the corner of the event page. He can access the
                    list from the menu later.</p>

                <h2 id="i-w"><span>Wireframes</span></h2>
                <p>Using the conceptual designs and requirements from the previous project, our team individually created
                    wireframes and layouts of how we anticipated the application to look. We met to share our work and
                    discuss advantages and disadvantages of each design. Once we agreed upon which design features we felt
                    necessary, we compiled our wireframes using Axure.</p>
                <img src="../../assets/dvent/wireframe_process.png">
                <!--<img src="../../assets/dvent/wireframe.png">-->
                <img src="../../assets/dvent/wireframe_origin.png">
                <p><strong>Prototype link:</strong> <a href="https://da3zwk.axshare.com/" target="_blank"> https://da3zwk.axshare.com/</a> (STU ID: student PASSWORD: 123)</p>




                <hr>
                <h1 id="i-ut" class="text-center">04 / USABILITY TEST</h1>

                <div class="test">
                    <p>Usability testing was conducted individually after a test plan was created. A scenario and list of
                        questions and tasks were created to use as a guide for proctoring the test. Participants walked through
                        the steps to find a specific designated activity in the application.  Once the usability testing was completed,
                        the team gathered to discuss suggestions, problems, and solutions to difficulties they encountered.</p>
                    <p>Participants generally did not have any issues with the tasks given. All tests experiences were
                        described as “easy”, and “good”. Many of the issues were associated with aesthetics over usability.
                        However, some problems found were:</p>
                    <ul>
                        <li>Two out of four participants did not like the automatic jump when a search began.</li>
                        <li>Three participants ignored or did not notice the shortcut search buttons.</li>
                    </ul>
                </div>

                <h2 id="i-it"><span>Iteration</span></h2>
                <p>Our team redesigned the main page to better address the previous two issues.</p>
                <p><strong>The category searches were not as intuitive as anticipated</strong>, therefore <span>the word “Category” was
                    added</span> under the keyword search and above the buttons to help guide the user to clicking the categories.
                    We also figured that <span>making them larger</span> would draw the user to these and make them more defined,
                    as well as <span>add theme color</span> to the controls area of the main page.</p>
                <p>Participants mentioned that the <strong>automatic search was annoying</strong>. We <span>removed the automatic search</span> and
                    <span>allowed user to press ‘enter’</span> on their mobile keyboard in order to initiate the search. Finally,
                    many discussed the option of having multiple subjects searched simultaneously. We allowed for <span>multiple
                        shortcuts to be toggled and searched at the same time</span>.</p>
                <img src="../../assets/dvent/iteration_category.png">

                <hr />
                <h1 id="i-vd" class="text-center">05 / VISUAL DESIGN</h1>
                <p style="margin-top:50px;">I worked on my own for the visual design part after finishing this project.
                    The colors of the visual pages were inspired by the logo of DePaul University.</p>

                <div class="row jingru-box">
                <div class="col-md">
                <img src="../../assets/dvent/p_a.png">
                </div>
                <div class="col-md">
                <img src="../../assets/dvent/p_b.png"/>
                </div>
                <div class="col-md">
                <img src="../../assets/dvent/p_c.png"/>
                </div>
                </div>

                <hr>

                <h1 id="i-rt" class="text-center">06 / REFLECTION & TAKEAWAYS</h1>
                <p style="margin-top:50px;">This was my first team project and I was really excited working with three fellow classmates with different backgrounds.
                    It is a valuable opportunity for me to consider what position is suitable for me in an UX project.
                    Even though we hold some different opinions sometimes, we figured them out very well after each discussion and I learned a lot from them.</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                        'id': 'i-r', 'content': '01 / RESEARCH', 'sub': [
                            {'id': 'i-b', 'content': 'Background'},
                            {'id': 'i-in', 'content': 'Interview'},
                            {'id': 'i-ui', 'content': 'User Challenge'},
                            {'id': 'i-p', 'content': 'Persona'},
                            {'id': 'i-i', 'content': 'Insight'},
                        ]
                    },
                    {
                        'id': 'i-cd', 'content': '02 / CONCEPTUAL DESIGN', 'sub': [

                        ]
                    },
                    {
                        'id': 'i-id', 'content': '03 / INTERACTION DESIGN', 'sub': [
                            {'id': 'i-s', 'content': 'Scenario'},
                            {'id': 'i-w', 'content': 'Wireframes'},
                        ]
                    },
                    {
                        'id': 'i-ut', 'content': '04 / USABILITY TEST', 'sub': [
                            {'id': 'i-it', 'content': 'Iteration'}
                        ]
                    },
                    {
                        'id': 'i-vd', 'content': '05 / VISUAL DESIGN', 'sub': []
                    },
                    {
                        'id': 'i-rt', 'content': '06 / REFLECTION & TAKEAWAYS\n', 'sub': []
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
        /*background-color: #eb4969;*/
        color:#eb4969;
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

    p span {
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