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

export const sortFilms = (films, field) => {
    films.sort(function(a, b) {
        switch(field) {
            case 'rating':
                return b.vote_average - a.vote_average;
            case 'date':
                return Number(b.release_date.split('-')[0]) - Number(a.release_date.split('-')[0]);   
            default:
                console.warn(`sort by ${field} is not available`);
                return films;     
        }
    });
    return films;
}