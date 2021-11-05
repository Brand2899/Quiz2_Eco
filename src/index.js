
import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);



// Registrar Estudiantes
function studentRegister (student){
    const db = getDatabase();
    const dbRef = ref(db, 'students/' + student.name);

    set(dbRef, student);
}

const name = document.getElementById("name");
const code = document.getElementById("code");
const course = document.getElementById("course");
const bnEnroll = document.getElementById("bnEnroll");


// Crear estudiente
const registerEvent = (e, event) =>{
    const student = {
        name: name.value,
        code: code.value,
        course: course.value,
    }
    studentRegister(student);
}

// Click Botones
bnEnroll.addEventListener('click', registerEvent);