const groupRepeatedUnits = (templateUnits: any[]): Array<any> => {
  let templateArr = templateUnits.map((item: { unit: any }) => item.unit);
  let value = templateArr.shift();

  let groups = [[value]];

  for (const unit of templateArr) {
    let lastGroup = groups[groups.length - 1];
    if (lastGroup.indexOf(unit) !== -1) {
      lastGroup.push(unit);
    } else {
      groups.push([unit]);
    }
  }

  return groups;
};

const createRepetition = (groups: any[], maxRepetition = 1): string => {
  return groups
    .map((group: any[]) =>
      group.length === maxRepetition
        ? group.join(' ')
        : `repeat(${group.length}, ${group[0]})`
    )
    .join(' ');
};

export { groupRepeatedUnits, createRepetition };
