
import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import {studentLine} from "./studentLine";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

// =================================================================================== //

// Registrar Estudiantes
function studentRegister (student){
    const db = getDatabase();
    const dbRef = push(ref(db, 'students'));

    student["id"] = dbRef.key;
    set(dbRef, student);
}

// Obtener Estudiantes
function getStudents(){
    const db = getDatabase();
    const dbRef = ref(db, 'students');

    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        update(data);
    });
}

// Actializar tablas con info nueva
function update(data){
    if(data){
        noBonusContainer.innerHTML = "";
        silverBonusContainer.innerHTML = "";
        goldBonusContainer.innerHTML = "";

        Object.keys(data).forEach((k, index) => {
            console.log(k, index);
            const student = new studentLine(data[k]);

            // sort
            if(data[k].score <= 5){
                noBonusContainer.appendChild(student.render());
            }else if(data[k].score > 5 && data[k].score <= 10){
                silverBonusContainer.appendChild(student.render());
            }else{
                goldBonusContainer.appendChild(student.render());
            }
        });
    } else{
        noBonusContainer.innerHTML = " ";
        silverBonusContainer.innerHTML = " ";
        goldBonusContainer.innerHTML = " ";
    }
}

// =================================================================================== //

const name = document.getElementById("name");
const code = document.getElementById("code");
const course = document.getElementById("course");
const bnEnroll = document.getElementById("bnEnroll");

const noBonusContainer = document.getElementById('noBonusContainer');
const silverBonusContainer = document.getElementById('silverBonusContainer');
const goldBonusContainer = document.getElementById('goldBonusContainer');


// Crear estudiente
const registerEvent = (e, event) =>{

    if(name.value === '' || code.value === '' || course.value === ''){
        alert('hay campos vacios');
        return;
    }

    const student = {
        name: name.value,
        code: code.value,
        course: course.value,
        score: 0,
    }
    studentRegister(student);

    name.value = '';
    code.value = '';
    course.value = '';
}

// Click Botones
bnEnroll.addEventListener('click', registerEvent);
getStudents();

// =================================================================================== //