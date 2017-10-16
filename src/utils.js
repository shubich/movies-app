export const getCurrentFilm = (filmId, films) => {
    const isCurFilm = (film, index, array) => {
        return film.id == filmId;
    };
    const currentFilm = films.find(isCurFilm);    
    return currentFilm;
}

export const getVisibleFilms = (filmId, films) => {
    if (!filmId) {
        return films;
    } else {
        let visibleFilms = films.filter(film => 
            film.id != filmId
        );
        return visibleFilms;
    }
}
