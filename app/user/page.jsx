
// this is  client component cuz we are using the useEffect and useState hooks
// to fetch and manage data from an external API
// we are using axios to make HTTP requests
//in the next js  is a ssr framework by default
// so the browser get direclty the html page along with all the recquired data
// but in some cases we need to fetch data on the client side after the initial page load
// for example when we need to show user specific data after they log in
// or when we need to fetch data that changes frequently and we want to keep it up to date without reloading the entire page

//above scenrio  then use useEffect otherwise use servercomponent to fetch the data in which we dont use useEffect
/// and the data is fetched on the server before sending the html to the client
import axios from 'axios';
import { useEffect, useState } from 'react';


// here we fetch the data

export default async function UserPage(){
    // const [loading,setLoading]=useState(true);
    // const [user,setUser]=useState(null);
    // const [error,setError]=useState(null);

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/users/1')
    //     .then(response=>{
    //         setUser(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error=>{
    //         setError(error.message);
    //         setLoading(false);
    //     });
    // }, [])

    const response =await axios.get('http://localhost:3000/api/v1/user/details');
    const user=response.data;

    return(
        <div>
            <h1 className="text-2xl font-semibold mb-4 text-center">User Information</h1>
            {loading && <p>Loading user data...</p>}
            {error && <p className="text-red-500">Error: {error}</p>
                    }
            {user && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                </div>
            )}
        </div>
    )
}
// this is not right way to fetch data in next js this work but we loose the benifit og using the next js
// we should use server component to fetch the data on the server side
// then send the html to the client with the data already populated with all the reuqired data need to show on
// the page
// this is just for understanding the client side data fetching in next js
// in real world application we should use server component to fetch the data
// also we can use SWR or React Query for client side data fetching and caching
// they provide better user experience and performance for client side data fetching
