<template>
  <section class="container">
    <h1>Contact Me</h1>
    <form>
      <section class="form-row">
        <div class="form-group col-md-6">
          <label>First Name:</label>
          <input
            ref="fName"
            type="text"
            class="form-control"
            v-model.trim="$v.firstname.$model"
            :class="{
              'is-invalid': $v.firstname.$error,
              'is-valid': !$v.firstname.$invalid,
            }"
          />

          <div class="valid-feedback">valid</div>
          <div class="invalid-feedback">
            <span v-if="!$v.firstname.required">*required</span>
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
            ref="lName"
            type="text"
            class="form-control"
            v-model.trim="$v.lastname.$model"
            :class="{
              'is-invalid': $v.lastname.$error,
              'is-valid': !$v.lastname.$invalid,
            }"
          />

          <div class="valid-feedback">valid</div>
          <div class="invalid-feedback">
            <span v-if="!$v.lastname.required">*required</span>
            <span v-if="!$v.lastname.minLength"
              >Last name must have at least
              {{ $v.lastname.$params.minLength.min }} letters.
            </span>
            <span v-if="!$v.lastname.maxLength"
              >Last name must have at most
              {{ $v.lastname.$params.maxLength.max }} letters.
            </span>
          </div>
        </div>
        <div class="form-group">
          <label>e-mail:</label>
          <input
            type="email"
            class="form-control"
            ref="email"
            v-model.trim="$v.email.$model"
            :class="{
              'is-invalid': $v.email.$error,
              'is-valid': !$v.email.$invalid,
            }"
          />
          <div class="valid-feedback">valid</div>
          <div class="invalid-feedback">
            <span v-if="!$v.email.required">Email required!</span>
            <span v-if="!$v.email.isUnique">Please, enter a valid e-mail!</span>
          </div>
        </div>

        <textarea
          v-model="msgTxt"
          ref="msg-field"
          class="form-control"
          id="textarea"
          rows="6"
        >
        </textarea>
        <p ref="msg">(Your message)</p>

        <button @click.prevent="submit()" class="btn" type="submit">
          submit
        </button>
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
  email,
} from "vuelidate/lib/validators";

export default {
  name: "contact",
  data() {
    return {
      msgTxt: "",
      submitted: false,
      firstname: "",
      lastname: "",
      email: "",
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
      minLength: minLength(7),
      required,
      email,
      isUnique(value) {
        if (value === "") return true;

        // eslint-disable-next-line
        var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email_regex.test(value));
          }, 350 + Math.random() * 300);
        });
      },
    },
    textarea: {
      required,
      minLength: minLength(20),
      maxLength: maxLength(200),
    },
  },

  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();

      if (
        this.$refs["fName"].value.length >=
          this.$v.firstname.$params.minLength.min &&
        this.$refs["lName"].value.length >=
          this.$v.lastname.$params.minLength.min &&
        this.$refs["msg-field"].value.length >=
          this.$v.textarea.$params.minLength.min &&
        this.$refs["msg-field"].value.length <=
          this.$v.textarea.$params.maxLength.max &&
        this.$refs["email"].value.length >=
          this.$v.email.$params.minLength.min &&
        !this.$v.email.$error
      ) {
        this.$refs["msg"].innerHTML =
          "<b style='color: yellow;'>YOUR MESSAGE HAS BEEN SENT!</b>";
        this.msgTxt = "";
      } else {
        this.$refs["msg"].innerHTML =
          "Your message must contain minimum 20 and maximum 200 characters!" +
          "<br>" +
          "<b style='color: red;'>Please, fill out all existing fields correctly!</b>";
      }
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
    margin-left: 15%;
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
  font-family: "Permanent Marker", cursive;
  margin-bottom: 20px;
}

.info {
  color: yellow;
  font-weight: bold;
}

@media (min-width: 350px) and (max-width: 700px) {
  button {
    margin-left: 15%;
  }
}
</style>
