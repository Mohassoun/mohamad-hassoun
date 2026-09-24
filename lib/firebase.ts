import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDxms1sKJaIY5EnAlbN3wsaujUM0vY-65w",
  authDomain: "portfoliohassoun.firebaseapp.com",
  projectId: "portfoliohassoun",
  storageBucket: "portfoliohassoun.appspot.com",
  messagingSenderId: "704609022395",
  appId: "1:704609022395:web:0022b52fa19e7d56bc549e",
  measurementId: "G-32ST7FK971"
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  }
  return app;
}

export function initAnalytics(): Analytics | null {
  if (typeof window === "undefined") return null;
  if (analytics) return analytics;
  try {
    analytics = getAnalytics(getFirebaseApp());
    return analytics;
  } catch {
    return null;
  }
}
