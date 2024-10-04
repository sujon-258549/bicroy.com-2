import { NextResponse } from "next/server";
import dbClient from "../../../db/dbClient";
const bcrypt = require('bcrypt');

export async function POST(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('users');

        // Extract data from request body
        const body = await req.json();
        const existingUser = await collection.findOne({ email: body.email });

        const hashpassword = bcrypt.hashSync(body.password, 10);
        const hashconfirmPassword = bcrypt.hashSync(body.confirmPassword, 10);



        if (!existingUser) { // Check if user does not exist
            await collection.insertOne({...body,password:hashpassword, confirmPassword:hashconfirmPassword}); // Insert the user

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
