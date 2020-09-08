<template>
  <div>
    <h1>Welcome!</h1>
    <article>
      <span>Hello everyone!</span> <br />
      Greetings from my portfolio website! My name is Milos Esan and I'm a web
      developer. I started coding and learning to code at 2017. Here you can
      find some informations about my professional activities and references to my
      works - chosen to represent my coding skills. Please, feel free to check
      everything and <a href="/contact">contact</a> me, if needed.
    </article>
    <p>
      Tools and technologies I've been using during this period of my web-dev
      activities are <b>highlighted in white color of text</b> and exposed along
      with (and within) <a href="/projects">descriptions</a> of my works.
      This portfolio site by using <b>Vue.js</b>, <b>Bootstrap</b>, <b>css</b>, and ofc. - <b>html</b>.
    </p>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
div {
  padding: 15px;
}
h1 {
  font-family: "Permanent Marker", cursive;
  margin-bottom: 40px;
}

article {
  transition: all 0.5s ease;

  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  max-width: 700px;
  
  span {
    color: yellow;
  }
}

p {
  padding: 10px;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  max-width: 900px;
  transition: all 0.7s ease;
  border-radius: 15px;
 
  color: wheat;
   padding: 10px;
background-color: rgba(175, 53, 53, 0.5);
}

b {
  color: white;
}

a {
  text-decoration: underline;
  color: rgb(248, 79, 79);
  &:hover {
    color: yellow;
  }
}
</style>
