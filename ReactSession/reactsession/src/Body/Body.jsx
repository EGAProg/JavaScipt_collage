import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BodyCss from './Body.module.css';

const Body = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Отрисовка фильмов
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                let url;
                if (!searchQuery) {
                    // Отрисовка при пустом поиске
                    url = `http://kinopoiskapiunofficial.tech/api/v2.2/films/top?page=${currentPage}`;
                } else {
                    // Отрисовка при активном поиске
                    url = `http://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${encodeURIComponent(searchQuery)}&page=${currentPage}`;
                }

                const response = await axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-KEY': 'efbddea9-b642-4e34-85bd-c635514825e0', // API KEY
                    },
                });
                console.log(response);
                setMovies(response.data.films);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [searchQuery, currentPage]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;
    

    // Переход по страницам
    const goToNextPage = () => setCurrentPage((page) => page + 1);
    const goToPreviousPage = () => setCurrentPage((page) => page - 1);
    
    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1); // Начало отрисовки со страницы 1
        setSearchQuery(e.target.elements.search.value.trim());
    };

    return (
        <div className={BodyCss.wrapper}>
            <h1>Кинопоиск</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="search"
                    placeholder="Найти фильм"
                    className={BodyCss.searchFilm}
                />
                    <button type="submit" className={[BodyCss.btn, BodyCss.searchBtn].join(" ")}>Поиск</button>
            </form>
            <div className={BodyCss.Page}>
                {movies.map((movie) => (
                    <div key={movie.filmId} className={BodyCss.innerFilm}>
                        <h3 className={BodyCss.filmName}>{movie.nameRu || movie.nameEn}</h3>
                        <img src={movie.posterUrlPreview} alt={movie.nameRu || movie.nameEn} />
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={goToPreviousPage} disabled={currentPage === 1} className={[BodyCss.btn, BodyCss.pageBtn].join(" ")}>Предыдущая</button>
                <button onClick={goToNextPage} className={[BodyCss.btn, BodyCss.pageBtn].join(" ")}>Следующая</button>
            </div>
        </div>
    );
};

export default Body;