import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BooksContext } from '../../BooksContext';

export default function Details() {
  let { id } = useParams();
  const { books, setBooks } = useContext(BooksContext)
  const [book, setBook] = useState([])
  

  // function findArrayElementByTitle(books, id) {
  //   const updatedBook = books.find((item) => item.id === id)
  //   setBook(updatedBook)
  // }

  // useEffect(() => {
  //   findArrayElementByTitle()
  // }, [])
  const updatedBook = books.find((item) => {
    return item.id===id
  })
  setBook(updatedBook)
  console.log(book)
  
  return (
    <div className='container d-flex justify-content-center'>
      <div>Details for {id}
        <div>
          <div></div>
        {book.title}  
        </div>
      </div></div>
  )
}
