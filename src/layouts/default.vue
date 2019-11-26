<template>
  <v-app id="default">
    <app-navigation/>
    <app-toolbar/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from '../components/app/layout/Navigation.vue'
import AppToolbar from '../components/app/layout/Toolbar.vue'

export default {
  name: 'AuthenticatedLayout',
  components: {
    AppNavigation,
    AppToolbar
  }
}
</script>
