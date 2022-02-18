import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import "./Books.css";
import Deneme from './Deneme';

export default function Books(props) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const {user}= props
  
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

    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(books)) {
        return <p>There was an error loading your data!</p>;
      }
    return (
      <>
      <Deneme books={books}/>
      <h2 className='baslık'>Books</h2>

       {books.map((item) => (
            <Card className='card col-2' key={item.id} style={{ width: '25rem'}}>
            <Card.Img className='img' variant="top" src={"https://www.gutenberg.org/cache/epub/" +item.id+ "/pg"+ item.id+ ".cover.medium.jpg"} />
            <Card.Body>
              <Card.Title className='title'>{item.title}</Card.Title>
              <Card.Text className='author'>{item.authors[0].name} </Card.Text>
              <Card.Text className='text'>{item.bookshelves[0]} 
              </Card.Text>
              
              <Button className='oku-btn btn btn-sm' href={"https://www.gutenberg.org/files/"+item.id+"/"+item.id+"-h/"+item.id+"-h.htm"}>Oku</Button>
             {user ? <Button className="btn btn-sm">Fav</Button>: <div></div>}
            </Card.Body>
          </Card>
      //  <Cards key={item.id} title={data.title}/>
         ))}
       </>
    );
  }
