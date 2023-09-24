import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCEfYlbVN_qjHuJXnRYbzQum2o5uEGs66I",
    authDomain: "harrypotter-bd181.firebaseapp.com",
    projectId: "harrypotter-bd181",
    storageBucket: "harrypotter-bd181.appspot.com",
    messagingSenderId: "248057872469",
    appId: "1:248057872469:web:142548d4785f8b657d14dc",
    measurementId: "G-YPNMRW755X"
}

const app =  initializeApp(firebaseConfig)
const auth = getAuth(app)

export const login = (email, password) =>{
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            resolve(true)
        }).catch((error) => {
            console.log(error)
            reject(false)
        });
    })

}
