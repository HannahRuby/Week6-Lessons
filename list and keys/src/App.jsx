const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

export default function App() {
  const items = ["item 1", "item 2", "item 3"];
  const htmlItems = items.map((item) => <li key={item}>{item}</li>);
  return <ul>{htmlItems}</ul>;
}
//another way
// export default function App() {
//   const items = ["Item 1", "Item 2", "Item 3"];

//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }
