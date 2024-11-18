import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function userAuthetication(email, password){
    const auth = getAuth();
    const userEmail = email
    const userPassword = password
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log("User signed up:", user);
        return {user}
    })
    .catch((error) => {
        console.error("Sign-Up Error:", error);
        // Return a user-friendly error message
        const errorMessage = error.message || "An unknown error occurred";
        return { error: errorMessage };
        // ..
    });
}
