import React from 'react'

export default function Cards() {
  return (
    <div>
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

    ))}</div>
  )
}
