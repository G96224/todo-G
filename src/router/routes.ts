import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'all', component: () => import('pages/AllAgent.vue') },
      { path: 'today', component: () => import('pages/TodayAgent.vue') },
      { path: 'seven', component: () => import('pages/SevenAgent.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
