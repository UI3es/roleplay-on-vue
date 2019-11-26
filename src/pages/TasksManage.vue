<template>
  <v-container fluid grid-list-lg>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="headline">{{ pageTitle }}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'TasksManage',
    data: () => ({
      pageTitle: 'Manage Tasks'
    })
  }
</script>
