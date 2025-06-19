import { createRouter, createWebHistory, useRoute } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/home/HomeView.vue'),
            meta: {
                layout: 'BaseLayout',
                requiresAuth: false,
                static: true
            }
        },

        {
            path: '/signup',
            name: 'signup',
            component: () => import('../views/auth/SignUpView.vue'),
            meta: {
                requiresAuth: false,
                preventAuthAccess: true,
                static: false
            }
        },

        {
            path: '/login',
            name: 'login',
            component: () => import('../views/auth/LoginView.vue'),
            meta: {
                requiresAuth: false,
                preventAuthAccess: true,
                static: false
            }
        },      
        
        {
            path: '/user',
            name: 'user',
            meta: {
                layout: 'UserLayout',
                requiresAuth: true,
                static: false
            },
            component: () => import('../views/user/HomeView.vue'), //this is just a wrapper for the children
            children: 
            [
                {
                    path: 'dashboard',
                    name: 'dashboard',
                    component: () => import('../views/user/DashboardView.vue'),
                },
                {
                  path: 'profile',
                  name: 'profile',
                  component: () => import('../views/user/ProfileView.vue'),
                },
                {
                  path: 'explore',
                  name: 'explore',
                  component: () => import('../views/user/ExploreView.vue'),
                },
                {
                  path: 'about',
                  name: 'about',
                  component: () => import('../views/user/AboutView.vue'),
                },
                {
                  path: 'guide',
                  name: 'guide',
                  component: () => import('../views/user/GuideRequestView.vue'),
                },
                {
                  path: 'attractions',
                  name: 'attractions',
                  component: () => import('../views/user/AttractionsView.vue'),
                },
                {
                    path: 'post',
                    name: 'post',
                    component: () => import('../views/user/AddPostView.vue'),
                  },
                
            ]
        },

    ]
});

router.afterEach((to, from, failure) => {
    if (!failure) {
        setTimeout(() => {
            HSStaticMethods.autoInit();
        }, 100)
    }
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('access_token');
    if (to.meta.preventAuthAccess && isAuthenticated) {
        return next({ name: 'dashboard' });
    }
    if (to.path === '/' && isAuthenticated) {
        return next({ name: 'dashboard' });
    }
    if (to.meta.requiresAuth && !isAuthenticated) {
        return next({ name: 'login' });
    }
    next();
});

export default router