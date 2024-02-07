<template>
  <div class="edit-profile-container">

    <h1> Edit profile </h1>
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>

    <form class="edit-profile-form"  @submit.prevent="submitForm">
      <div>
        <h3>Username: {{ user.username}} </h3>
      </div>

      <br>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" />
        <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
      </div>

      <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="user.firstName" />
        <div v-if="errors.firstName" class="error-message">{{ errors.firstName }}</div>
      </div>

      <div>
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="user.lastName" />
        <div v-if="errors.lastName" class="error-message">{{ errors.lastName }}</div>
      </div>

      <div>
        <label for="dateOfBirth">Date of Birth:</label>
        <input type="date" id="dateOfBirth" v-model="user.dateOfBirth" />
        <div v-if="errors.dateOfBirth" class="error-message">{{ errors.dateOfBirth }}</div>
      </div>

      <br>

      <div class="form-row">
        <label for="privateProfile">Private Profile</label>
        <input type="checkbox" id="privateProfile" v-model="user.privateAccount" :checked="user.privateAccount" />
      </div>


      <div>
        <label for="gender">Gender: </label>
        <select id="gender" v-model="user.gender">
          <option :value="user.gender" selected>{{ user.gender }}</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </div>


      <div>
        <label for="profilePicture">Profile Picture: </label>
        <select id="profilePicture" v-model="user.profilePicture">
          <option v-for="image in userImages" :key="image" :value="image">{{ image }}</option>
        </select>
      </div>

      <br>

      <div v-if="changePassword">
        <label for="oldPassword">Old Password:</label>
        <input type="password" id="oldPassword" v-model="oldPassword" />
        <div v-if="errors.oldPassword" class="error-message">{{ errors.oldPassword }}</div>
      </div>

      <div v-if="changePassword">
        <label for="newPassword">New Password:</label>
        <input type="password" id="newPassword" v-model="newPassword" />
        <div v-if="errors.newPassword" class="error-message">{{ errors.newPassword }}</div>
      </div>

      <div v-if="changePassword">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" />
        <div v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</div>
      </div>

      <div>
        <input type="checkbox" id="changePassword" v-model="changePassword" />
        <label for="changePassword">Change Password</label>
      </div>

      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from "axios";

export default {
  name: "editProfileComp",

  computed: {
    ...mapState(['loggedIn', 'user']),
  },

  data() {
    return {
      successMessage: '',
      changePassword: false,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      errors: {
        email: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      userImages: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    };
  },

  methods: {
    async submitForm() {

      console.log("---->>>>>>>>>>")
      console.log(this.user.gender, this.user.role, this.user.password)
      console.log("---->>>>>>>>>>")

      try {
        this.errors = {}; // Resetujte poruke o greškama

        const formData = {
          username: this.user.username || '',
          password: this.user.password || '',
          email: this.user.email || '',
          firstName: this.user.firstName || '',
          lastName: this.user.lastName || '',
          dateOfBirth: this.user.dateOfBirth || '',
          gender: this.user.gender || '',
          role: this.user.role || '',
          profilePicture: this.user.profilePicture || '',
          posts: this.user.posts || '',
          pictures: this.user.pictures || '',
          friendRequests: this.user.friendRequests || '',
          friendList: this.user.friendList || '',
          privateAccount: this.user.privateAccount,
        };

        if (this.changePassword) {
          formData.oldPassword = this.oldPassword || '';
          formData.newPassword = this.newPassword || '';
          formData.confirmPassword = this.confirmPassword || '';
        }

        const response = await axios.post('http://localhost:9090/editProfile', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response && response.data && response.data.success) {
          this.successMessage = 'Profile successfully updated!';
        } else {
          console.error('Izmena profila nije uspela.');
        }

      } catch (error) {
        console.error('Došlo je do greške prilikom izmene profila:', error);

        // Postavljanje poruka o greškama ako postoje
        if (error.response.data.errors) {
          this.errors = error.response.data.errors;
        }
      }
    },

  },
};


</script>

<style scoped>
.edit-profile-container {
  text-align: center;
  padding: 20px;
}

.edit-profile-form {
  max-width: 300px;
  margin: 0 auto;
}

input {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
}

select{
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin: 10px 0;
  width: 40%;
  box-sizing: border-box;
}

button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  width: 60%;
  font-size: 16px;
  margin-top: 10px;
}

button:hover {
  background-color: #F8AFB4;
  color: #2c3e50;
}

.error-message {
  color: red;
  margin-top: 5px;
  font-size: 14px;
}

.success-message {
  color: green;
  margin-top: 10px;
  font-size: 16px;
}

.form-row {
  display: flex;
  align-items: center;
  margin: 10px 0 ;
}

.form-row input[type="checkbox"] {
  margin-right: 5px;
}

</style>



