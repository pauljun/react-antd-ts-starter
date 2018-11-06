export default [
  {
    component: require('./view/Layout/index').default,
    exact: true,
    path: '/'
  },
  {
    component: require('./view/Login/index').default,
    path: '/login'
  }
]