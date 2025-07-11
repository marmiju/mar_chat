import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
    const session =await getServerSession(authOptions)
    console.log(session?.user.token)

    return (
        <div>
            <p>{`welcome ${session?.user?.name}`}</p>
            <p>{`welcome ${session?.user?.email}`}</p>
            <p>{`admin ${session?.user?.isAdmin ? 'admin' : 'client'}`}</p>
            <p>{`admin ${session?.user?.token}`}</p>
        </div>
    );
};

export default page;