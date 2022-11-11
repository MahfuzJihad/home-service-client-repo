import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Loggoogle = () => {

    const { providerLogin } = useContext(AuthContex);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="mt-6">
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary">Login with Google</button>
        </div>
    );
};

export default Loggoogle;