<template>
  <section id="details">
    <h1>
      {{ this.name }} <br />
      <small v-if="this.git != false">
        CHECK THE SOURCE CODE ON <a id="a" @click="git_open">GIT</a>.</small
      >
      <small v-if="this.live != false">
        CHECK DEPLOYED VERSION OF THIS
        <a id="a" @click="live_open">WORK</a>.</small
      >
    </h1>
    <a>
      <img v-bind:class="{'img': live}" @click="live_open" :src="this.img" />
    </a>
    <h4>Description :</h4>
    <article>{{ this.description }}</article>
    <div class="ul">
      <h4 class="ul-headding">Features of code :</h4>
      <ul v-for="(feature, index) in features" v-bind:key="index">
        <li v-html="feature">{{ feature }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
      id: this.$route.params.id,
      img: this.$route.params.img,
      description: this.$route.params.description,
      features: this.$route.params.features,
      live: this.$route.params.live,
      git: this.$route.params.git,
    };
  },

  methods: {
    live_open() {
      if (this.live != false) window.open(this.live);
    },
    git_open() {
      window.open(this.git);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Permanent Marker", cursive;
  margin-bottom: 20px;
  small {
    font-family: Roboto Condensed, sans-serif;
    color: wheat;
    margin-left: 10px;
    font-size: 10px;
    #a {
      font-family: "Permanent Marker", cursive;
      cursor: pointer;
      font-size: 15px;
      color: rgb(248, 79, 79);
      text-decoration: underline;
      &:hover {
        color: yellow;
      }
    }
  }
}

h4 {
  margin-top: 50px;
  margin-bottom: 20px;
  font-family: "Permanent Marker", cursive;
}
img {
  margin-left: 0px;
  backface-visibility: hidden;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  width: 400px;
  height: 400px;
}

.img {
  margin-left: 0px;
  backface-visibility: hidden;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  width: 400px;
  height: 400px;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
}

.ul {
  border: 2px solid;
  padding: 3px;
  margin: 20px;
  margin-left: 200px;
  margin-right: 200px;
  width: 400px;
  background-image: linear-gradient(132deg, #1f1a15 0%, #a5ecdc 100%);
}

.ul-headding {
  margin-top: 20px;
  text-align: center;
}

ul {
  font-family: Roboto Condensed, sans-serif;
  color: wheat;
  text-align: center;
}

article {
  font-family: Roboto Condensed, sans-serif;
  color: yellow;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
}

@media (min-width: 350px) and (max-width: 700px) {
  h1 {
    small {
      margin-left: 8px;
      font-size: 9px;
      #a {
        font-size: 13px;
      }
    }
  }
  article {
    min-width: 250px;
    max-width: 550px;
    margin: 20px;
    text-align: left;
  }

  .ul {
    width: 300px;
    margin: 20px;
    text-align: center;
  }

  img {
    width: 250px;
    height: 250px;
  }

  .img {
    width: 250px;
    height: 250px;
  }

  ul {
    margin: 20px;
    text-align: left;
  }
}
</style>
