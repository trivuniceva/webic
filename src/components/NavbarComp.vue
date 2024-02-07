<template>
  <div>
    <nav v-if="!loggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/searchUsers">Search</router-link> |
    </nav>

    <nav v-else>
      <!-- Dodajte linkove za ulogovanog korisnika -->
      <router-link to="/homeLogged">Home</router-link> |
      <router-link to="/searchLogged">Search</router-link> |
      <router-link to="/messagesLogged">Messages</router-link> |
      <router-link to="/notificationsLogged">Notifications</router-link> |

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

  handleDropdownChange(event) {
    const selectedOption = event.target.value;
    // Implementirajte logiku za obradu izabrane opcije
    // Na primer, možete koristiti Vue Router za redirekciju
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
};
</script>

<style scoped>
.navbar {
  /* Stilizujte vašu navigacionu traku ovde */
  background-color: #333;
  color: white;
  padding: 1em;
}

</style>