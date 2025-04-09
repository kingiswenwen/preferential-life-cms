import {neon} from '@neondatabase/serverless';

async function getData() {
    const sql = neon(process.env.DATABASE_URL || '');
    const response = await sql`SELECT version()`;
    return response[0].version;
}


export default async function handler(req: any, res: any) {
    try {
        const data = await getData();
        res.status(200).json({message: 'Data fetched successfully', data});
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({error: 'Failed to fetch data'});
    }
}
