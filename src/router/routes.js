
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Index', name: 'Index', component: () => import('pages/Index.vue') },
      { path: 'perfil-adulto', name: 'Perfil-Adulto', component: () => import('pages/Perfil-Adulto.vue') },
      { path: 'pruebadialogs', name: 'PruebaDialogs', component: () => import('pages/PruebaDialogs.vue') },
      { path: 'Form', name: 'Form', component: () => import('pages/Form.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
    component: () => import('pages/Login.vue')
  }
]

export default routes
