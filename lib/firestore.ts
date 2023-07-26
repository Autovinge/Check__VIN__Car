import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIRESTORE_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.FIRESTORE_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.FIRESTORE_APP_ID
}

initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const colRef = collection(db, 'user-info')

export const getDocuments = async () => {
  const arr = []
  await signInAnonymously(auth)
  const docSnap = await getDocs(colRef)
  docSnap.forEach((dc) => {
    console.log(dc.data())
    arr.push(dc.data())
  })
  return arr
}

export const addDocument = async (
  id: string,
  mail: string,
  vincode: string
) => {
  await signInAnonymously(auth)
  await setDoc(doc(db, 'user-info', id), {
    mail,
    vincode,
    mailSent: false
  })
}

export const getDocumentById = async (id: string) => {
  await signInAnonymously(auth)
  const ref = doc(db, 'user-info', id)
  return ref
}

export const deleteDocumentById = async (id: string) => {
  await signInAnonymously(auth)
  const ref = doc(db, 'user-info', id)
  await deleteDoc(ref)
}

export const updateSentMail = async (id: string) => {
  await signInAnonymously(auth)
  const ref = doc(db, 'user-info', id)
  await updateDoc(ref, {
    mailSent: true
  })
}
