<template>
  <v-app id="public">
    <v-content>
      <v-container fluid>
        <v-layout justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'PublicLayout'
  }
</script>
