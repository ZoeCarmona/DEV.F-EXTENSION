# JavaScript Data Types

This file contains a brief introduction to the main data types in JavaScript.

## Primitive Data Types

JavaScript has 7 primitive data types:

- **String** → text values  
  Example: `"Hello"`

- **Number** → numeric values  
  Example: `25`

- **BigInt** → very large integers  
  Example: `12345678901234567890n`

- **Boolean** → logical values  
  Example: `true`, `false`

- **Undefined** → a variable declared but not assigned  
  Example: `let x;`

- **Null** → intentional absence of value  
  Example: `let y = null;`

- **Symbol** → unique identifiers  
  Example: `Symbol("id")`

## Non-Primitive Data Type

- **Object** → collections of key-value pairs  
  Example:
  ```js
  const person = {
    name: "Ana",
    age: 20
  };