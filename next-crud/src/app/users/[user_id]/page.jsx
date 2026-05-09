

import { getUser } from '@/lib/Data';
import Link from 'next/link';
import React from 'react';

const page = async({params}) => {
    const {user_id} = await params;
    const user = await getUser(user_id);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="user-details shadow-md bg-base-100 p-4 rounded-sm ">
                <p>Name: {user.Name}</p>
                <p>Email: {user.Email}</p>
                <p>Age: {user.age}</p>
                <p>Country: {user.country}</p>
                <p>City: {user.city}</p>
                <Link href={'/users'}><button className="btn btn-error">back</button></Link>
            </div>
        </div>
    );
};

export default page;