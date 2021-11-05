
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
const studentsContainer = document.getElementById('studentsContainer');


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
    }
    studentRegister(student);

    name.value = '';
    code.value = '';
    course.value = '';
    update();
}

// Click Botones
bnEnroll.addEventListener('click', registerEvent);

function update(){
    const db = getDatabase();
    const dbRef = ref(db, 'students');

    onValue(dbRef, function(data){
        data.forEach(
            student => {
                let value = student.val();
                console.log(value.name);
                let line = new StudentLine(value);
                studentsContainer.appendChild(line.render());
            });
    });
}