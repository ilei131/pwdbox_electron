const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    redirectTo: '/demo?form=home',
    windowOptions: {
      title: 'Privacy Box',
      width: 1200,
      height: 800,
      minWidth: 800,
      minHeight: 600,
    },
    createConfig: {
      showSidebar: true,
      showCustomTitlebar: true,
      saveWindowBounds: true,
      openDevTools: true,
    },
  },
]

export default routes
