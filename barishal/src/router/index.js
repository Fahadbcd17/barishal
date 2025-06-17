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

    if (to.meta.requiresAuth && !isAuthenticated) {
        console.log("🚀 ~ router.beforeEach ~ isAuthenticated:", isAuthenticated)
        next({ name: 'login' });
    } 
    else if (to.meta.preventAuthAccess && isAuthenticated) {
        console.log("🚀 ~ router.beforeEach ~ isAuthenticated:", isAuthenticated);
        next({ name: 'dashboard' }); 
    } 
    else {
        console.log("🚀 ~ router.beforeEach ~ nex(): else case")
        next()
    }
});

export default router