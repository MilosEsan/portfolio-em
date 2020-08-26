<template>
  <section class="container">
    <h1>Contact Me</h1>
    <form>
      <section class="form-row">
        <div class="form-group col-md-6">
          <label>First Name:</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="$v.firstname.$model"
            :class="{
              'is-ivalid': $v.firstname.$error,
              'is-invalid': !$v.firstname.$invalid,
            }"
          />
          <div class="valid">Your First Name is valid!</div>
          <div class="invalid">
            <span v-if="!$v.firstname.required">First name is required.</span>
            <span v-if="!$v.firstname.minLength"
              >First name must have at least
              {{ $v.firstname.$params.minLength.min }} letters.
            </span>
            <span v-if="!$v.firstname.maxLength"
              >First name must have at most
              {{ $v.firstname.$params.maxLength.max }} letters.
            </span>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label>Last Name:</label>
          <input
            type="text"
            class="form-control"
            v-model.trim="$v.lastname.$model"
            :class="{
              'is-valid': $v.lastname.$error,
              'is-invalid': !$v.lastname.$invalid,
            }"
          />
          <div v-if="$v.firstname.minLength" class="valid">Your Last Name is valid!</div>
          <div v-if="!$v.firstname.minLength" class="invalid">*required</div>
          <div class="invalid">
            <span v-if="!$v.lastname.required">*required.</span>
            <span v-if="!$v.lastname.minLength"
              >Last name must have at least
              {{ $v.lastname.$params.minLength.min }} letters.
            </span>
            <span v-if="!$v.firstname.maxLength"
              >Last name must have at most
              {{ $v.lastname.$params.maxLength.max }} letters.
            </span>
          </div>
        </div>
        <div class="form-group">
          <label>e-mail:</label>
          <input type="email" class="form-control" />
        </div>

        <textarea class="form-control" id="textarea" rows="6"></textarea>
        <p>(Your message)</p>

        <button class="btn" type="submit">submit</button>
      </section>
    </form>
    <h3>Contact-Info :</h3>
    <p class="info">e-mail:</p>
    <p>esan.milos@gmail.com</p>
    <p class="info">phone:</p>
    <p>+387/66-965-386</p>
  </section>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: '',
      textArea: "",
    };
  },

  validations: {
    firstname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15),
    },

    lastname: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15),
    },

    email: {
      required,

    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Permanent Marker", cursive;
  margin-bottom: 50px;
}

form {
  background-color: rgba(117, 114, 114, 0.5);
  border: 1px solid rgb(143, 140, 140);
  border-radius: 1.5px;
  padding: 20px;

  button {
    margin-top: 50px;
    margin-left: 170px;
    border: 2px solid;
    background-color: white;
    &:hover {
      color: yellow;
      background-color: black;
    }
  }
}

h3 {
  margin-top: 60px;
  font-size: 20px;
  font-family: 'Permanent Marker', cursive;
  margin-bottom: 20px;
}

.info {
  color: yellow;
  font-weight: bold;
}
</style>
