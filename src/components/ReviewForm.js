import React, {useState} from 'react'
import StarRating from './StarRating'

const ReviewForm = (props) => {
  const {handleSubmit,index}= props
  const [movieReview,setMovieReview]=useState('')

  const handleRatingsReview = (e) =>{
    const reviewText = e.target.value
    setMovieReview(reviewText)
  }
  const handleSub =(e, movieReview) =>{
    e.preventDefault()
    setMovieReview('')
    handleSubmit(movieReview,index)
  }

  
  return (
    <div>
    <form>
    <textarea value={movieReview} id="w3review" name="w3review" rows="4" cols="50" placeholder='Tell us what you think' onChange={(e)=> handleRatingsReview(e)}></textarea>
      <input type="submit" value="Submit" onClick={(e)=> handleSub(e,movieReview)} />
    </form>
  </div>
  )
}

export default ReviewForm
