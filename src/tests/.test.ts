import Cart from '../js/Cart';
import Book from '../js/product/Book';
import MusicAlbum from '../js/product/MusicAlbum';
import Movie from '../js/product/Movie';

describe('Cart', () => {
    test('add to cart', () => {
        const cart = new Cart();
        cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
        expect(cart.items.length).toBe(1);
    })

    test('get items from cart', () => {
        const cart = new Cart();
        cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
        cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
        cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventure'], 137, 399));
        expect(cart.items.length).toBe(3);
    })

    test('sum without discount', () => {
        const cart = new Cart();
        cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
        cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
        cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventure'], 137, 399));
        expect(cart.sumWithoutDiscount(cart.items)).toBe(2524);
    })

    test('sum with discount', () => {
        const cart = new Cart();
        cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
        cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
        cart.add(new Movie(1010, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', ['fantastic', 'action', 'fantasy', 'adventure'], 137, 399));
        expect(cart.sumWithDiscount(cart.items, 20)).toBe(2020);
    })
});