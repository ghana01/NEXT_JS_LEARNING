

import Link from "next/link";

export default function Home() {


  return (
   <div className="text-lg w-screen h-screen flex items-center justify-center">
    <div>
       Todo application built with Next.js, Tailwind CSS, and TypeScript.
        <br/>

        


            
             <Link href="auth/sigin" className="text-blue-500 hover:underline">sign in </Link>
             <br/>
            <Link href="auth/signup" className="text-blue-500 hover:underline">sign up </Link>
        </div>
        

   </div>
  );
}
