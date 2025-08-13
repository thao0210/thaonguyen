const host = import.meta.env.VITE_API_URL + '/api';

const urls = {
    LIST: `${host}/items`,
    SEARCH_ITEMS: `${host}/search-items`,
    
    CONTACT: `${host}/contact`,
}

export default urls;