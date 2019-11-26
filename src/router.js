import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./layouts/public.vue'),
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('./pages/Login.vue')
        }
      ]
    },
    {
      path: '/app',
      meta: {
        employee: true,
        manage: true,
        settings: true
      },
      component: () => import('./layouts/default.vue'),
      children: [
        {
          path: 'feed',
          name: 'Feed',
          meta: {
            icon: 'chat',
            label: 'Feed',
            employee: true,
            manage: false,
            slug: 'feed'
          },
          component: () => import('./pages/Dashboard.vue')
        },
        {
          path: 'manage/posts',
          name: 'Posts',
          meta: {
            icon: 'chat',
            label: 'Posts',
            employee: false,
            manage: true,
            slug: 'manage-posts'
          },
          component: () => import('./pages/Posts.vue')
        },
        {
          path: 'people',
          name: 'People',
          meta: {
            icon: 'group',
            label: 'People',
            employee: true,
            manage: false,
            slug: 'people'
          },
          component: () => import('./pages/People.vue')
        },
        {
          path: 'manage/people',
          name: 'PeopleManage',
          meta: {
            icon: 'group',
            label: 'People',
            employee: false,
            manage: true,
            slug: 'manage-people'
          },
          component: () => import('./pages/PeopleManage.vue')
        },
        {
          path: 'time-off',
          name: 'TimeOff',
          meta: {
            icon: 'beach_access',
            label: 'Time Off',
            employee: true,
            manage: false,
            slug: 'time-off'
          },
          component: () => import('./pages/TimeOff.vue')
        },
        {
          path: 'manage/time-off',
          name: 'TimeOffManage',
          meta: {
            icon: 'beach_access',
            label: 'Time Off',
            employee: false,
            manage: true,
            slug: 'manage-time-off'
          },
          component: () => import('./pages/TimeOffManage.vue')
        },
        {
          path: 'performance',
          name: 'Performance',
          meta: {
            icon: 'assignment_turned_in',
            label: 'Performance',
            employee: true,
            manage: false,
            slug: 'performance'
          },
          component: () => import('./pages/Performance.vue')
        },
        {
          path: 'manage/performance',
          name: 'PerformanceManage',
          meta: {
            icon: 'assignment_turned_in',
            label: 'Performance',
            employee: false,
            manage: true,
            slug: 'manage-performance'
          },
          component: () => import('./pages/PerformanceManage.vue')
        },
        {
          path: 'tasks',
          name: 'Tasks',
          meta: {
            icon: 'assignment',
            label: 'Tasks',
            employee: true,
            manage: false,
            slug: 'tasks'
          },
          component: () => import('./pages/Tasks.vue')
        },
        {
          path: 'manage/tasks',
          name: 'TasksManage',
          meta: {
            icon: 'assignment',
            label: 'Tasks',
            employee: false,
            manage: true,
            slug: 'manage-tasks'
          },
          component: () => import('./pages/TasksManage.vue')
        },
        {
          path: 'documents',
          name: 'Documents',
          meta: {
            icon: 'folder',
            label: 'Documents',
            employee: true,
            manage: false,
            slug: 'documents'
          },
          component: () => import('./pages/Documents.vue')
        },
        {
          path: 'documents/company',
          name: 'DocumentsCompany',
          meta: {
            icon: null,
            label: 'Company Documents',
            parent: 'documents',
            slug: 'documents-company'
          },
          component: () => import('./pages/DocumentsCompany.vue')
        },
        {
          path: 'documents/personal',
          name: 'DocumentsPersonal',
          meta: {
            icon: null,
            label: 'Your Documents',
            parent: 'documents',
            slug: 'documents-personal'
          },
          component: () => import('./pages/DocumentsPersonal.vue')
        },
        {
          path: 'company',
          name: 'Company',
          meta: {
            icon: 'business',
            label: 'Company',
            parent: null,
            slug: 'company'
          },
          component: () => import('./pages/Company.vue')
        },
        {
          path: 'company/departments',
          name: 'CompanyDepartments',
          meta: {
            icon: null,
            label: 'Departments',
            parent: 'company',
            slug: 'company-departments'
          },
          component: () => import('./pages/CompanyDepartments.vue')
        },
        {
          path: 'company/sites',
          name: 'CompanySites',
          meta: {
            icon: null,
            label: 'Sites',
            parent: 'company',
            slug: 'company-sites'
          },
          component: () => import('./pages/CompanySites.vue')
        },
        {
          path: 'settings',
          name: 'Settings',
          meta: {
            icon: 'settings',
            label: 'Settings',
            settings: true,
            slug: 'settings'
          },
          component: () => import('./pages/Settings.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
