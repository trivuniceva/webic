<template>

  <div class="user-search">
    <h2>User search</h2>

    <div class="search-options">
      <input v-model="searchName" placeholder="Name:" class="rounded-input" />
      <input v-model="searchLastName" placeholder="Lastname:" class="rounded-input" />

      <br><br>
      <label for="startDate">Date of birth from:</label>
      <input type="date" id="startDate" v-model="startDate" class="rounded-input" />

      <br><br>
      <label for="endDate">Date of birth to:</label>
      <input type="date" id="endDate" v-model="endDate" class="rounded-input" />

      <br><br>
      <button @click="searchUsers" class="rounded-button">Search</button>
    </div>

    <div class="search-results">
      <h3>Search results</h3>
      <select v-model="sortOption">
        <option value="name">Name</option>
        <option value="lastName">Lastname</option>
        <option value="birthdate">Date of Birth</option>
      </select>

      <ul>
        <li v-for="user in sortedUsers" :key="user.id">
          {{ user.name }} {{ user.lastName }} - {{ user.birthdate }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchUsersComponent"
}
</script>

<style scoped>
.user-search {
  text-align: center;
  padding: 20px;
}

.search-options {
  max-width: 400px;
  margin: 0 auto;
}

.rounded-input {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin: 6px;
}

.search-results {
  max-width: 600px;
  margin: 20px auto;
}

h3 {
  color: #2c3e50;
}

select {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
  background-color: #ecf0f1;
  padding: 10px;
  border-radius: 5px;
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
