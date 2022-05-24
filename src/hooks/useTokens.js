import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect( () => {
        console.log('useToken user-', user);
        const email = user?.user?.email;
        const currentUSer = {email: email};

        if(email){
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(currentUSer)
            })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken= data.token;
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken);
            })
        }

    },[user]);
    return [token];
}

export default useToken;