<template>
  <div class="container">
    <h1>My Works</h1>
    <hr class="hr" />
    <ul v-for="(project, index) in projects" v-bind:key="index">
      <div class="project">
        <router-link
          :to="{
            name: 'details',
            params: {
              id: project.id,
              img: project.img,
              name: project.name,
              description: project.description,
              features: project.features,
              live: project.live,
              git: project.git,
            },
          }"
        >
          <h3>{{ project.name }}</h3>

          <a><img :src="project.img"/></a>
        </router-link>

        <p class="level" v-if="project.id < 2">
          <small>Difficulty Level:</small>
          conditionally NORMAL
        </p>
        <p class="level" v-if="project.id > 2">
          <small>Difficulty Level:</small>
          considerably MUCH EASIER
        </p>
        <ul class="check">
          <li v-if="project.live != false">
            Check how this work looks like <a :href="project.live">here</a>.
          </li>
          <li>
            Check more of description
            <router-link
              :to="{
                name: 'details',
                params: {
                  id: project.id,
                  img: project.img,
                  name: project.name,
                  description: project.description,
                  features: project.features,
                  live: project.live,
                  git: project.git,
                },
              }"
            >
              <a>here</a> </router-link
            >.
          </li>
          <li v-if="project.git != false">
            Check the <a :href="project.git">source code</a> on github.
          </li>
        </ul>
        <p class="desc">
          <span>SHORT DECRIPTION:</span>
          <br />
          {{ project.describe }}
        </p>
      </div>
      <hr />
    </ul>
  </div>
</template>

<script>
import img1 from "../assets/library.png";
import img2 from "../assets/wordpress-site.png";
import img3 from "../assets/to-do.png";
import img4 from "../assets/create-read.png";
import img5 from "../assets/react-pages.png";
import img6 from "../assets/concat-script.png";
import img7 from "../assets/pp-pages.jpg";

export default {
  data() {
    return {
      projects: [
        {
          name: "library-app",
          img: img1,
          live: "https://library-app-em.herokuapp.com/#/",
          git: "https://github.com/MilosEsan/library.git",
          id: 1.1,
          describe:
            "Simple library with functionalities in line with book-renting concept.",
          description:
            "This is an app which represents a book renting service. It was another task from guys of front-end team, for me - personally. By doing it I tried a different approaches of data visualisation. In this code, it has several different ways of serving data - delivered in layout by 'get' request. In this purpose, I used two different methods, which  are distinguished as default vue.JS approaches. The layout is made by using Bootstrap and more advanced style properties. A main purpose of all those features in this work are in service of client-side displaying which book is rented and not available at the moment, which book is requested, and - the latest report-info about a user who rented particular-selected book.",
          features: [
            "different <b style='color: white;'>Vue.JS </b>directives",
            "computed properties and methods",
            "fetched Google Books API",
            "expandable sidebar",
            "different ways to use 'toggle functionalities'",
            "animation, transition and rotation using different <b style='color: white;'>css</b> (scss) rules and <b style='color: white;'>Bootstrap</b> classes",
          ],
        },
        {
          name: "freelance project - WORDPRESS WEBSITE",
          img: img2,
          live: "https://eurotouchconstructionllc.com/",
          git: false,
          id: 1.2,
          describe:
            "A custom website made for remodeling company. Everything is done by customer's requests. Wordpress technology is used.",
          description:
            "This was my first job with making a wordpress website. A customer (from Seattle, USA) was asking for a simple solution to promote his own business. I made this website using an 'elementor' plugin with custom html and css code included.",
          features: [
            "custom <b style='color: white;'>Wordpress</b> website - made and modified until customer was satisfied",
            "contact form implemented",
            "home section with video file playing in background",
            "contains various different slideshows",
          ],
        },
        {
          name: "to-do-app",
          img: img3,
          live: "https://to-do-12.herokuapp.com/",
          git: "https://github.com/MilosEsan/to-do-app.git",
          id: 1.3,
          describe:
            "Simple application with some of basic functionalities based on vue.js directives and methods. This app's purpose was to make it's maker familiar with vue.js. ",
          description:
            "At some point of my engagement in front-end team - they decided to give me task that needs to be made by using Vue.JS - javascript framework/libary. I was totally new with Vue.JS at that time, so the task was for me to make a simple to-do-list front-end app.  The goal was to make responsive, user-friendly and simple single-page web app.",
          features: [
            "Regulating events with <b style='color: white;'>Vue.JS</b> directives",
            "emitting events from one component to another",
            "Background plugins - <i style='color: white'>particles.js</i> and responsive mode, supported by <b style='color: white;'>Bootstrap</b> classes",
            "displaying reactive changes by different styled classes",
          ],
        },
        {
          name: "create-read service",
          img: img4,
          live: "https://create-read-app.herokuapp.com",
          git: "https://github.com/MilosEsan/create-read-app.git",
          id: 2.1,
          describe:
            "This work contains some server-side code applied. Accent is placed on putting in use node.js and express.js coding.",
          description:
            "As I was getting more understanding about full-stack javascript programming, I decided to make some more 'server-side oriented' code. Basic idea was to make a dictionary-like app with mechanism which takes an input value from user, saves it and makes it available later to the sam user. This availability is based on comparation with a word which is inserted in 'search-engine' input field. If a wanted search input value is the same as one of the random previousley saved values ('input word1' or 'input word2') - a result will be displayed. That concept works like classic 'foreign language dictionary', but this dictionary can be customized by the user (saving wanted words by himself). So, it has two simple web services - one 'to save' and another 'to search'. When I achieved that goal and made a 'mechanism' which implements all that is mentioned here, I dedided to stop a further development of this app.",
          features: [
            "<b style='color: white;'>node.js</b> with <b style='color: white;'>express.js</b> and some middleware tools",
            "body-parser module, which takes all values from client (html structure, input fields), and parses them to the server",
            "basic work with JSON file - a custom small-size API created",
            "asynchronous javascript programming (async-await and promises)",
            "higher order functions implemented (for exemple - <i style='color: white;'>find()</i> method)",
            "basic manipulation with 'on-click' events",
          ],
        },
        {
          name: "some React.js pages",
          img: img5,
          live: false,
          git: "https://github.com/MilosEsan/react-pages.git",
          id: 2.2,
          describe:
            "Some pages with custom design coded in react. Although this work is not really important nor it's finished - it's layout is something that I personally like to display.",
          description:
            "In the time when I was transfered from working with Python and Django - back to front-end coding, a significant amount of refreshing was needed to get me back on track for working with javascript and it's libaries. So, I got the task to code those pages - previousley designed in shape of 'figma' pictures. Not much functionalities and events based on virtual DOM were  required here ( there's just one 'on-click' event ), but - some possibly unique interfaces are coded and I want them to be displayed in this portfolio. Also, those 'unconventional' and messy settings of css selectors are good example of me moving back from back-end to front-end development and starting to refresh myself for css coding, which will be 100% better than these lines.",
          features: [
            "work with svg elements",
            "custom 'login-page' design",
            "setting a state of the component",
            "implementing <b style='color: white;'> Bootstrap</b>",
            "<b style='color: white'>React</b> router (to make 'a component into the page')",
            "messy and unconventional <b style='color: white;'>css</b> coding with its purpose"
          ],
        },
        {
          name: "concatScript",
          img: img6,
          live: false,
          git: "https://github.com/MilosEsan/concatScript.git",
          id: 2.3,
          describe:
            "Python functionalities for simple work with *mp4 files. It utilizes linux commands of FFMPEG libary.",
          description:
            "This is, really, nothing special as much as I wanted it to be displayed here. It is in line with my two month period working with python, where love for this language is born. So, here we have a simple script which concatenates video files by their length. From two or more short videos, it can make a one long video file. It is not user friendly app, so it is needed to be used manually. If interested, you can ask me questions about how it works. Again - it is far from representing advanced Python programming skills (as it is obvious), but it servs its purpose, when it coms in making one big video from a bunch of small ones.",
          features: [
            "a simple block of code, made in <b style='color: white'>Python</b>, to be used on linux os",
            "utilizes os module and method <i style='color: white'>system()</i>",
            "commands of <i style='color: white;'>FFMPEG </i> libary are used in this script to make it works",
            "text file as improvised data base",
          ],
        },
        {
          name: "PP-pages",
          img: img7,
          live: false,
          git: "https://github.com/MilosEsan/pp-pages.git",
          id: 2.4,
          describe:
            "More of custom designs. This work contains several different designs, which are turned to code blocks for different pages",
          description:
            "'PP' stands for pixel-perfect design. To make these pages, I used .PSD files to extract colors and font families from design pics. After that, I applied those 'extracts' to make identical design with web-dev tools. Coding part contains different approaches to styling backgrounds. Feel free to check the source code of this project, so you can get more familiar with my style of coding in plain html and css",
          features: [
            "Custom <b style='color: white;'>css</b> and <b style='color: white;'>HTML</b> code",
            "different ways of displaying backgrounds",
            "<b style='color: white;'>Bootstrap</b> classes utilized in making of responsive mode displaying (pg-3)",
            "Different color pickers and Photoshop-like tools are used as backup",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.b {
  color: white;
}

.hr {
  width: 300px;
  height: 1px;
  background-color: rgb(233, 131, 131);
}

hr {
  height: 1px;
  background-color: rgb(233, 131, 131);
}

h1 {
  font-family: "Permanent Marker", cursive;
  margin-bottom: 50px;
}

.check {
  display: none;
}

.container {
  padding-left: 0px;
  height: 100vh;
}

.project {
  .level {
    margin-top: 30px;
    color: yellow;
    font-weight: bold;
    small {
      color: rgb(238, 90, 90);
      font-weight: 100;
    }
  }
  .desc {
    min-width: 200px;
    max-width: 700px;
    margin-top: 20px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 10px;
    color: rgb(248, 79, 79);
    span {
      color: yellow;
      font-weight: bold;
    }
  }
}

h3 {
  text-decoration: underline;
  font-size: 20px;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 20px;
}
a {
  margin-left: 0px;
  color: yellow;
}

img {
  margin-left: 0px;
  backface-visibility: hidden;
  cursor: pointer;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  width: 200px;
  height: 200px;
  &:hover {
    opacity: 0.3;
  }
}

@media (min-width: 780px) and (max-width: 2500px) {
  .desc {
    margin-left: 10%;
    margin-top: 35px;
    float: right;
    width: 150px;
  }
  .project {
    height: 400px;
    min-width: 450px;
  }

  .check {
    border: 1px solid wheat;
    border-radius: 4px;
    color: wheat;
    font-size: 13px;
    margin-top: 50px;
    display: inline-block;
    width: 330px;
    a {
      font-family: "Permanent Marker", cursive;
      text-decoration: underline;
      color: rgb(248, 79, 79);
      &:hover {
        color: yellow;
      }
    }
  }

  img {
    float: left;
    width: 300px;
    height: 300px;
  }
}
</style>
