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
  apiKey: "AIzaSyCV9AFjAKqMkZ5e8ZQf0m5hf5OS0QVB2AA",
  authDomain: "fadedbarbers2-fabce.firebaseapp.com",
  projectId: "fadedbarbers2-fabce",
  storageBucket: "fadedbarbers2-fabce.firebasestorage.app",
  messagingSenderId: "435519708485",
  appId: "1:435519708485:web:33bc79d039fda2f3b6322c",
  measurementId: "G-BTGV21B0Z2"
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
