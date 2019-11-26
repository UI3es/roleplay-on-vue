<template>
  <v-navigation-drawer
    app
    class="darken-2 nav-main pb-0 primary"
    dark
    :mini-variant="appNav"
    v-model="appNavModel"
  >
    <v-layout column fill-height>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon large>spa</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ platformName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0">
        <v-list-tile
          v-for="item in routesMenu"
          :key="item.title"
          active-class="primary darken-2"
          avatar
          class="nav-main"
          exact
          :to="{ name: item.name }"
        >
          <v-tooltip
            content-class="tooltip-nav"
            color="darken-2 primary"
            :disabled="!appNav"
            nudge-right="5"
            right
          >
            <template v-slot:activator="{ on }">
              <v-list-tile-avatar v-on="on">
                <v-icon>{{ item.meta.icon }}</v-icon>
              </v-list-tile-avatar>
            </template>
            <div class="body-2 px-2 py-1">{{ item.meta.label }}</div>
          </v-tooltip>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.meta.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',

  data: () => ({
    right: null
  }),

  computed: {
    ...mapState(['appView', 'platformName']),

    appNav: {
      get() {
        return this.$store.state.appNav
      },
      set(val) {
        this.$store.commit('SET_APP_NAV_MINI', val)
      }
    },

    appNavModel: {
      get() {
        return this.$store.state.appNavModel
      },
      set(val) {
        this.$store.commit('SET_APP_NAV_MODEL', val)
      }
    },

    appRoutes() {
      return this.$router.options.routes.find(route => route.path === '/app')
    },

    routesEmployee() {
      return this.appRoutes.children.filter(route => route.meta.employee)
    },

    routesManage() {
      return this.appRoutes.children.filter(route => route.meta.manage)
    },

    routesMenu() {
      return this.appView
        ? this.appView === 'employee'
          ? this.routesEmployee
          : this.routesManage
        : null
    }
  },

  methods: {
    ToggleAppNavMini() {
      this.$store.commit('TOGGLE_APP_NAV_MINI')
    }
  },

  mounted() {
    this.$store.commit('SET_APP_NAV_MINI', this.$vuetify.breakpoint.mdAndDown)
  }
}
</script>

<style scoped>
.nav-main >>> .primary.v-list__tile--active {
  background-color: var(--v-primary-darken3) !important;
}
.nav-main .v-icon.expanded {
  transform: rotate(-180deg);
}
.tooltip-nav {
  border-radius: 0 4px 4px 0;
}
</style>
