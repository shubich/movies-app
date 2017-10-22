export const sortFilms = (films, field) => {
    films.sort(function(a, b) {
        switch(field) {
            case 'rating':
                return b.vote_average - a.vote_average;
            case 'date':
                return Number(b.release_date.split('-')[0]) - Number(a.release_date.split('-')[0]);     
            default:
                return 1;
        }
    });
    return films;
}

export const checkDetails = (details) => {
    details.vote_average = (details.vote_average < 10) 
        ? details.vote_average.toFixed(1) 
        : details.vote_average;

    details.genres = details.genres && details.genres
        .map((genre) => genre.name).join(', ');

    details.release_date = (details.release_date) 
        ? details.release_date
        : null;

    details.runtime = (details.runtime) 
        ? details.runtime + ' min'
        : null;

    return details;
}

export const encodeQueryData = (data) => {
    let query = [];
    for (let item in data) {
        query.push(`${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`);
    }
    return query.join('&');
}