import { useState, useEffect } from 'react';
const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();
export const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = () => {
        auth.signInWithPopup(provider);
        setLoading(true);
    };

    const logout = () => {
        setLoading(true);
        auth.signOut()
            .then(() => {})
            .catch(() => {});
    };

    useEffect(() => {
        auth.onAuthStateChanged(
            user => {
                setLoading(false);
                if (user) {
                    setAuthenticated(user);
                } else {
                    setAuthenticated(null);
                }
            },
            err => {
                console.log(err);
                setLoading(false);
            }
        );
    }, []);

    return { login, user: authenticated, loading, logout };
};
