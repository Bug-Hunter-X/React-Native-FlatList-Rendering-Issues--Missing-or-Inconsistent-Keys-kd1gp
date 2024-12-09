The solution is to add a `keyExtractor` prop to the `FlatList` component. The `keyExtractor` function should return a unique identifier for each item in the `data` array. This will allow React Native to efficiently update the list.

```javascript
<FlatList
  data={myData}
  keyExtractor={(item, index) => item.id}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```

This improved example uses the `id` property of each item as the unique key.  If your data doesn't have a unique `id`, you can use the index as a last resort, but this is less efficient and can cause issues if you re-order items.

```javascript
<FlatList
  data={myData}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <Text>{item.name}</Text>}
/>
```