<template>
<div>
    <h1>Welcome!</h1>
    <article>
      <span>Hello everyone!</span> <br>
Greetings from my portfolio website! My name is Milos Esan and I'm a web developer. I started coding and learning to code at 2017. Here you can find informations about my professional activities and references to my works - chosen to represent my coding skills. Please, feel free to check everything and contact me, if needed.
    </article>
    <p> Tools and technologies I've been using during this period of my web-dev activities are <b>highlighted in white color of text</b> and exposed along with (and within) <a href="/projects">descriptions</a> of my works.</p>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss" scoped>
h1 {
  font-family: 'Permanent Marker', cursive;
  margin-bottom: 40px;
}

article {
margin: 10px;
span {
  color: yellow;
}

}

p {
  margin: 10px;
  color: wheat;
}

b {
  color: white;
}

a {
        text-decoration: underline;
        color:  rgb(248, 79, 79);
        &:hover{
            color: yellow;
}
}
</style>