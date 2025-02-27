const mockListSpaceData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: '홍길동',
  company: '위메이드',
  department: '인프라보안팀',
  position: '대리',
  // Assigns states in a cycle (default → hover → select → selecthover)
  // state: i % 4 === 0 ? 'default' : i % 4 === 1 ? 'default' : 'select',
  // isHovered: i % 4 === 1 || i % 4 === 3, // True for hover & selecthover states
  state: 'default',
  isHovered: false,
}));

export default mockListSpaceData;
