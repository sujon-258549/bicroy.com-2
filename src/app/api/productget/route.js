import { NextResponse } from 'next/server';
import dbClient from '../../../db/dbClient';

export async function GET(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('product');

        const url = new URL(req.url);
        const category = url.searchParams.get('category');
        let query = {};

        if (category) {
            query = { category: category };
        }

        const products = await collection.find(query).toArray();

        return NextResponse.json({
            message: "Products fetched successfully",
            count: products.length, // Include count of fetched products
            data: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error); // Log the error for debugging
        return NextResponse.json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error", // Provide error message if safe
        }, { status: 500 }); // Set a 500 status code for server errors
    }
}
