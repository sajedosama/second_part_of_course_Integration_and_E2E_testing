
it('should return true', () =>{});
// const mongoose = require('mongoose');
// require('../../config/config');

// const Book = require('../../src/api/resources/books/books.model');
// const bookService = require('../../src/api/resources/books/books.service');

// beforeAll(async () => {
//     await mongoose.connection.asPromise();
// });

// beforeEach(async () => {
//     await Book.deleteMany({});
// });

// afterAll(async () => {
//     await Book.deleteMany({});
//     await mongoose.connection.close();
// });

// describe('getBooks', () => {
//     it('should return empty array', async () => {
//         const books = await bookService.getBooks();

//         expect(books.length).toBe(0);
//     });

//     it('should return 2 books', async () => {
//         await Book.insertMany([
//             { title: 'Hoosh' },
//             { title: 'Moosh' }
//         ]);

//         const books = await bookService.getBooks();

//         expect(books.length).toBe(2);
//         expect(books[0]).toMatchObject({ title: 'Hoosh' });
//         expect(books[1]).toMatchObject({ title: 'Moosh' });
//     });
// });

// describe('creatBook', () => {
//     it('should creat book with title Java', async () => {
//         await bookService.createBook({ title: 'Java' });

//         const books = await Book.find();

//         expect(books.length).toBe(1);
//         expect(books[0]).toMatchObject({ title: 'Java' });
//     });
// });

