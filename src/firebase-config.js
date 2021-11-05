const firebaseConfig = {
  apiKey: "AIzaSyDCx4sFug1w0TX96QCqTNDX6KaSLElNB58",
  authDomain: "quiz2-ecosistemas-f5e77.firebaseapp.com",
  databaseURL: "https://quiz2-ecosistemas-f5e77-default-rtdb.firebaseio.com",
  projectId: "quiz2-ecosistemas-f5e77",
  storageBucket: "quiz2-ecosistemas-f5e77.appspot.com",
  messagingSenderId: "18355598264",
  appId: "1:18355598264:web:c32e0f41329c8613a1d54d"
  };

  export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }