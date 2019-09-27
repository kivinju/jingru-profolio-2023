<template>
    <div class="container-fluid" id="main" style="border: 0; padding-top: 40px">
        <div class="row">
            <Sidebar :indexes="indexes" class="col-md-3"></Sidebar>
            <div class="col-md-8">
                <img src="../../assets/builder/builder_intro.png">
                <div>
                    <h2><span>About This Project</span></h2>
                    <p><strong>Project type:</strong> Individual project</p>
                    <p><strong>My Role:</strong> User research, Interaction Design, Interface Design, and Usability Test</p>
                    <p><strong>Timeline:</strong> June 17th - July 3rd (Three weeks)</p>
                    <p><strong>Context:</strong> An internship Project at TuSimple, Inc.</p>
                    <p><strong>Problem:</strong> Users at TuSimple, Inc. encountered difficulties when interacting with the internal tool Builder.</p>
                    <p><strong>Solution:</strong> Redesign the tool to improve its usability and make it user-friendly.</p>

                </div>

                <hr />

                <h1 id="i-r" class="text-center">01 / RESEARCH</h1>
                    <div>
                    <h2 id="i-b"><span>Background</span></h2>
                        <h5 id="i-t">- Tool</h5>
                            <div>
                                <p>Builder is an internal web-based tool that integrates different modules to generate autonomous driving software.
                                The core features in this tool are to view, build, and compare docker images.
                                    Docker images are the modules which could generate autonomous driving software.</p>
                            </div>

                        <h5 id="i-users">- Users</h5>
                             <div>
                                 <p>Engineers & Test Operations at TuSimple, Inc.</p>
                             </div>

                        <h5 id="i-u">- Why Redesign?</h5>
                            <div>
                                 <p>Users encountered difficulties when interacting with this tool, which will be expanded on in the rest of the RESEARCH section.</p>
                            </div>


                    </div>


                <h2 id="i-he"><span>Heuristic Evaluation</span></h2>
                <div class="evaluation">
                    <p>In order to have a preliminary understanding of this tool, I did an heuristic evaluation before user interviews to identify some apparent usability problems.</p>

                    <div class="story">
                        <p>Part of findings are:</p>

                        <div class="feedback">
                            <ul>
                                <li>Labels looked like clickable buttons</li>
                                <li>Chosing colors without considering meanings and they do not represent the brand</li>
                                <li>"Search" button was not necessary</li>
                                <li>"Send to compare" button covered up the "latest" label</li>
                                <li>......</li>
                            </ul>
                        </div>

                        <!--<p>View more information on my <a href="https://m4gy33.axshare.com/#c=2" target="_blank"> Builder Iteration Report</a>.</p>-->

                    </div>

                </div>


                    <h2 id="i-ca"><span>User Interviews</span></h2>
                    <div class="competitive">
                        <p>After getting some basic knowledge of the Builder tool, I conducted <strong> four interviews</strong> in order to collect user demands and their difficulties when interacting with this tool.
                            Among my target users, one of them was <strong>an engineer</strong> based in the San Diego office and the rest of three were <strong>test operations</strong> based in the Tucson Office.</p>
                        <p>I conducted one <strong>30min face-to-face</strong> interview with the vehicle control algorithm engineer Chasen. And due to the location constraint, I conducted two <strong>30min remote</strong> interviews with test operations Nader, Aaron and Michael. </p>

                        <img src="../../assets/builder/interview_1.png" style="margin-bottom:5px;">

                        <img src="../../assets/builder/interview_2.png" style="margin-bottom:10px;">


                    </div>

                    <h2 id="i-st"><span>User Challenge</span></h2>
                    <div class="story">
                        <p>My user interviews elicited significant findings:</p>

                        <div class="feedback">
                            <ul>
                                <li>Interactions were not intuitive (e.g. "Compare" feature)</li>
                                <li>There were some important but hidden features (e.g. "copy docker image path")</li>
                                <li>Some wordings were confusing (e.g. "Name" "Owner" "Slect image" etc.)</li>
                                <li>Users were not able to create a builder based on a specific docker version</li>
                                <li>Users were not able to report bugs</li>
                                <li>The "Send to compare" button covered up the "latest" label</li>
                                <li>"Related bags" only represented autonomous bags, not all bags </li>
                                <li>......</li>
                            </ul>
                        </div>

                        <!--<p>View more information on my <a href="https://m4gy33.axshare.com/#c=2" target="_blank"> Builder Iteration Report</a>.</p>-->

                    </div>



                <hr>
                <h1 id="i-cd" class="text-center">02 / REDESIGN</h1>

                <p id="redesign">Following the idea of <a href="https://en.wikipedia.org/wiki/Agile_software_development" target="_blank"> agile development</a>
                    and based on my findings from user interviews and heuristic evaluation,
                    I started my redesign with the following ten features, <strong>important low-hanging fruits</strong>:</p>

                <div class="row">

                    <div class="col-lg-5">
                        <img src="../../assets/builder/4.png">
                    </div>

                    <div class="col-lg-7">
                        <div class="challenge">
                            <ol>
                                <li>Redesign the “Compare” feature</li>
                                <li>Resolve "hidden" features</li>
                                <li>Modify ambiguous expressions</li>
                                <li>Supplement missed status categories</li>
                                <li>Display users’ own builds</li>
                                <li>Feature Request & Bug report</li>
                                <li>Modify "Autonomous bags"</li>
                                <li>Display "golden" & "recent stable" builds clearly</li>
                                <li>Make it "TuSimple"</li>
                                <li>Standardize components</li>
                            </ol>
                        </div>
                    </div>

                </div>

                <p id="some">Here, I would like to share some of them with you.</p>


                <h2 id="i-us"><span>#1 Resolve "hidden" features</span></h2>
                <p>In the initial design, the ability to "get a docker path" was a HIDDEN FEATURE.
                    Test Operations would like to get the docker path when they used Builder. When I asked the developer if it was feasible,
                    he told me “It was already there. You can get the docker path by clicking the whole dark rectangle.”
                    I was shocked because no one knew about this feature except for the developer himself.</p>
                <p class="before"><span>Before</span></p>
                <img src="../../assets/builder/copy_docker_path_1.png">
                <p class="after"><span>After</span></p>
                <img src="../../assets/builder/copy_docker_path_2.png">
                <br /><br /><br />


                <h2 id="i-uw"><span>#2 Modify ambiguous expressions</span></h2>
                <p>In the initial design of Builder, there were some ambiguous expressions that caused misunderstandings among users.</p>
                <p class="before"><span>Before</span></p>
                <img src="../../assets/builder/modify_wording_1.png">
                <p class="after"><span>After</span></p>
                <img src="../../assets/builder/modify_wording_2.png">
                <br /><br /><br />


                <h2 id="i-dp"><span>#3 Redesign "Compare" feature</span></h2>
                <p>"Compare docker images" is one of the most important and common features in the Builder tool.
                    It helps to compare differences between two docker images.</p>
                <p class="before"><span>Before</span></p>
                <p>There are two ways to compare two dockers.</p>
                <p>First</p>
                <img src="../../assets/builder/send_to_compare_1.png">
                <!--<br /><br />
                <p align="center"><strong>OR</strong></p>
                <br /><br />-->
                <p>Second</p>
                <!--<p>Go to the compare page directly</p>-->
                <img src="../../assets/builder/send_to_compare_2.png">
                <p class="frustrations">Difficulties:</p>
                <ol>
                    <li>The prompt was "select base/head image". When users read "select", they expected to select an image from a drop-down list.
                        <strong>However</strong>, users could not "select" anything until they typed the keyword of the docker they wanted to compare.</li>
                    <li>After viewing the detail of a docker image that users wanted to compare, they must remember the docker name, go to the compare page, type the docker name, and select the docker they had viewed.
                    The process took too many steps.</li>
                    <li>The prompts "base image" and "head image" were ambiguous.</li>
                </ol>
                <p class="after"><span>After</span></p>
                <p>Highlight 1: Compare Bar</p>
                <img src="../../assets/builder/compare_bar.png">
                <br /><br />
                <p>Another ux designer at TuSimple considered using this “floating compare bar” in her project.
                    Maybe in the future, it will be used as a universal component in TuSimple’s other projects.</p>
                <br /><br />
                <p>Highlight 2: Add compare feature on the docker image detail page</p>
                <img src="../../assets/builder/compare_detail_page.png">
                <br /><br /><br />
                <p>Highlight 3: Rewrite prompt & modify the interaction on the compare page</p>
                <img src="../../assets/builder/compare_page.png">


                <hr>
                <h1 id="i-id" class="text-center">03 / USABILITY TEST</h1>
                <p id="redesign">For some features, I designed more than one version and asked users to test which one they prefer.
                For example: designed "build from this docker" and "send to compare" features on a docker image detail page.</p>
                <img src="../../assets/builder/two_versions.png">
                <h2 id="i-w"><span>Iteration</span></h2>
                <p>Based on users' feedback, I iterated my design more than three times before it was released. For example: compare feature</p>
                <img src="../../assets/builder/iteration_1.png">

                <hr>


                <h1 id="i-uf" class="text-center" style="margin-bottom:50px;">04 / USER FEEDBACK</h1>
                <!--<div class="row">
                    <div class="offset-lg-1 col-lg-6">
                        <div>

                            <p>The first day that my builder iteration was released, I got positive user feedback.
                                That was my best day at TuSimple. Even happier than the days I got paid.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <img src="../../assets/waterme/summary.png">
                    </div>
                </div>-->

                <!--<img src="../../assets/builder/1.png">-->
                <img src="../../assets/builder/7.png">

                <hr>
                <h1 id="i-rt" class="text-center" style="margin-bottom:50px;">05 / REFLECTION & TAKEAWAYS</h1>

                <h2 class="takeaways">"How did you do usability test without coding?"</h2>
                <p>This was a question which surprised me the most in the internship presentation. The answer is easy for a UX designer but the question reveals that a lot of people, even engineers,
                    don't know what UX designers do and they don't realize the importance of UX designers.
                    As a UX designer, I hope that through my efforts, more people can understand the importance of this position for a company.</p>
                <h2 class="takeaways">Your teacher is by your side</h2>
                <p>During my internship, I had weekly design synchronization meetings with two other UX designers.
                    We discussed our progresses and challenges, criticized everyone's design, and brainstormed. I really learned a lot from them.</p>
                <div class="row">
                    <div class="col">
                        <img src="../../assets/builder/Picture1.png">
                    </div>
                    <div class="col">
                        <img src="../../assets/builder/Picture2.png">
                    </div>
                </div>
                <!--<h2 id="ur" class="takeaways">User requests =/= Real User Needs</h2>
                <p>Besides Builder, another tool that I worked on was Vehicle Ticket System (VTS).
                    VTS has a feature where the truck user has to click Get Vehicle and Return vehicle when they start
                    and end their trips. But, they don't always do this accurately, so the usage data generated by VTS isn't reliable.
                    To solve this, users have asked for the ability to retroactively edit this information to reflect real start and end times,
                    but adding this feature creates more burden on the manager editing the ticket and doesn't solve the core issue.</p>-->
                <h2 id="ur" class="takeaways">Every solution needs a reason</h2>
                <p>An important lesson I learned during my internship was asking myself "Why do I design this?" "What problem does it solve?"
                We are here to solve problems that people have when interacting with tools, so it is reasonable that we cannot design without purpose and
                come up with solutions without solving any problems.</p>
                <!--<h2 class="takeaways">Do not use colors randomly in the design</h2>
                <p>Because.</p>-->
                <h2 class="takeaways">Building good relationships with developers and users will be beneficial</h2>
                <p>The good relationship that I built with developers and users made them more willing to help me. I am so lucky and happy that they supported me a lot during my internship.
                    Because of their help, my project went smoothly, the Builder tool was developed successfully and received favorable comments.
                <!--This relationship also help me to work with more people.--></p>

                <br /><br /><br />
                <img src="../../assets/builder/3.png">
                <br /><br /><br />

                <p>My internship presentation</p>
                <img src="../../assets/builder/intern_presentation.png">


                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


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
                        'id': 'i-r', 'content': '01 / RESEARCH', 'sub': [
                            {'id': 'i-b', 'content': 'Background'},
                            {'id': 'i-he', 'content': 'Heuristic Evaluation'},
                            {'id': 'i-ca', 'content': 'User Interviews'},
                            {'id': 'i-st', 'content': 'User Challenge'},
                            /*{'id': 'i-i', 'content': 'Insight'},*/
                        ]
                    },
                    {
                        'id': 'i-cd', 'content': '02 / REDESIGN', 'sub': [
                            {'id': 'i-us', 'content': '#1 Resolve "hidden" features'},
                            {'id': 'i-uw', 'content': '#2 Modify ambiguous expressions'},
                            {'id': 'i-dp', 'content': '#3 Redesign "Compare" feature\n'},
                        ]
                    },
                    {
                        'id': 'i-id', 'content': '03 / USABILITY TEST', 'sub': [
                            {'id': 'i-w', 'content': 'Iteration'},
                            /*{'id': 'i-vd', 'content': 'CIRCUIT DIAGRAM'},
                            {'id': 'i-pr', 'content': 'PRODUCTION PROGRESS'},
                            {'id': 'i-in', 'content': 'INTERACTION PROCESS'},
                            {'id': 'i-s', 'content': 'USER SCENARIO'},*/
                        ]
                    },
                    {
                        'id': 'i-uf', 'content': '04 / USER FEEDBACK', 'sub': []
                    },
                    {
                        'id': 'i-rt', 'content': '05 / REFLECTION & TAKEAWAYS\n', 'sub': []
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

    #insight{
        padding-top: 50px;
    }

    h2 span {
        /*background-color: #4fb233;*/
    }

    h2 {
        margin-bottom: 30px;
        font-size: 1.5em;
        color:#4fb233;
        /*color:#009d4e;*/
        /*color: white;*/
    }

    h5{
        color: dimgrey;
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
        margin-top: -30px;
        margin-bottom: 10px;
        color: #3c3c3c;
    }

    .before span {
        color: white;
        background-color: indianred;
    }

    .frustrations{
        color: red;
    }

    .after span{
        color:white;
        background-color: #009d4e;
    }

    #i-us {
        margin-bottom: 0px;
    }

    #i-dp {
        margin-top: -50px;
        margin-bottom: 0px;
    }

    #i-uw {
        margin-bottom: 0px;
        margin-top: -50px;
    }

    #redesign{
        margin-top: 50px;
    }

    #some{
        margin-bottom: -30px;
    }

    #ur {
        margin-top: 0px;
    }


</style>