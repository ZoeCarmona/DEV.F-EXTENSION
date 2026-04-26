# JavaScript Objects (Quick Guide)

## What is an Object?

An object in JavaScript is a collection of **key–value pairs** used to store related data and functionality.

## Example

```js
const book = {
  title: "White Nights",
  author: "Fyodor Dostoevsky",
  year: 1848,
  isAvailable: true
};
```

## Accessing Properties

```js
book.title        // Dot notation
book["author"]    // Bracket notation
```

## Adding / Updating Properties

```js
book.pages = 120;
book.year = 1850;
```

## Methods (Functions inside Objects)

```js
const user = {
  name: "Alex",
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
```

## Why Use Objects?

* Organize related data
* Represent real-world entities
* Combine data + behavior

---

**Summary:** Objects are essential for structuring data and building more complex applications in JavaScript.
