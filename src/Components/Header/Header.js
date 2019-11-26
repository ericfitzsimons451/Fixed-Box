import React from 'react'

export const Header = (props) => {
  return (
    <div className="Header">
      <h2>{props.film.title}</h2>
      <h3>{props.film.opening_crawl}</h3>
      <h6>{props.film.release_date}</h6>
    </div>
  )
}

export default Header