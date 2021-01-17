export type TreeNode<CID extends string, T> = T &
  { [key in CID]?: TreeNode<CID, T>[] };
export const flattenTree = <
  CID extends string,
  T extends { [key in CID]?: TreeNode<CID, T>[] }
>(
  items: TreeNode<CID, T>[],
  childrenKey: CID = "children" as CID
) => {
  const flattenOptions: T[] = [];
  dfs(items);
  return flattenOptions;
  function dfs(nodes?: T[]) {
    if (nodes == null) {
      return;
    }
    for (const node of nodes) {
      if (!node[childrenKey] || !node[childrenKey]!.length) {
        flattenOptions.push(node);
      } else {
        dfs(node[childrenKey]);
      }
    }
  }
};
