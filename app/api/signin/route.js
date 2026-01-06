
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export  async  function POST(req){
    const data =await  req.json();
    
    console.log("Signin data received:", data);

    return  NextResponse.json({
        
        message: " u have Signin "
    })
}