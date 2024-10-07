import { NextResponse } from 'next/server';
import dbClient from '../../../db/dbClient';

export async function GET() {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('product');

        const products = await collection.find({}).toArray();

        return NextResponse.json({
            message: "Products fetched successfully",
            data: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error); // Log the error for debugging
        return NextResponse.json({
            message: "Something went wrong",
        }, { status: 500 }); // Set a 500 status code for server errors
    }
}
