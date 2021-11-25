<template>
  <!-- App.vue -->

  <div>
  <AppBar></AppBar>
  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</div>
</template>

<script>
import AppBar from '../src/components/AppBar.vue'
export default {

  components: {
    AppBar,
  },
  
  name: 'App',
  data: () => ({

  }),
};
</script>