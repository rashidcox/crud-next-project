
import UserTable from '@/components/UserTable';
import { createUser, deleteUser } from '@/lib/actions';
import { getUsers } from '@/lib/Data';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const userr = await getUsers();
    return (
        <div>
            <div>
                <div className="flex gap-4 justify-center items-center mt-5">
                    <h2 className="text-2xl font-bold text-center"><Link href={'/users/addData'}><button className="btn btn-primary">➕ Add User</button></Link>  User Management: {userr.length} </h2>
                </div>
                <UserTable user={userr} deleteUser={deleteUser} />
            </div>
        </div>
    );
};

export default page;