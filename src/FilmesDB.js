const API_BASE = 'https://filmes-db-rust.vercel.app';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'all-films',
                title: 'Films',
                items: await basicFetch('/filmesDB.json')
            },
        ];
    }
}