// this key is the 'anonymous key'. it's okay to expose it publicly as long as we setup 'rls' security in our database
// a key is kind of like a password
// this was assigned to us by supabase for this project
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzkzMywiZXhwIjoxOTU1MDgzOTMzfQ.EBPUcU_WWpLifNiYHK0-7lDB2fZtodlhB2Yb7rOSIek';

// similarly, here's the url supabase assigned us for our database
const SUPABASE_URL = 'https://knhiasotugxozbbkbqrw.supabase.co';

// finally, here's the client object. this object is how we will get data from our database
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCandies() {
    const response = await client
        .from('candies')
        .select()
        .order('id');
        
    return response.data;
}

export async function getPlants() {
    const response = await client
        .from('house_plants')
        .select()
        .order('id');

    return response.data;
}

export async function getShows() {
    const response = await client
        .from('Netflix TV Shows')
        .select()
        .order('id');

    return response.data;
}

export async function getFoods() {
    const response = await client
        .from('My Favorite Spicy Food')
        .select()
        .order('id');

    return response.data;
}

