<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click="ToggleAppNav">
      <v-icon>{{ appNavModel ? 'menu_open' : 'menu' }}</v-icon>
    </v-toolbar-side-icon>
    <v-chip v-if="appViewTitle && isManager" class="ml-2" color="info" disabled label outline>
      <v-avatar v-if="appViewIcon">
        <v-icon class="ml-1" color="info">{{ appViewIcon }}</v-icon>
      </v-avatar>
      {{ appViewTitle }}
    </v-chip>
    <v-spacer/>
    <v-btn
      v-if="person && person.permissions.includes('Admin')"
      flat
      icon
      :to="{ path: 'settings' }"
    >
      <v-icon>settings</v-icon>
    </v-btn>
    <v-btn flat icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-layout
      v-if="person"
      align-center
      :class="{ 'expanded': menu }"
      fill-height
      id="toolbarProfileMenuBtn"
      :pl-2="$vuetify.breakpoint.xs"
      :pl-3="$vuetify.breakpoint.smAndUp"
      :pr-1="$vuetify.breakpoint.smAndUp"
      shrink
      @click="menu = !menu"
    >
      <v-avatar size="40">
        <img :alt="person.fullName" :src="person.avatarUrl">
      </v-avatar>
      <v-layout v-if="$vuetify.breakpoint.smAndUp" column ml-3>
        <span class="body-2">{{ person.fullName }}</span>
        <small class="caption grey--text text--darken-1">{{ person.role }}</small>
      </v-layout>
      <v-icon class="ml-2" :class="{ 'expanded': menu }">arrow_drop_down</v-icon>
    </v-layout>
    <v-menu
      :attach="true"
      activator="#toolbarProfileMenuBtn"
      bottom
      left
      offset-y
      transition="slide-y-transition"
      z-index="1"
      v-model="menu"
    >
      <v-list dense>
        <template v-for="item in filteredMenu">
          <v-subheader
            v-if="item.subHeading"
            :key="`profile-menu-subheader-key-${item.id}`"
          >{{ item.subHeading }}</v-subheader>
          <v-list-tile
            v-if="item.title"
            :key="`profile-menu-item-key-${item.id}`"
            :to="{ path: item.to }"
            v-on="item.view ? { click: () => SetView(item.view) } : {}"
          >
            <v-list-tile-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="item.divider" :key="`profile-menu-divider-key-${item.id}`"/>
        </template>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    name: 'Toolbar',
    data: () => ({
      profileMenu: [
        {
          icon: 'person',
          id: 2,
          title: 'Your View',
          view: 'employee'
        },
        {
          icon: 'supervisor_account',
          id: 3,
          title: 'Manage View',
          view: 'manage'
        },
        {
          id: 4,
          divider: true
        },
        {
          icon: 'account_circle',
          id: 5,
          title: 'Profile'
        },
        {
          icon: 'help',
          id: 6,
          title: 'Knowledge Base'
        },
        {
          icon: 'lock_open',
          id: 7,
          title: 'Log out',
          to: '/'
        }
      ],
      menu: null
    }),

    computed: {
      ...mapGetters({
        person: 'people/getPersonLoggedIn'
      }),

      ...mapState(['appNavModel', 'appView', 'tenantName']),

      appViewIcon() {
        return this.appView
          ? this.appView === 'employee'
            ? 'person'
            : 'supervisor_account'
          : null
      },

      appViewTitle() {
        return this.appView ? (this.appView === 'employee' ? 'Your view' : 'Manage view') : null
      },

      filteredMenu() {
        return !this.isManager
          ? this.profileMenu.filter(item => !item.view && !item.divider)
          : this.profileMenu
      },

      isManager() {
        return this.person && this.person.permissions.includes('Manage')
      }
    },

    methods: {
      SetView(view) {
        if (!view) {
          return
        }
        this.$store.dispatch('CHANGE_APPLICATION_VIEW', { view })
      },
      ToggleAppNav() {
        this.$store.commit('TOGGLE_APP_NAV_MODEL')
      }
    },

    mounted() {
      if (!this.person) {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style scoped>
  #toolbarProfileMenuBtn {
    cursor: pointer;
  }
  #toolbarProfileMenuBtn:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  #toolbarProfileMenuBtn.expanded {
    background-color: rgba(0, 0, 0, 0.08);
  }
  #toolbarProfileMenuBtn .layout.column {
    line-height: 1.28;
  }
  #toolbarProfileMenuBtn .v-icon.expanded {
    transform: rotate(0.5turn);
  }
  .v-toolbar__items .v-btn {
    min-width: 64px;
  }
  @media (max-width: 960px) {
    .v-toolbar__items .v-btn {
      min-width: 48px;
      padding: 0 8px;
    }
  }
</style>

