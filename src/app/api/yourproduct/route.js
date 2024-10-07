import { NextResponse } from 'next/server';
import dbClient from '../../../db/dbClient';

export async function GET(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('product');

        // Extract query parameters using URL
        const url = new URL(req.url);
        const email = url.searchParams.get('email');
        let query = {};

        // If an email is provided, use it in the query
        if (email) {
            query = { email: email };
        }

        // Fetch the products from the collection
        const products = await collection.find(query).toArray();

        // Return the response
        return NextResponse.json({
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error);

        // Return a 500 status code if an error occurs
        return NextResponse.json({
            message: "Something went wrong",
        }, { status: 500 });
    }
}
