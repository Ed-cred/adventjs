function traverse(tree, index) {
  if (!tree || index >= tree.length || (tree[index] === null) | undefined) {
    return null;
  }

  const lindex = 2 * index + 1;
  const rindex = 2 * index + 2;
  return {
    value: tree[index],
    left: traverse(tree, lindex),
    right: traverse(tree, rindex),
  };
}

function transformTree(tree) {
  if (!tree || (tree[0] === null) | undefined) {
    return null;
  }
  const result = traverse(tree, 0);
  return result;
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));
/*
{
  value: 3,
  left: {
    value: 1,
    left: {
      value: 8,
      left: null,
      right: null
    },
    right: {
      value: 12,
      left: null,
      right: null
    }
  },
  right: {
    value: 0,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}
*/
