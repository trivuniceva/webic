<template>
  <div class="login-container">
    <h2>Login Page</h2>
    <form @submit.prevent="login" class="login-form">
      <input type="text" id="username" v-model="username" placeholder="Username:" required class="rounded-input" />

      <input type="password" id="password" v-model="password" placeholder="Password:" required class="rounded-input" />

      <button type="submit" class="rounded-button">Login</button>
    </form>

    <p> Don’t have an account? <strong><router-link to="/signup" style="color: #F86B86;">Sign up</router-link></strong></p>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',

  data(){
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$http.post('http://localhost:9090/login', {
          username: this.username,
          password: this.password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.data.success) {
          this.$store.commit('setLoggedIn', true);
          this.$store.commit('setUser', {
            username: response.data.username,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            dateOfBirth: response.data.dateOfBirth,
            profilePicture: response.data.profilePicture,



            // Dodajte ostale podatke prema potrebi

          });

          this.$router.push('/userProfileView');
          console.log('Usepesno si ga ulogovala <3:', response.data.username);

        } else {
          console.error('Prijavljivanje nije uspelo.');
        }
      } catch (error) {
        console.error('Došlo je do greške prilikom prijavljivanja:', error);
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  text-align: center;
  padding: 20px;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.rounded-input {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin: 6px 0;
  width: 100%;
}

.rounded-button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  width: 40%;
  font-size: 16px;
}

.rounded-button:hover {
  background-color: #F8AFB4;
  color: #2c3e50;
}
</style>

