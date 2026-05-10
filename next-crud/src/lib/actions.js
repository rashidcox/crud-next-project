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

// add user action
export const createUser = async (formData) => {
    'use server';
    const newUser = Object.fromEntries(formData.entries());
    const res = await fetch('http://localhost:4000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    const user = await res.json();
    revalidatePath('/users');
    return user;    
}

// update user action
export const updateUser = async (id, formData) => {
    'use server';
    const updatedUser = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
    });
    const user = await res.json();
    revalidatePath('/users');
    return user;    
}   
