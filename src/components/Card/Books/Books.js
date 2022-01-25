import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


export default function Books() {
  
  const [books, setBooks] = useState([])

const getApi = () => {
      fetch("https://gutendex.com/books/")
          .then(response => response.json())
          .then(json => {
                console.log(json)
                setBooks(json)
            })
  const itemsArr = books.split(',');
  console.log(books)
  }

  useEffect(()=>{
      getApi();
  }, [])

  return(<div>
      {/* <pre>{JSON.stringify(books,null,2)}</pre> */}
      <div>
          <ul>
              {books.results.map((item)=>{
                  return(
                  <div key={books.title}>
                      <h2>{item.title}</h2></div>)
              })}
          </ul>
      </div>
      </div>);
}
