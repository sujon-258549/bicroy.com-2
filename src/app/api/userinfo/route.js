import { NextResponse } from "next/server";
import dbClient from "../../../db/dbClient";

export async function POST(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('users');

        // Extract data from request body
        const body = await req.json();
        const existingUser = await collection.findOne({ email: body.email });

        if (!existingUser) { // Check if user does not exist
            await collection.insertOne(body); // Insert the user

            return NextResponse.json({
                message: "User inserted successfully"
            });
        } else {
            return NextResponse.json({
                message: "User already signed up" // Correct spelling of "already"
            });
        }



    } catch (error) {
        console.error("Error in POST API:", error);
        return NextResponse.json({
            error: "Failed to insert data",
        }, { status: 500 });
    }
}
