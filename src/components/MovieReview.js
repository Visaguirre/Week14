import React, {useEffect, useState} from 'react'
import MovieList from "./MovieList";
import ReviewForm from "./ReviewForm";
import StarRating from "./StarRating";


const initialMovies =[
{
    "Title": "How the Grinch Stole Christmas!",
    "Year": "1966",
    "imdbID": "tt0060345",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzBiMjVlYmYtYmE3NS00MGExLTg4MjUtYmY2Y2U0MWQ0MzQ3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
"reviews": [],
"StarRating":[]
},
{
    "Title": "Elf",
    "Year": "2003",
    "imdbID": "tt0319343",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
"reviews": [],
"StarRating":[]

},
{
    "Title": "The Nightmare Before Christmas",
    "Year": "1993",
    "imdbID": "tt0107688",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg",
"reviews": [],
"StarRating":[]
},
];
    const MovieReview = () => {
        const [movies,setMovies] = useState(initialMovies)
        const handleSubmit = (review,index) =>{
        let newArray=[...movies]
        newArray[index].reviews = [...movies[index].reviews,review]
    setMovies(newArray)
}

    return (
        <div style={{display:'flex'}}>
        {movies.map((movie,index) =>
        <div key={index+movie}>
        <MovieList moviePoster={movie.Poster} index={index}/>
        <StarRating handleSubmit={handleSubmit} index={index}/>
        <ReviewForm handleSubmit={handleSubmit} index={index} />
        
        {movie.reviews &&
        <>
            {movie.reviews.map((review,index) =>
            <p key={index+review}> {review}</p>)
}
        </>
}
        </div>
) }
</div>
);
};

export default MovieReview