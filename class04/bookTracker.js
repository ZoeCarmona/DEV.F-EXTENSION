// Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

// Instrucciones para resolver el problema:
// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

function showReadBooks(){
    readBooks.forEach(book => console.log(book));
}

let readBooks = []
let addBook = (title) => readBooks.push(title)

addBook('The Great Gatsby')
addBook('To Kill a Mockingbird')
addBook('Pride and Prejudice')

console.log(showReadBooks())