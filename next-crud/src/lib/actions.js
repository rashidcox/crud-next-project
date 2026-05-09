import { revalidatePath } from "next/cache";


// delete user action
export const deleteUser = async (id) => {
    'use server';
    const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: 'DELETE',
    });
    const data = await res.json();
    revalidatePath('/users');
    return data;
}