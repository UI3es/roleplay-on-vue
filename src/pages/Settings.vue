<template>
  <v-container fluid grid-list-lg>
    <v-layout wrap>
      <v-flex xs12>
        <h1 class="headline">{{ pageTitle }}</h1>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex shrink :xs12="$vuetify.breakpoint.smAndDown">
        <v-list class="elevation-1 pa-0" dense>
          <v-list-group
            v-for="link in navSettings"
            :key="`route-link-settings-${link.id}`"
            no-action
            v-model="link.show"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ link.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in link.subItems"
              :key="`route-secondary-link-settings-${link.id}-${subItem.id}`"
              @click
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-flex>
      <v-flex :xs12="$vuetify.breakpoint.smAndDown">
        <p>Stuff goes here</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Settings',
    data: () => ({
      navSettings: [
        {
          icon: 'chat',
          id: 1,
          show: false,
          title: 'Communications',
          subItems: [
            {
              icon: 'notifications_active',
              id: 1,
              title: 'Notifications'
            },
            {
              icon: 'mdi-wrench-outline',
              id: 2,
              title: 'Recognition types'
            },
            {
              icon: 'mdi-wrench-outline',
              id: 3,
              title: 'Survey types'
            },
            {
              icon: 'mdi-format-section',
              id: 4,
              title: 'Templates'
            }
          ]
        },
        {
          icon: 'hotel',
          id: 2,
          show: false,
          title: 'Time off',
          subItems: [
            {
              icon: 'mdi-wrench-outline',
              id: 1,
              title: 'Absence types'
            },
            {
              icon: 'mdi-calendar-repeat',
              id: 2,
              title: 'Company holidays'
            }
          ]
        },
        {
          icon: 'assignment_turned_in',
          id: 3,
          show: false,
          title: 'Performance',
          subItems: [
            {
              icon: 'mdi-format-section',
              id: 1,
              title: 'Appraisal templates'
            },
            {
              icon: 'mdi-comment-check',
              id: 2,
              title: 'Closure reasons'
            },
            {
              icon: 'mdi-format-list-bulleted-type',
              id: 3,
              title: 'Objective categories'
            },
            {
              icon: 'mdi-numeric',
              id: 4,
              title: 'Objective ratings'
            },
            {
              icon: 'mdi-av-timer',
              id: 5,
              title: 'Review intervals'
            },
            {
              icon: 'mdi-wrench-outline',
              id: 6,
              title: 'Review types'
            }
          ]
        },
        {
          icon: 'redeem',
          id: 4,
          show: false,
          title: 'Rewards',
          subItems: [
            {
              icon: 'mdi-cash-multiple',
              id: 1,
              title: 'Bonus rates'
            },
            {
              icon: 'mdi-group',
              id: 2,
              title: 'Reward groups'
            }
          ]
        },
        {
          icon: 'assignment',
          id: 5,
          show: false,
          title: 'Tasks',
          subItems: [
            {
              icon: 'mdi-av-timer',
              id: 1,
              title: 'Task intervals'
            },
            {
              icon: 'mdi-swap-vertical',
              id: 2,
              title: 'Task priorities'
            },
            {
              icon: 'mdi-wrench-outline',
              id: 3,
              title: 'Worksheet types'
            }
          ]
        },
        {
          icon: 'verified_user',
          id: 6,
          show: false,
          title: 'Security',
          subItems: [
            {
              icon: '',
              id: 1,
              title: 'Security Groups'
            },
            {
              icon: '',
              id: 2,
              title: 'Data Access'
            }
          ]
        },
        {
          icon: 'verified_user',
          id: 7,
          show: false,
          title: 'Company',
          subItems: [
            {
              icon: '',
              id: 1,
              title: 'Profile'
            },
            {
              icon: '',
              id: 2,
              title: 'Branding'
            },
            {
              icon: '',
              id: 3,
              title: 'Customisation'
            }
          ]
        }
      ],
      pageTitle: 'Settings'
    })
  }
</script>

<style scoped>
  .v-list__group >>> .v-list__group__items--no-action .v-list__tile {
    padding-left: 24px;
  }
  .v-list__group >>> .v-list__group__header.v-list__group__header--active .v-list__tile__title {
    font-weight: 600;
  }
</style>
