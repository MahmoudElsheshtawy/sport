// import {
//   initializeApp,
//   getApps,
//   cert,
// } from "firebase-admin/app";

// import { getAuth } from "firebase-admin/auth";

// const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

// if (!getApps().length) {
//   initializeApp({
//     credential: cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey,
//     }),
//   });
// }

// const firebaseAuth = getAuth();

// export default firebaseAuth;
// =============================
// =============================
// =============================
// =============================
// =============================
// import {
//   initializeApp,
//   getApps,
//   cert,
// } from "firebase-admin/app";

// import { getAuth } from "firebase-admin/auth";

// const projectId = process.env.FIREBASE_PROJECT_ID;
// const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
// const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

// if (!projectId || !clientEmail || !privateKey) {
//   throw new Error(
//     "Missing Firebase Admin environment variables"
//   );
// }

// if (!getApps().length) {
//   initializeApp({
//     credential: cert({
//       projectId,
//       clientEmail,
//       privateKey,
//     }),
//   });
// }

// const firebaseAuth = getAuth();

// export default firebaseAuth;
// backend/config/firebaseAdmin.js

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseConfig = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
};

if (
  !firebaseConfig.projectId ||
  !firebaseConfig.clientEmail ||
  !firebaseConfig.privateKey
) {
  throw new Error(
    "Firebase Admin credentials are missing. Check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY."
  );
}

const firebaseApp =
  getApps().length === 0
    ? initializeApp({
        credential: cert(firebaseConfig),
      })
    : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);