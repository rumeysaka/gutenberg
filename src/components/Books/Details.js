import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Details() {
  let { id } = useParams();
  
  return (
    <div>Details for {id}</div>
  )
}
