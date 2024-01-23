function editbook(book1, book2) {
    let mergebook = {}

    for (let inbook in book1) {
        mergebook[inbook] = book1[inbook]
    }

    for (let inbook in book2) {
        mergebook[inbook] = book2[inbook]
    }

    return mergebook
}

let book1 = { isbn: 111, title: 'disney', author: 'armmy', numberOfPages: 10 }
let book2 = { isbn: 112, title: 'marvel', author: 'ironman', numberOfPages: 15, year: 115 }


let mergebooks = editbook(book1, book2)


console.log(mergebooks)



//for in ใช้กับ obj