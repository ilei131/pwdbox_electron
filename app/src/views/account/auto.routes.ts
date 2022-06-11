const routes: RouteConfig[] = [
    {
        name: 'Account',
        path: '/account',
        windowOptions: {
            title: 'Account',
            resizable: false,
            minimizable: false,
            maximizable: false,
            fullscreenable: false,
            width: 300,
            height: 240,
        },
        createConfig: {
            hideMenus: true,
        },
    },
]

export default routes