<template>
  <div id="app">
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-md-5">
              <p>Hello 👋</p>
              <h2 class="my-3 lh-sm">My name is Jingru, a Product Designer skilled in problem-solving and creating
                delightful,
                user-centered solutions.</h2>
              <p class="lh-base mb-5">I'm a product/UX designer with 4+ years of experience assisting startups,
                corporations, and other
                industries in creating clean, user-friendly designs. I'm committed to delivering high-quality work that
                meets the unique needs of each client. Let's work together to bring your vision to life in no time.
              </p>
              <a href='#projects' type="button" class="btn btn-dark px-4 py-2">See Work
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="bi bi-arrow-right-short" viewBox="0 0.5 16 16">
                  <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </a>
            </div>
            <div class="col-md-4 d-flex align-items-center">
              <img class="mx-auto" src="../assets/portrait.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="section" id='om-section'>
        <div class="container-fluid">
          <div class="row" id="om-row">
            <div class="col-md-4 offset-md-2">
              <h1>Autonomous Driving Launch System</h1>
              <p class="mt-4 mb-5">An internal tool utilized by TuSimple Test Engineers to configure on-truck software and
                launch the
                autonomous driving system.</p>
              <RouterLink to="/om" type="button" class="btn btn-dark px-4 py-2">View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="bi bi-arrow-right-short" viewBox="0 0.5 16 16">
                  <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </RouterLink>
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <img class="mx-auto" src="../assets/om-cover.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="section" id='map-section'>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 offset-md-2">
              <h1>Map elements visualizer</h1>
              <p class="mt-4 mb-5">A platform for Engineers to import TuSimple maps, view elements (lane/road marker/traffic light, etc.), and compare variations across different maps.</p>
              <button type="button" class="btn btn-light px-4 py-2">View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="bi bi-arrow-right-short" viewBox="0 0.5 16 16">
                  <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <img class="mx-auto" src="../assets/map-mockup-cover.png" />
            </div>
          </div>
        </div>
      </div>
      <div class="section" id='midgar-section'>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4 offset-md-2">
              <h1>Information density platform</h1>
              <p class="mt-4 mb-5">A platform helps schedulers, engineers, PMs and stakeholders to monitor truck autonomous driving capability and display truck-related information.</p>
              <button type="button" class="btn btn-dark px-4 py-2">View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                  class="bi bi-arrow-right-short" viewBox="0 0.5 16 16">
                  <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
            </div>
            <div class="col-md-6 d-flex align-items-center">
              <img class="mx-auto" src="../assets/midgar-mockup.png" />
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        navigation: true,
        anchors: ['introduction', 'projects', 'map', 'midgar'],
        sectionsColor: ['#ffffff', '#fafafa', '#000000', '#F0F5FF']
      }
    }
  },
  methods: {

    afterLoad() {
      console.log('After load')
    },
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

h1,
h2 {
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1px;
  color: #111111;
}

h1 {
  font-size: 48px;
  /* line-height: 1.4em; */
}

h2 {
  font-size: 30px;
}

p {
  /* line-height: 1.9rem; */
  /* font-size: 1.5rem; */
  color: #434343;
}

#om-section {
  background-size: cover;
  background-image: url('../assets/om-background.png');
  background-position: left bottom;
  background-repeat: no-repeat;
}

#om-row {
  padding-bottom: 10rem;
}

#map-section {
  background-size: cover;
  background-image: url('../assets/map-background.png');
  background-position: right top;
  background-repeat: no-repeat;
}

#map-section p {
  color: #d9d9d9;
}

#map-section h1 {
  color: #f0f0f0;
}
</style>