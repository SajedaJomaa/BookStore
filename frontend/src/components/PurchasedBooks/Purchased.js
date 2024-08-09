
import React, { useContext } from 'react';
import BookContext from '../../contexts/BookContext.js';
import classes from './Purchased.module.css';
import defaultImage from "../../assets/139110060-isometric-design-of-books-and-coffee-mug-over-white-background-vector-illustration-removebg-preview.png";

export default function Purchased() {
    const { purchasedBooks } = useContext(BookContext);

    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.siteName}>Design Books</h1>

            </div>
            <section className={classes.purchSection}>
                <ul className={classes.purchul}>
                    {purchasedBooks.length > 0 ? (
                        purchasedBooks.map((book, index) => {
                            return (
                                <li key={index}>
                                    <button className={classes.purchdata}>
                                        <img
                                            src={book.volumeInfo?.imageLinks?.thumbnail || { defaultImage }}
                                            alt={book.volumeInfo?.title || 'No Title'}
                                            className={classes.bookimage}
                                        />
                                        <p>{book.volumeInfo.title}</p>
                                    </button>
                                </li>
                            );
                        })
                    ) : (
                        <p>No books purchased yet.</p>
                    )}
                </ul>
            </section>
        </>
    );
}
