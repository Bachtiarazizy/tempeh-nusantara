export const getNavigationMenu = (role) => {
  const menus = {
    buyer: [
      { id: 'dashboard', label: 'Dashboard', icon: 'home', href: '/dashboard/buyer' },
      { id: 'orders', label: 'Pesanan Saya', icon: 'shopping-bag', href: '/dashboard/buyer/orders' },
      { id: 'profile', label: 'Profil', icon: 'user', href: '/dashboard/buyer/profile' }
    ],
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: 'home', href: '/dashboard/admin' },
      { id: 'products', label: 'Manajemen Produk', icon: 'package', href: '/dashboard/admin/products' },
      { id: 'orders', label: 'Manajemen Pesanan', icon: 'shopping-bag', href: '/dashboard/admin/orders' },
      { id: 'affiliates', label: 'Manajemen Affiliate', icon: 'users', href: '/dashboard/admin/affiliates' },
      { id: 'settings', label: 'Pengaturan', icon: 'settings', href: '/dashboard/admin/settings' }
    ],
    affiliate: [
      { id: 'dashboard', label: 'Dashboard', icon: 'home', href: '/dashboard/affiliate' },
      { id: 'performance', label: 'Performa', icon: 'trending-up', href: '/dashboard/affiliate/performance' },
      { id: 'materials', label: 'Materi Marketing', icon: 'download', href: '/dashboard/affiliate/materials' },
      { id: 'profile', label: 'Profil', icon: 'user', href: '/dashboard/affiliate/profile' }
    ]
  };
  return menus[role] || [];
};