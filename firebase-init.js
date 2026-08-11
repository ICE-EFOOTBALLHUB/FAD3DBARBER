// ---------- FIREBASE INIT (shared across pages) ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCw8H7nAicBcO94uSfn3Ac0MsTrmhkTt4o",
  authDomain: "fad3dbarber.firebaseapp.com",
  projectId: "fad3dbarber",
  storageBucket: "fad3dbarber.firebasestorage.app",
  messagingSenderId: "799129393328",
  appId: "1:799129393328:web:d4445932d4311738fb0375",
  measurementId: "G-9ZSDDNX58P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ---------- CLOUDINARY (unsigned upload, same account used by ICE eFootballHub) ----------
const CLOUDINARY_CLOUD_NAME = "dol8nmjri";
const CLOUDINARY_UPLOAD_PRESET = "listing_pic";
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

async function uploadToCloudinary(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const response = await fetch(CLOUDINARY_URL, { method: "POST", body: formData });
  if (!response.ok) {
    throw new Error("Image upload failed. Check your Cloudinary preset/cloud name.");
  }
  const data = await response.json();
  return data.secure_url;
}

export {
  db,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp,
  uploadToCloudinary
};
