it('should return true', () =>{});
// const request = require('supertest');
// const mongoose = require('mongoose');
// //require('../../config/config');
// const app = require('../../app');
// const Book = require('../../src/api/resources/books/books.model');

// beforeAll(async () => {
//     await mongoose.connection.asPromise();
// });

// afterEach(async () => {
//     await Book.deleteMany({});
// });

// afterAll(async () => {
//     await mongoose.connection.close();
// });

// describe('getBook', () => {
//     it('should return 200 and get book from db', async () => {
//         const book = await Book.create({ title: 'MyBook' });

//         const res = await request(app).get(`/api/books/${book.id}`);

//         expect(res.status).toBe(200);
//         expect(res.body.message).toMatch('book retrieved successfully');
//         expect(res.body.data.book).toMatchObject({ title: 'MyBook' });
//     });

//     it('should return 404 if book not found', async () => {
//         const res = await request(app).get('/api/books/6aa551b387fa865b289a5aca');

//         expect(res.status).toBe(404);
//         expect(res.body.message).toMatch('404 not found');
//     });

//     it('should return 500', async () => {
//         const res = await request(app).get('/api/books/10');
//         expect(res.status).toBe(500);
//     });


// });


// describe('updateBook', () => {
//     it('should return 404 if book not found', async () => {
//         const res = await request(app).put('/api/books/6aa551b387fa865b289a5aca');

//         expect(res.status).toBe(404);
//         expect(res.body.message).toMatch('404 not found');
//     });

//     it('should return 200 and update the book', async () => {
//         const book = await Book.create({ title: 'MyBook' });
//         const res = await request(app)
//         .put(`/api/books/${book.id}`)
//         .send({title: 'MyBook Updated'});

//         expect(res.status).toBe(200);
//         expect(res.body.message).toMatch('book updated successfully');
//         expect(res.body.data.book).toMatchObject({ title: 'MyBook Updated'});
//     });
// });

// describe('deletBook', () => {
//     it('should return 200 and delete the book', async () => {
//         const book = await Book.create({ title: 'MyBook' });

//         const res = await request(app).delete(`/api/books/${book.id}`);
//         expect(res.status).toBe(200);

//         expect(res.body.message).toMatch('book deleted successfully');
//     });
// });

