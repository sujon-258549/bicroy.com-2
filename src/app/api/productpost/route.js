
import { NextRequest } from 'next/server';
import dbClient from '../../../db/dbClient'

export async function POST(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('product')

        const productData = await req.json();
        await collection.insertOne(productData)

        return NextRequest.json({
            message: "product added success"
        })
    } catch(error){
        return NextRequest.json({
            message: "sumthing Wrong"
        })
    }
}
