
import UserTable from '@/components/UserTable';
import { deleteUser } from '@/lib/actions';
import { getUsers } from '@/lib/Data';
import Link from 'next/link';
import React from 'react';

const page = async () => {
    const userr = await getUsers();

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold text-center">User Management: {userr.length}</h2>
                <UserTable user={userr} deleteUser={deleteUser}/>
            </div>
        </div>
    );
};

export default page;