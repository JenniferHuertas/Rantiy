<template>
  <main class="register">
    <h1>Registrate</h1>
    <input v-model="email" type="email" id="correo">
    <input v-model="password" type="password" id="contraseña">
    <button @click="registro">Crear Cuenta</button>
  </main>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';


export default {
  name: 'register',
  props: {
    msg: String,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    registro() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
