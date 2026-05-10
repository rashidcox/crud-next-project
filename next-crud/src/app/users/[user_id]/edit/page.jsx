

import { updateUser } from '@/lib/actions';
import { getUser } from '@/lib/Data';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    const { user_id } = await params;
    const user = await getUser(user_id);

    const updateUserWapper = async(FormData) => {
        'use server';
        return updateUser(user_id, FormData);
    }
   return (
        <div className="flex justify-center items-center h-screen">
            <form  action={updateUserWapper}>
                <div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">

                        <legend className="fieldset-legend">update User</legend>

                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full" defaultValue={user.name} />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" defaultValue={user.email} />

                        <label className="label">Password</label>
                        <input name="password" type="text" className="input w-full" defaultValue={user.password} />
                        <button className="btn btn-neutral mt-4" type="submit" >update</button>
                        <Link href={'/users'}><button className="btn btn-error w-full">back</button></Link>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default page;