import React, { useState, useEffect, useContext } from "react";
import { Card, Button } from "react-bootstrap";
import "./Books.css";
import { Link, useNavigate, useParams } from 'react-router-dom'
import Deneme from "./Deneme";
import { LoginContext } from "../../LoginContext";
import { BooksContext } from "../../BooksContext";

export default function Books(props) {
  
  const { user, setUser } = useContext(LoginContext);

  const { books, setBooks, favList, setFavList } = useContext(BooksContext);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  // const [fav, setFav] = useState(null)
  // const [favList, setFavList] = useState([])


  const { onHandleFav } = props;

  function handleFav(id){
    onHandleFav(id)
  }

  useEffect(() => {
    setLoading(true);
    fetch("https://gutendex.com/books")
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
    {/* <BooksContext.Provider value={{books}}> */}
      {/* <Deneme books={books} />
       */}
      <h2 className="d-flex justify-content-center text-light my-4">Books</h2>

      {books.map((item) => (
        <Card className="card col-2" key={item.id} style={{ width: "25rem" }}>
          <Card.Img
            className="img"
            variant="top"
            src={
              "https://www.gutenberg.org/cache/epub/" +
              item.id +
              "/pg" +
              item.id +
              ".cover.medium.jpg"
            }
          />
          <Card.Body>
            <Card.Title className="title">{item.title}</Card.Title>
            {/* <Card.Text className="author">{item.id} </Card.Text> */}
            <Card.Text className="author">{item.authors[0].name} </Card.Text>
            <Card.Text className="text">{item.bookshelves[0]}</Card.Text>
            <div className="button-group d-flex justify-content-center align-items-center">
              {/* <Link to={`/profile/${item.id}`}>
                <Button className="btn btn-sm details">Details</Button>
              </Link>
              ; */}
                {/* <Button onClick={()=>{navigate(`/profile/${item.id}`)}} className="btn btn-sm details">Details</Button> */}
              <Button href={`/profile/${item.id}`} className="btn btn-sm details">Details</Button>

              <Button
                className="oku-btn btn btn-sm"
                href={
                  "https://www.gutenberg.org/files/" +
                  item.id +
                  "/" +
                  item.id +
                  "-h/" +
                  item.id +
                  "-h.htm"
                }
              >
                Oku
              </Button>
              {user ? <Button className="btn btn-sm" onClick={()=>onHandleFav(item.id)} >Fav</Button> : <div></div>}
            </div>
          </Card.Body>
        </Card>

      ))}
    </>
  );
}
