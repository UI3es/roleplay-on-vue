<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="headline">{{ pageTitle }}</h1>
      </v-flex>
      <v-flex pt-3 xs12>
        <content-loader
          :height="130"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          :speed="2"
          :width="700"
        >
          <rect x="50" y="8" rx="5" ry="5" width="120" height="10"/>
          <rect x="50" y="24" rx="4" ry="4" width="85" height="8"/>
          <rect x="0" y="60" rx="4" ry="4" width="680" height="8"/>
          <rect x="0" y="80" rx="4" ry="4" width="640" height="8"/>
          <rect x="0" y="100" rx="4" ry="4" width="240" height="8"/>
          <circle cx="20" cy="20" r="20"/>
        </content-loader>
      </v-flex>
      <v-flex xs12>
        <content-loader
          :height="130"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
          :speed="2"
          :width="700"
        >
          <rect x="50" y="8" rx="5" ry="5" width="120" height="10"/>
          <rect x="50" y="24" rx="4" ry="4" width="85" height="8"/>
          <rect x="0" y="60" rx="4" ry="4" width="680" height="8"/>
          <rect x="0" y="80" rx="4" ry="4" width="640" height="8"/>
          <rect x="0" y="100" rx="4" ry="4" width="240" height="8"/>
          <circle cx="20" cy="20" r="20"/>
        </content-loader>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { ContentLoader } from 'vue-content-loader'

  export default {
    name: 'Dashboard',

    components: {
      ContentLoader
    },

    data: () => ({
      pageTitle: 'Feed'
    })
  }
</script>
