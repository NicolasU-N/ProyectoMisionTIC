<script setup>
import image from "../assets/logo2.png"
</script>

<template>
  <div class="register">
    <img :src="image" />
    <Navigation></Navigation>
    <h1 class="title">Sign Up</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#email">Email:</label>
      <input v-model="correo" class="form-input" type="email" id="email" required placeholder="Email" />
      <label class="form-label" for="#password">Contraseña:</label>
      <input v-model="password" class="form-input" type="password" id="password" placeholder="Password" />
      <label class="form-label" for="#password-repeat">Repite la contraseña:</label>
      <input v-model="passwordRepeat" class="form-input" type="password" id="password-repeat" placeholder="Password" />
      <input class="form-submit" type="submit" value="Sign Up" />
    </form>
    <p class="msg">
      ¿Ya tienes cuenta?
      <router-link to="/login">Ingresa</router-link>
    </p>
  </div>
</template>

<script>
import Navigation from "../components/SimpleNavigation.vue"; //Landingpage.vue
import AuthService from "../services/AuthService.js";

export default {
  data: () => ({
    correo: "",
    password: "",
    passwordRepeat: "",
  }),
  methods: {
    async register() {
      console.log(this.password);
      console.log(this.passwordRepeat);
      try {
        if (this.password == this.passwordRepeat) {
          await AuthService.register(this.correo, this.password);
          this.$swal("OK", "Registrado correctamente", "success");
          this.$router.push("/login");
        } else {
          this.$swal("ERROR", "Las contraseñas no coinciden", "error");
          // await AuthService.register(this.correo, this.password);
          // this.$router.push("/register");
        }
      } catch (error) {
        this.$swal("ERROR", "Falló la creación del usuario", "error");
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  padding: 2rem;
  text-align: center;
}

.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0rem;
  }
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;

  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0b9185;
  }
}

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>