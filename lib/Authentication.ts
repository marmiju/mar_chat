
export const LogIn = async ({ email, password }: { email: string, password: string }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const result: { username: string, isAdmin: boolean, email: string, token: string } = await response.json()
    const { email: string, username, isAdmin, token } = result;

    localStorage.setItem("userinfo", JSON.stringify({ email: string, username, isAdmin, token, }));
    return result
}
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

