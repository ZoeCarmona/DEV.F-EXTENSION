// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
// Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.

class Book {
    constructor(title, autor, year, status) {
        this.title = title
        this.autor = autor
        this.year = year
        this.status = status
        this.chapters = []
    }

    describeBook() {
        console.log(`Libro titulado ${this.title}, escrito por ${this.autor} en el año ${this.year}, el estado es: ${this.status}.`)
    }

    addChapter(chapter) {
        this.chapters.push(chapter)
    }

    deleteChapter(chapter) {
        this.chapters = this.chapters.filter(item => item !== chapter)
    }

    showChapters() {
        console.log("Capítulos:")
        this.chapters.forEach((chapter, index) => {
            console.log(`${index + 1}. ${chapter}`)
        })
    }
}

const book1 = new Book("Noches blancas", "Fiódor Dostoyevski", 1848, "disponible")

book1.addChapter("Primera noche")
book1.addChapter("Segunda noche")
book1.addChapter("Tercera noche")
book1.addChapter("Cuarta noche")
book1.addChapter("La mañana")

book1.describeBook()
book1.showChapters()