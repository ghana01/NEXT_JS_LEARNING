

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req) {
    const data = await req.json();
    prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
        }
    })
    console.log(data);
    return NextResponse.json({
        message: "u have ben signup up"
    });
}