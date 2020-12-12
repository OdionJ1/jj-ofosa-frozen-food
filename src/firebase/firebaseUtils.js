import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMfmQdy6t3Mbp4NMxKlygypuHwRslQvOg",
    authDomain: "jj-ofosa-frozen-food.firebaseapp.com",
    databaseURL: "https://jj-ofosa-frozen-food.firebaseio.com",
    projectId: "jj-ofosa-frozen-food",
    storageBucket: "jj-ofosa-frozen-food.appspot.com",
    messagingSenderId: "461080588087",
    appId: "1:461080588087:web:51b8fc5a8a21654128f4b2",
    measurementId: "G-WFCHKFB13M"
}

export const createAdminProfileDocument = async(adminAuth, additionData) => {
    if(!adminAuth) return;

    const adminRef = firestore.doc(`admins/${adminAuth.uid}`)

    const snapShot = await adminRef.get()

    if(!snapShot.exists){
        const{ email } = adminAuth;

        const createdAt = new Date();

        try{
            await adminRef.set({
                email,
                createdAt,
                ...additionData
            })
        } catch(error){
            console.log(`error creating admin, ${error.messsage}`)
        }
    }

    return adminRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;