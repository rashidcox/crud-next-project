import { createUser } from '@/lib/actions';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form action={createUser}>
                <div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">

                        <legend className="fieldset-legend">Add User</legend>

                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full" placeholder="Name" />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Password" />
                        <button className="btn btn-neutral mt-4" type="submit" >create user</button>
                        <Link href={'/users'}><button className="btn btn-error w-full mt-2">cancel</button></Link>
                    </fieldset>
                </div>
            </form>

        </div>
    );
};

export default page;