const handleDate = (str) => {
    let [year, month, day] = str.split('-');
    let date = new Date(year, month-1, day, 1);
    let options = { year: 'numeric', month: 'short', day: 'numeric' };

    return date.toLocaleString('en-US', options);
}

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

export const handleFilmDetails = (details) => {
    details.vote_average = (details.vote_average < 10) 
        ? details.vote_average.toFixed(1) 
        : '';

    details.genres = details.genres && details.genres
        .map((genre) => genre.name).join(', ');

    details.release_date = (details.release_date) 
        ? details.release_date.split('-')[0]
        : '';

    details.runtime = (details.runtime) 
        ? details.runtime + ' min'
        : '';

    return details;
}

export const handlePersonDetails = (details) => {
    details.birthday = (details.birthday)
        ? 'Born: ' + handleDate(details.birthday)
        : '';
    details.deathday = details.deathday
        ? 'Died: ' + handleDate(details.deathday)
        : '';
    details.place_of_birth = (details.place_of_birth)
        ? ' in ' + details.place_of_birth
        : ''; 
    details.popularity = (details.popularity)
        ? Math.round(details.popularity)
        : '';


    return details;
}

export const encodeQueryData = (data) => {
    let query = [];
    for (let item in data) {
        query.push(`${encodeURIComponent(item)}=${encodeURIComponent(data[item])}`);
    }
    return query.join('&');
}