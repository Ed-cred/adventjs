function transformTree(tree) {
    if (tree[0] === null) {
    return null;
  }

  const traverse = (index) => {
    if (tree[index] === null || index >= tree.length) {
      return null;
    }

    const lindex = 2 * index + 1;
    const rindex = 2 * index + 2;
    return {
      value: tree[index],
      left: traverse([lindex]),
      right: traverse([rindex]),
    };
  };
  const result = traverse(0);
  return result;
}

// function traverse(index, tree) {
//   if ((tree && tree[index] === null) || (tree && index >= tree.length)) {
//     return null;
//   }
//   //left and right child index based on provided binary tree array representation
//   const lindex = 2 * index + 1;
//   const rindex = 2 * index + 2;
//   // return the current node with recursive calls for the left and right children to traverse the tree
//   if (tree) {
//     return {
//       value: tree[index],
//       left: traverse([lindex]),
//       right: traverse([rindex]),
//     };
//   }
// }
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
