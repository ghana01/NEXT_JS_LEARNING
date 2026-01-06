"use client"
import axios from "axios";
import { useState } from "react";
export default function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <div className="border p-4 ">
                <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    className="mt-2"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className=" color-red-500"
                    onClick={() => {
                      axios.post("http://localhost:3000/api/signin", {
                            username,
                            password,
                        });
                    }}
                >
                    Signin
                </button>

            </div>
        </div>
    );
}

