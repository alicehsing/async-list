// this key is the 'anonymous key'. it's okay to expose it publicly as long as we setup 'rls' security in our database
// a key is kind of like a password
// this was assigned to us by supabase for this project
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

// similarly, here's the url supabase assigned us for our database
const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';

// finally, here's the client object. this object is how we will get data from our database
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCars() {
    const response = await client
        .from('cars')
        .select(`
        *,
        makes (*)
    `);

    console.log(response.data);
    return response.data;
}
