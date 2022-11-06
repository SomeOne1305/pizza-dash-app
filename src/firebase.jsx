import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZ-1E3UApzKGsCX9_AXOZe2dfV3FPy86s",
  authDomain: "pizza-dash-app.firebaseapp.com",
  databaseURL: "https://pizza-dash-app-default-rtdb.firebaseio.com",
  projectId: "pizza-dash-app",
  storageBucket: "pizza-dash-app.appspot.com",
  messagingSenderId: "236972160479",
  appId: "1:236972160479:web:463feb8969140d2cbd806a",
  measurementId: "G-MR1XC043Y1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);