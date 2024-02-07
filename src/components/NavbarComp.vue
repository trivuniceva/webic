<template>
  <div>
    <nav v-if="!loggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/searchUsers">Search</router-link> |
    </nav>

    <nav v-else>
      <router-link to="/home">Home</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/messages">Messages</router-link> |
      <router-link to="/notifications">Notifications</router-link> |

      <select @change="handleDropdownChange">
        <option value="profile">Profile</option>
        <option value="editProfile">Edit Profile</option>
        <option value="changePassword">Change Password</option>
        <option value="logout">Logout</option>
      </select>
    </nav>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NavbarComp",

  computed: {
    ...mapState(['loggedIn']),
  },

  methods: {
    handleDropdownChange(event) {
      const selectedOption = event.target.value;
      switch (selectedOption) {
        case "profile":
          this.$router.push("/userProfileView");
          break;
        case "editProfile":
          this.$router.push("/editProfile");
          break;
        case "changePassword":
          this.$router.push("/changePassword");
          break;
        case "logout":
          this.$store.commit("setLoggedIn", false);
          this.$router.push("/");
          break;
        default:
          // Dodajte dodatnu logiku prema potrebi
          break;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  /* Stilizujte vašu navigacionu traku ovde */
  background-color: #333;
  color: white;
  padding: 1em;
}

select {
  border: 0px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin: 10px 0;
  width: 17%;
  box-sizing: border-box;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>