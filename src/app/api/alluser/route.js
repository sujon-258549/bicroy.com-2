
import { NextResponse } from 'next/server';
import dbClient from '../../../db/dbClient';

export async function GET() {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('users');

        const allUsers = await collection.find({}).toArray();

        return NextResponse.json({
            message: "Fetched all users successfully",
            data: allUsers
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({
            message: 'Something went wrong while fetching users',
        }, { status: 500 });
    }
}


// import { NextResponse } from 'next/server';
// import dbClient from '../../../db/dbClient';

// export async function GET() {
//     try {
//         const client = await dbClient;
//         const db = client.db('bicroy_com');
//         const collection = db.collection('users');

//         const products = await collection.find({}).toArray();

//         return NextResponse.json({
//             message: "Products fetched successfully",
//             data: products,
//         });
//     } catch (error) {
//         console.error("Error fetching products:", error); // Log the error for debugging
//         return NextResponse.json({
//             message: "Something went wrong",
//         }, { status: 500 }); // Set a 500 status code for server errors
//     }
// }
