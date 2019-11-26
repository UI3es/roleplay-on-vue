<template>
  <v-flex xs12 sm8 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-select
            box
            id="username"
            item-text="fullName"
            item-value="id"
            :items="users"
            label="Username"
            v-model="fakeUsername"
          >
            <template #prepend-item>
              <v-subheader>Select a user below...</v-subheader>
              <v-divider class="mt-1"></v-divider>
            </template>
            <template #item="data">
              <v-list-tile-content>
                <v-list-tile-title>
                  <v-layout align-center justify-space-between>
                    <div>{{ data.item.fullName }}</div>
                    <div>
                      <v-chip
                        v-for="(item, index) in data.item.permissions"
                        :key="`user-permission-${index}`"
                        class="py-0"
                        color="success"
                        label
                        outline
                        small
                      >{{ item }}</v-chip>
                    </div>
                  </v-layout>
                </v-list-tile-title>
              </v-list-tile-content>
            </template>
          </v-select>
          <v-text-field
            box
            id="password"
            name="password"
            label="Password"
            type="password"
            v-model="fakePassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="primary"
          :disabled="!fakeUsername || loading"
          large
          :loading="loading"
          @click="SetUser()"
        >Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',

  layout: 'public',

  data: () => ({
    fakeUsername: null,
    feedPath: '/app/feed',
    loading: null,
    userIds: [1, 2, 3]
  }),

  computed: {
    ...mapGetters('people', ['getPeopleByIds']),

    fakePassword() {
      return this.fakeUsername ? 'password123' : ''
    },

    users() {
      return this.getPeopleByIds(this.userIds)
    }
  },

  methods: {
    Redirect() {
      this.loading = false
      this.$router.push({ path: this.feedPath })
    },
    SetUser() {
      if (!this.fakeUsername) {
        return
      }
      this.loading = true
      this.$store.commit('people/SET_USER', this.fakeUsername)
      setTimeout(() => this.Redirect(), 800)
    }
  }
}
</script>

<style scoped>
.v-list .v-list__tile__title {
  height: 32px;
  line-height: 32px;
}
</style>

