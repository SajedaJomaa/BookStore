
import React, { createContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [purchasedBooks, setPurchasedBooks] = useState(() => {
        return JSON.parse(localStorage.getItem('purchasedBooks')) || [];
    });

    useEffect(() => {

        try {
            localStorage.setItem('purchasedBooks', JSON.stringify(purchasedBooks));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, [purchasedBooks]);

    const buyBook = (book) => {
        setPurchasedBooks((prevBooks) => {
            const existingBook = prevBooks.find(item => item.id === book.id);
            if (existingBook) {
                return prevBooks.map(item =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevBooks, { ...book, quantity: 1 }];
        });
    };



    return (
        <BookContext.Provider value={{ purchasedBooks, buyBook }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContext;
