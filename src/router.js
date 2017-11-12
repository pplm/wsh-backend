import Main from './views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['./views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error_404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['./views/error_page/404.vue'], resolve); }
};

export const page401 = {
    path: '/401',
    meta: {
        title: '401-权限不足'
    },
    name: 'error_401',
    component: resolve => { require(['./views/error_page/401.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error_500',
    component: resolve => { require(['./views/error_page/500.vue'], resolve); }
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: resolve => { require(['./views/form/article-publish/preview.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['./views/main_components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: '首页', name: 'home_index', component: resolve => { require(['./views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['./views/own-space/own-space.vue'], resolve); } },
        { path: 'ownspace/:username', title: '带参个人中心', name: 'ownspace_with_name', component: resolve => { require(['./views/own-space/own-space.vue'], resolve); } },  // 用于展示带参路由
        { path: 'order/:order_id', title: '订单详情', name: 'order_info', component: resolve => { require(['./views/argument-page/order-info.vue'], resolve); } },  // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['./views/message/message.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/member',
        icon: 'person-stalker',
        title: '会员管理',
        name: 'memerManagement',
        component: Main,
        children: [
            { path: 'memberManagement', title: '会员管理', name: 'member_management', component: resolve => { require(['./views/member/member.vue'], resolve); } }
        ]
    },
    {
        path: '/journey',
        icon: 'person-stalker',
        title: '行程管理',
        name: 'journeyManagement',
        component: Main,
        children: [
            { path: 'journeyManagement', title: '行程管理', name: 'journey_management', component: resolve => { require(['./views/journey/journey.vue'], resolve); } }
        ]
    },
    {
        path: '/circle',
        icon: 'person-stalker',
        title: '圈子管理',
        name: 'circleManagement',
        component: Main,
        children: [
            { path: 'circleManagement', title: '圈子管理', name: 'circle_management', component: resolve => { require(['./views/circle/circle.vue'], resolve); } }
        ]
    },
/*    
    {
        path: '/finance',
        icon: 'android-sad',
        title: '财务管理',
        name: 'financeManagement',
        component: Main,
        children: [
            { path: 'rechargeManagement', title: '充值管理', name: 'recharge_management', component: resolve => { require(['./views/finance/rechargeManagement.vue'], resolve); } },
            { path: 'financialStatistics', title: '财务统计', name: 'financial_statistics', component: resolve => { require(['./views/finance/financialStatistics.vue'], resolve); } }
        ]
    },
*/
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page401,
    page404
];
