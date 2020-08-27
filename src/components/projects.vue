<template>
<div class="container">
    <h1>My Works </h1>
     <hr>
    <ul v-for="(project, index) in projects" v-bind:key="index">
       <div class="project"> 
           <h3>{{project.name}}</h3>
   <p class="level" v-if="project.id < 2"><small>Difficulty Level:</small>
      conditionally NORMAL 
   </p>
   <p class="level" v-if="project.id == 2"><small>Difficulty Level:</small>
      considerably MUCH EASIER 
   </p>

   <ul class="check">
   <li v-if="project.live"> Check how this work looks like <a href="#">here</a>. </li>
   <li> Check more of description <a href="#">here</a>. </li>
   <li> Check the <a href="#">source code</a> on github.</li>
   </ul>
   
        <a><img :src="project.img"></a>
        <p class="desc">
            <span>SHORT DECRIPTION:</span>
            <br>
            {{project.describe}}
            </p>
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
                live: true,
                id: 1,
                describe: "Simple library with functionalities in line with book-renting concept."
                },
            {
                name: "freelance project - WORDPRESS WEBSITE",
                img: img2,
                live: true,
                id: 1,
                describe: "A custom website made for remodeling company. Everything is done by customer's requests. Wordpress technology is used."
                },
            {
                name: "to-do-app",
                img: img3,
                live: true,
                id: 1,
                describe: "Simple application with some of basic functionalities based on vue.js directives and methods. This app's purpose was to make it's maker familiar with vue.js. "
                },
            {
                name: "create-read service",
                img: img4,
                live: true,
                id: 2,
                describe: "This work contains some server-side code applied. Accent is placed on putting in use node.js and express.js coding."
                },
            {
                name: "some react pages",
                img: img5,
                live: false,
                id: 2,
                describe: "Some pages with custom design coded in react. Although this work is not really important nor it's finished - it's layout is something that I personally like to display."
                },
            {
                name: "concatScript",
                img: img6,
                live: false,
                id: 2,
                describe: "Python functionalities for simple work with *mp4 files. It utilizes linux commands of FFMPEG libary."
                },
        ]
    }
},

}
</script>

<style lang="scss" scoped>

hr {
    height: 1px;
    background-color: rgb(233, 131, 131) ;
}

h1 {
  font-family: 'Permanent Marker', cursive;
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
        color: yellow;
        font-weight: bold;
        small {
            color:  rgb(238, 90, 90) ;
            font-weight:100;
        }
    }
    .desc {

       min-width: 200px;
       max-width: 700px;
      margin-top: 35px;
       font-weight: bold;
       margin-left: 5px;
       margin-right: 10px;
       color: rgb(248, 79, 79) ;
       span {
            color: yellow;
            font-weight: bold;
        }
    }
}

h3 {
  text-decoration: underline;
  font-size: 20px;
  font-family: 'Permanent Marker', cursive;
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
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
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
    .project{
       height: 400px;
       min-width: 450px;
    }


.check {
    border: 1px solid wheat;
    border-radius: 4px ;
    color: wheat;
    font-size: 13px;
    margin-top: 50px;
    display: inline-block;
    width: 330px;
    a {
        text-decoration: underline;
        color:  rgb(248, 79, 79);
    }
}

img {
    float: left;
    width: 300px;
    height: 300px;

}
}
</style>
