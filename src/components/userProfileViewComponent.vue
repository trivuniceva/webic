<template>
  <div>
    <h1> Hello {{ user.username }} </h1>
    <br>

    <div>
      <p>First Name: {{ user.firstName }}</p>
      <p>Last Name: {{ user.lastName }}</p>
      <p>Date of Birth: {{ user.dateOfBirth }}</p>
<!--      <p>Profile Picture: <img :src="user.profilePicture" alt="Profile Picture" /></p>-->
    </div>

      <button @click="sendMessage" class="rounded-button">Send Message</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "userProfileViewComponent",
  computed: {
    ...mapState(['user']),
  },
  methods: {
    sendMessage() {
      // Implementirajte logiku slanja direktnih poruka
    },
  },
};
</script>

<style scoped>

.rounded-button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  width: 20%;
  font-size: 16px;
}

.rounded-button:hover {
  background-color: #F8AFB4;
  color: #2c3e50;
}

</style>