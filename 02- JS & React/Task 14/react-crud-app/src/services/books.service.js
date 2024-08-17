import axios from "axios";
const url = "http://localhost:3000/books";
// Get All Books
export async function getBooks() {
    return await axios.get(url);
}
// Create Book
export async function addBook(book) {
    return await axios.post(url , book);
}
// Get Book
export async function getBook(id) {
    return await axios.get(`${url}/${id}`);
}
// Edit Book
export async function updateBook(id , book) {
    return await axios.put(`${url}/${id}` , book);
}
// Delete Book
export async function deleteBook(id) {
    return await axios.delete(`${url}/${id}`);
}