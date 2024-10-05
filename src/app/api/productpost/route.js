
import { NextRequest } from 'next/server';
import dbClient from '../../../db/dbClient'

export async function POST(req) {
    const client = await dbClient;
    const db = client.db('bicroy_com');
    const collection = db.collection('product')

    const productData = req.json();
    await collection.insertOne({productData})

    return NextRequest.json({
        message: "product add success"
    })
}