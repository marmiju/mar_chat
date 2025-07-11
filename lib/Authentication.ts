

export const LogIn = async ({ email, password }: { email: string, password: string }) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const result = await response.json();
        console.log("Api response ", result)
        return result; 

    } catch (err) {
        console.error("Login Error:", err);
        return null;
    }
};

export const SignUp = async ({ email, password, username }: { email: string, password: string, username: string }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password, username })
    });

    const result = await response.json()
    alert(result.message)
}

