<template>
<div class="container">
    <h1>My Works </h1>
    <ul v-for="(project, index) in projects" v-bind:key="index">
       <div class="project"> 
           <h3>{{project.name}}</h3>
   <p class="level" v-if="project.id < 2"><small>Difficulty Level:</small>
      conditionally NORMAL 
   </p>
   <p class="level" v-if="project.id == 2"><small>Difficulty Level:</small>
      considerably MUCH EASIER 
   </p>
        <a><img :src="project.img"></a>
        <p class="desc">{{project.describe}}</p>
       </div>
        <hr>
    </ul>
</div>
</template>

<script>

import img1 from "../assets/library.png"
import img2 from "../assets/wordpress-site.png"
import img3 from "../assets/to-do.png"
import img4 from "../assets/create-read.png"
import img5 from "../assets/react-pages.png"
import img6 from "../assets/concat-script.png"

export default {
 data() {
    return {
        projects: [
            {
                name: "library-app",
                img: img1,
                id: 1,
                describe: "Simple library with functionalities in line with book-renting concept."
                },
            {
                name: "freelance project - WORDPRESS WEBSITE",
                img: img2,
                id: 1,
                describe: "A custom website made for remodeling company. Everything is done by customer's requests. Wordpress technology is used."
                },
            {
                name: "to-do-app",
                img: img3,
                id: 1,
                describe: "Simple application with some of basic functionalities vue.js functionalities. This app's purpose was to make it's maker familiar with vue.js. "
                },
            {
                name: "create-read service",
                img: img4,
                id: 2,
                describe: "This work contains some server-side code applied. Accent is placed on putting in use node.js and express.js coding."
                },
            {
                name: "some react pages",
                img: img5,
                id: 2,
                describe: "Some pages with custom design coded in react. Although this work is not really important nor it's finished, it's layout is something that I personally like to display."
                },
            {
                name: "concatScript",
                img: img6,
                id: 2,
                describe: "Python functionalities for simple work with *mp4 files. It utilizes linux commands of FFMPEG libary."
                },
        ]
    }
},

}
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Permanent Marker', cursive;
  margin-bottom: 50px;
}

.container {
    height: 100vh;
 
}

.project {
    .level {
        color: yellow;
        font-weight: bold;
        small {
            color:  rgb(238, 90, 90) ;
            font-weight:100;
        }
    }
    .desc {
       width: 150px;
       float: right;
       font-weight: bold;
       margin-top: -40px;
    }
}

h3 {
  text-decoration: underline;
  font-size: 20px;
  font-family: 'Permanent Marker', cursive;
  margin-bottom: 20px;
}

img {
    width: 200px;
    height: 200px;
}

@media (min-width: 300px) and (max-width: 500px) {
    .desc {
        float: inherit;
        margin-top: 0px;
    }
}

</style>