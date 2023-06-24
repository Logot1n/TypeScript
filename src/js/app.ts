import Cart from './Cart';
import Book from './product/Book';
import MusicAlbum from './product/MusicAlbum';
import Movie from './product/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventure'], 137, 399));

console.log(cart.items);

console.log(cart.sumWithoutDiscount(cart.items));
console.log(cart.sumWithDiscount(cart.items, 20));