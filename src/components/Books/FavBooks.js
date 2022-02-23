import React, { useContext } from 'react'
import { BooksContext } from './../../BooksContext';

export default function FavBooks() {
    
    const { books, setBooks, favList, setFavList } = useContext(BooksContext);
    
  return (
    <div>FavBooks</div>
  )
}
