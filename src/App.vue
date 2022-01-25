<template>
  <div id="app">
    <CreateUser msg="Create new user form" />
  </div>
</template>

<script>
import CreateUser from "./components/CreateUser.vue";

export default {
  name: "App",
  components: {
    CreateUser,
  },
};
</script>

<style>
#app {
  margin: 50px auto;
  max-width: 500px;
  min-width: 300px;
}
</style>
