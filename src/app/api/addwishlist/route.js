
import { NextRequest } from 'next/server';
import dbClient from '../../../db/dbClient'

export async function POST(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('wishlist')

        const wishlistData = await req.json();
        await collection.insertOne(wishlistData)

        return NextRequest.json({
            message: "wishlist added success"
        })
    } catch{
        return NextRequest.json({
            message: "sumthing Wrong"
        })
    }
}
