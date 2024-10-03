import "./MoviesDetails.css";
import  useFetch  from '../Hooks/useFetch.js';
import { useParams } from 'react-router-dom'

function MoviesDetails() {
    const {id} = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    const {data: details, isLoading, error} = useFetch(url)
    console.log(details);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

   
    if (!details) {
        return <div>No movie details available</div>;
    }


    return (
<div className='movie-detail'>
        <h2>{details.title}</h2>
    <div className='backdrop'>
        <img className="image" src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}/>
        <div className="allDescription">

            <div className="description">
            <h3 className="overviewTitle">Overview:</h3>
            <p className="overviewText">{details.overview}</p>
            </div>

            <div className="ratings">
            <h3 className="ratingsTitle">Ratings:</h3>
            <p className="ratingsText">{details.vote_average.toFixed(1)}</p>
            </div>
            
        </div>
    </div>
</div>

    );

}

export default MoviesDetails; 
