const firebaseConfig = {
  apiKey: "AIzaSyDhIR6nsm5G938e-xODmi78Gcyz_KDEMJI",
  authDomain: "laboratio10-ecosistemas.firebaseapp.com",
  databaseURL: "https://laboratio10-ecosistemas-default-rtdb.firebaseio.com",
  projectId: "laboratio10-ecosistemas",
  storageBucket: "laboratio10-ecosistemas.appspot.com",
  messagingSenderId: "356765341741",
  appId: "1:356765341741:web:64884e5fe70049f59c40a4"
  };

  export function getFirebaseConfig(){
    if(!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    }else{
        return firebaseConfig;
    }
  }