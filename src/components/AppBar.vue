<template>

  <v-app-bar
      relative  
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>All Countries</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn
        depressed
        class="b1"
        @click='tourFunc()'
        >
        Tour
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items >
        <v-btn 
        class="b2"
        depressed
        @click="shop()"
        >
        Shop
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items >
        <v-btn depressed @click="co()">
        Contact
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items >
        <v-btn depressed @click="more()">
        Know More
        </v-btn>
      </v-toolbar-items>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style scoped>

</style>