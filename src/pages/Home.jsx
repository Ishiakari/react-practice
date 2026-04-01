import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        {id:1, title: 'The Shawshank Redemption', releaseDate: '1994'},
        {id:2, title: 'The Godfather', releaseDate: '1972'},
        {id:3, title: 'The Dark Knight', releaseDate: '2008'},
        {id:4, title: 'Pulp Fiction', releaseDate: '1994'},
    ]

    const handleSearch = () => {

    }

    return <div className="Home">

        <form onSubmit={handleSearch} className="searh-form">
            <input type="text" placeholder="Search for movies..." 
            className="search-input" />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>

    </div>
}

export default Home;