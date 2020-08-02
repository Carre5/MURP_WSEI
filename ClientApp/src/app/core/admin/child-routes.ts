export const childRoutes = [
  {
    path: 'orders',
    loadChildren: () =>
      import('../../features/orders/orders.module').then(m => m.OrdersModule),
    data: { icon: 'local_library', text: 'Orders' }
  },
  {
    path: 'company',
    loadChildren: () =>
      import('../../features/company/company.module').then(m => m.CompanyModule),
    data: { icon: 'business', text: 'Company' }
  }

];
