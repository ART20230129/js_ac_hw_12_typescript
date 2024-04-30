import Cart from "../ts/Cart";
import Movie from "../ts/Movie";
import Book from "../ts/Book";


test('creating an empty product card', () => {
        const cart = new Cart();
        expect(cart.items.length).toBe(0);
});


test('creating new product card', () =>{
        const cart = new Cart();
        const movie = new Movie(1, 'The Avengers', 2012, 'USA', 'Avengers Assemble!', 'fantastic', 137, 200);
        cart.add(movie);  
        //expect(cart.items.length).toBe(1);
        const result = [{
                id: 1,
                name: 'The Avengers',
                year: 2012,
                country: 'USA',
                slogan: 'Avengers Assemble!',
                genre: 'fantastic',
                duration: 137,
                price: 200,
        } ]
        expect(cart.items).toEqual(result);
});

test('creating new book', () =>{
        const cart = new Cart();
        const movie = new Book(2, 'Star CEZ','Alexandr Beljaev', 150);
        cart.add(movie);  
        const result = [{
                id: 2, 
                name: 'Star CEZ', 
                auhtor: 'Alexandr Beljaev', 
                price: 150, 
        } ]
        expect(cart.items).toEqual(result);
});

test('total sum testing', () => {
        const cart = new Cart();
        const book1 = new Book(3, 'Leviafan','James Cory', 200);
        const book2 = new Book(4, 'Rembo','David Morell', 100);
        const book3 = new Book(4, 'The Martian','Andy Weir', 300);
        cart.add(book1); 
        cart.add(book2); 
        cart.add(book3); 
        expect(cart.getTotalSumm()).toBe(600);
})

test('total sum and discount testing', () => {
        const cart = new Cart();
        const book1 = new Book(3, 'Leviafan','James Cory', 200);
        const book2 = new Book(4, 'Rembo','David Morell', 100);
        const book3 = new Book(4, 'The Martian','Andy Weir', 300);
        cart.add(book1); 
        cart.add(book2); 
        cart.add(book3); 
        expect(cart.getDiscount(10)).toBe(540);
})

test('deleting an item by id', () => {
        const cart = new Cart();
        const book1 = new Book(3, 'Leviafan','James Cory', 200);
        const book2 = new Book(4, 'Rembo','David Morell', 100);
        const book3 = new Book(5, 'The Martian','Andy Weir', 300);
        cart.add(book1); 
        cart.add(book2); 
        cart.add(book3); 
        cart.deleteId(4)
        const result = [{
                id: 3, 
                name: 'Leviafan', 
                auhtor: 'James Cory', 
                price: 200, 
        },
        {
                id: 5, 
                name: 'The Martian', 
                auhtor: 'Andy Weir', 
                price: 300, 
        }]
        expect(cart.items).toEqual(result);
        //expect(cart.items.length).toBe(2);
})