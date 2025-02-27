interface GroupRow {
  name: string;
  level: number;
  children?: GroupRow[];
}

const generateGroup = (level: number, maxLevel: number): GroupRow => {
  if (level > maxLevel) {
    return {
      name: '출시개발서버홍보팀',
      level,
      children: [],
    };
  }

  return {
    name: '출시개발서버홍보팀',
    level,
    children: [generateGroup(level + 1, maxLevel)],
  };
};

const generateGroups = (count: number, maxLevel: number): GroupRow[] => {
  const groups: GroupRow[] = [];
  for (let i = 0; i < count; i++) {
    groups.push(generateGroup(1, maxLevel));
  }
  return groups;
};

const mockGroupRows: GroupRow[] = generateGroups(30, 20);

export default mockGroupRows;
