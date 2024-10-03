import { NextResponse } from "next/server";

export async function GET(rq) {
    return NextResponse.json({
        "message": "This is Gate Api"
    })
}