<template>
  <!-- App.vue -->
  <div >
  <v-app>
  <AppBar app></AppBar>
  <div style="display: flex">
  <Navbar app></Navbar>
  <!-- Sizes your content based upon application components -->
  <!-- <v-main> -->
    <!-- Provides the application the proper gutter -->
    <v-container>

      <!-- If using vue-router -->
      <router-view ></router-view>
    </v-container>
  <!-- </v-main> -->

  <v-footer app>
    <!-- -->
  </v-footer>
  </div>
</v-app>
</div>
</template>

<script>
import AppBar from '../src/components/AppBar.vue'
import Navbar from './components/Navbar.vue';
export default {

  components: {
    AppBar,
    Navbar,
  },
  
  name: 'App',
  data: () => ({

  }),
};
</script>