const mockGroupRows = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `출시개발서버홍보팀 `,
  hasChildren: true,
  hasUpperOrg: true,
  level: (i % 5) + 1,
}));

export default mockGroupRows;
