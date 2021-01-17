## readme

a libary that helps process tree structure in javascript.

## example

- buildTree

```typescript
buildTree<"id", "parent", { id: string; parent: string }>(
  [
    { id: "node-1", parent: "root" },
    { id: "node-2", parent: "root" },
    { id: "node-3", parent: "node-2" },
    { id: "node-4", parent: "node-2" },
    { id: "node-5", parent: "node-4" },
  ],
  "id",
  "parent"
);
```

- flattenTree

```typescript
type Item = { id: string; parent: string; children?: Item[] };
let ans = flattenTree<"children", Item>([
  { id: "node-1", parent: "root" },
  {
    id: "node-2",
    parent: "root",
    children: [
      { id: "node-3", parent: "node-2" },
      {
        id: "node-4",
        parent: "node-2",
        children: [{ id: "node-5", parent: "node-4" }],
      },
    ],
  },
]);
```
