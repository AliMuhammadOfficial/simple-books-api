export const protectedRoutes = [
  '/api/orders',
  /^\/api\/orders\/\d+$/, // This regex pattern will match any route with the format /api/orders/{orderId}
];
// export const authRoutes = ["/login"];
export const publicRoutes = ['/'];
