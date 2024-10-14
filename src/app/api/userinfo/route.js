import { NextResponse } from "next/server";
import dbClient from "../../../db/dbClient";
import bcrypt from 'bcrypt';

export async function POST(req) {
    try {
        const client = await dbClient;
        const db = client.db('bicroy_com');
        const collection = db.collection('users');

        // Extract data from request body
        const body = await req.json();
        const { name, email, password, confirmPassword, phone, location } = body;

        // Check if the user already exists
        const existingUser = await collection.findOne({ email });

        if (existingUser) {
            return NextResponse.json({
                message: "User already signed up"
            }, { status: 400 });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return NextResponse.json({
                message: "Passwords do not match"
            }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Insert the user data with hashed password (confirmPassword not stored)
        await collection.insertOne({
            name,
            email,
            phone,
            location,
            password: hashedPassword,
            acountCreateDate: new Date(),
        });

        return NextResponse.json({
            message: "User inserted successfully"
        }, { status: 201 });

    } catch (error) {
        console.error("Error in POST API:", error);
        return NextResponse.json({
            error: "Failed to insert data",
        }, { status: 500 });
    }
}
