'use client';
import Link from 'next/link';
import React from 'react';

const UserTable = ({ user, deleteUser }) => {
    const handleDelete = async (id) => {
        await deleteUser(id);
    }
    return (
        <div className="flex justify-center items-center h-screen">

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td className="flex gap-2">
                                    <Link href={`/users/${user._id}`}><button className="btn btn-primary">View</button></Link>
                                    <Link href={`/users/${user._id}/edit`}><button className="btn btn-warning">Edit</button></Link>

                                    <button className="btn bg-error" onClick={() => document.getElementById('my_modal_1').showModal()}>Delete</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hi there!</h3>
                                            <p className="py-4">Are you sure you want to delete?</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <div className="modal-action flex gap-2">
                                                        <button className="btn">Close</button>
                                                    <button className="btn btn-error" onClick={() => handleDelete(user._id)}>Delete</button>
                                                    </div>
                                                    
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;