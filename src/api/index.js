const API_KEY = '595f6d4c932627df7eb7d5c2f27a7e40';

export default {
    getFilms(params) {
        switch (params.searchFilter) {
            case 'title':
                return '...';
            case 'director':
                return '...';
        }
    },
    getFilmDetails(params) {
        // getFilmById
    }
}