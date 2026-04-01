import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        {id:1, title: 'The Shawshank Redemption', releaseDate: '1994'},
        {id:2, title: 'The Godfather', releaseDate: '1972'},
        {id:3, title: 'The Dark Knight', releaseDate: '2008'},
        {id:4, title: 'Pulp Fiction', releaseDate: '1994'},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("-------------")
    }

    return <div className="Home">

        <form onSubmit={handleSearch} className="searh-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery)
            && (<MovieCard key={movie.id} movie={movie} />) 
            )}
        </div>

    </div>
}

export default Home;