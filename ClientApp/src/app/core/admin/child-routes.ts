export const childRoutes = [
    // {
    //     path: 'dashboard',
    //     loadChildren: () =>
    //       import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    //     data: { icon: 'dashboard', text: 'Dashboard' }
    // },
    {
        path: 'main',
        loadChildren: () =>
          import('./admin.module').then(m => m.AdminModule),
        data: { icon: 'main', text: 'Main page' }
    },
    //   {
    //     path: 'charts',
    //     loadChildren: () =>
    //       import('./charts/charts.module').then(m => m.ChartsModule),
    //     data: { icon: 'bar_chart', text: 'Charts' }
    //   },

];
