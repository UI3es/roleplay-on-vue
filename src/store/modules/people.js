export default {
  namespaced: true,
  state: {
    people: [
      {
        id: 1,
        fullName: 'Leanne Graham',
        avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        username: '07777111111',
        email: 'Sincere@april.biz',
        role: 'UX Researcher',
        phone: '+44777111111',
        permissions: ['View']
      },
      {
        id: 2,
        fullName: 'Ervin Howell',
        avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        username: '07777111222',
        email: 'Shanna@melissa.tv',
        role: 'Software Engineer',
        phone: '+44777111222',
        permissions: ['View', 'Manage']
      },
      {
        id: 3,
        fullName: 'Clementine Bauch',
        avatarUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
        username: '07777111333',
        email: 'Nathan@yesenia.net',
        role: 'Head of Engineering',
        phone: '+44777111333',
        permissions: ['View', 'Manage', 'Admin']
      },
      {
        id: 4,
        fullName: 'Patricia Lebsack',
        avatarUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
        username: '07777111444',
        email: 'Julianne.OConner@kory.org',
        role: 'Head of Business Development',
        phone: '+44777111444',
        permissions: ['View']
      },
      {
        id: 5,
        fullName: 'Chelsey Dietrich',
        avatarUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
        username: '07777111555',
        email: 'Lucio_Hettinger@annie.ca',
        role: 'Information Scientist',
        phone: '+44777111555',
        permissions: ['View']
      },
      {
        id: 6,
        fullName: 'Dennis Schulist',
        avatarUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
        username: '07777111666',
        email: 'Karley_Dach@jasper.info',
        role: 'Head of Business Development',
        phone: '+44777111666',
        permissions: ['View']
      },
      {
        id: 7,
        fullName: 'Kurtis Weissnat',
        avatarUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
        username: '07777111777',
        email: 'Telly.Hoeger@billy.biz',
        role: 'Frontend Engineer',
        phone: '+44777111777',
        permissions: ['View']
      },
      {
        id: 8,
        fullName: 'Nicholas Runolfsdottir',
        avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
        username: '07777111888',
        email: 'Sherwood@rosamond.me',
        role: 'Tech Lead - Frontend',
        phone: '+44777111888',
        permissions: ['View']
      },
      {
        id: 9,
        fullName: 'Glenna Reichert',
        avatarUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
        username: '07777111999',
        email: 'Chaim_McDermott@dana.io',
        role: 'Test Automation Engineer',
        phone: '+44777111999',
        permissions: ['View']
      },
      {
        id: 10,
        fullName: 'Clementina DuBuque',
        avatarUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
        username: '07777111000',
        email: 'Rey.Padberg@karina.biz',
        role: 'Software Engineer',
        phone: '+44777111000',
        permissions: ['View']
      }
    ],
    roles: [
      {
        id: 1,
        title: 'CEO'
      },
      {
        id: 2,
        title: 'Sales Director'
      },
      {
        id: 3,
        title: 'Head of Business Development'
      },
      {
        id: 4,
        title: 'Business Development Manager'
      },
      {
        id: 5,
        title: 'Business Development Executive'
      }
    ],
    user: null
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload
    }
  },
  actions: {},
  getters: {
    getPeople: state => state.people,
    getPeopleByIds: (state, getters) => ids =>
      state.people.filter(person => ids.indexOf(person.id) > -1),
    getPersonById: (state, getters) => id => state.people.find(person => person.id === id),
    getPersonLoggedIn: state => state.people.find(person => person.id === state.user),
    getRoles: state => state.roles,
    getRoleById: (state, getters) => id => state.roles.find(role => role.id === id)
  }
}
