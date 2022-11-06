import React from 'react'

const MovieList = (props) => {
    const {moviePoster, index} = props
return (
            <img  key={index+moviePoster} src = {moviePoster} alt = 'movieposter'/>
    )
}
export default MovieList