import { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

export default function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

  
    useEffect(() => {
      setLoading(true);
      fetch('https://gutendex.com/books')
        .then((res) => res.json())
        .then((data) => setBooks(data.results))
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    console.log(books)
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(books)) {
        return <p>There was an error loading your data!</p>;
      }
    return (
      <>
       {books.map((item) => (
          
            <Card key={item.id} style={{ width: '10rem'}}>
            <Card.Img variant="top" src={"https://www.gutenberg.org/cache/epub/" +item.id+ "/pg"+ item.id+ ".cover.medium.jpg"} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.bookshelves} 
              </Card.Text>
              <Button variant="primary">Fav</Button>
            </Card.Body>
          </Card>
      //  <Cards key={item.id} title={data.title}/>
         ))}
       </>
    );
  }
