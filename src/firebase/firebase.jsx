import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import uuid from 'react-uuid'


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

const storage = getStorage(app)

export const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                reject(errorMessage)
            });
    })
}

export const login = (email, password) =>{
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            resolve(user)
        }).catch((error)=> {
            reject(error)
        });
    })
}

export const uploadFile =async (file) => {
    const storageRef = ref(storage, uuid())
    return await uploadBytes(storageRef, file)
}

export const getURLFile = (fileName) => {
    console.log('entra')
    return getDownloadURL(ref(storage, fileName)).then((url)=>{
        console.log(url)
        return url
    }).catch((e)=>{
        console.log(e)
    })
}

