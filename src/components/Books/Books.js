import { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Books() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

  
    useEffect(() => {
      setLoading(true);
      fetch('https://gutendex.com/books')
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(data)) {
        return <p>There was an error loading your data!</p>;
      }
    return (
      <>
       <ul>
       {data.map((item) => (
          <li key={item.id}>{item.title}</li>
      //  <Cards key={item.id} title={data.title}/>
         ))}
       </ul>
       </>
    );
  }
