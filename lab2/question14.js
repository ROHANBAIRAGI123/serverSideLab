var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}
];

for (let i = 0; i < library.length; i++) {
    let book = library[i];

    console.log("Book Title:", book.title);
    console.log("Author:", book.author);
    console.log("Reading Status:", book.readingStatus);
    console.log("----------------------");
}
