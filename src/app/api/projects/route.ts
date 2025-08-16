// import { VercelProjectsResponse } from "@/types/vercel";
// import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";



// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const response = await fetch('https://api.vercel.com/v9/projects', {
//             headers: {
//                 Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
//             },
//         })

//         if (!response.ok) {
//             throw new Error(`Vercel API Error: ${response.statusText}`)
//         }

//         const data:VercelProjectsResponse = await response.json();
//         console.log(data);

//         res.status(200).json(data.projects); // Return the projects array

//     } catch (error: any) {
//         res.status(500).json({ error: error.message || 'Internal Server Error' });
//     }
// }

export async function GET() {
    const token = process.env.VERCEL_TOKEN;

    if (!token) {
        return NextResponse.json({error: 'Vercel token is not defined'}, {status: 500});
    }

    try {
        const response = await fetch('https://api.vercel.com/v9/projects', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    
        if (!response.ok) {
            const err = await response.text();
            return NextResponse.json({error: err}, {status: response.status});
        }

        const data = await response.json();
        return NextResponse.json(data.projects); // Return the projects array

    } catch (error: any) {
        return NextResponse.json({error: error.message || 'Internal Server Error'}, {status: 500});
    }
}