
import{initializeApp} from "firebase/app";
import{getDatabase, ref, set, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);



// REGISTRAR CANDIDATOS
function candidateRegister (candidate){
    const db = getDatabase();
    const dbRef = ref(db, 'candidates/' + candidate.name);

    set(dbRef, candidate);
}

// Metodo para lista de candidatos
function getCand(){
    const db = getDatabase();
    const dbRef = ref(db, 'candidates');

    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val();
        currentList(data);
    });
}

// Metodo para lista de votos

function getVote(){
    
}

function currentList(info){
    let text = "";
    Object.keys(info).forEach((k,index)=>{
        text += "ID:" +info[k].idRegis+ "   Nombre: " +info[k].name + "\n";
    });
    alert(text);
}

// REGISTRAR VOTOS
function voteRegister (vote){
    const db = getDatabase();
    const dbRef = ref(db, 'votes/' + vote.idVote);

    set(dbRef, vote);
}

const idRegis = document.getElementById("idRegis");
const name = document.getElementById("name");
const bnRegister = document.getElementById("bnRegister");

const idVote = document.getElementById("idVote");
const bnVote = document.getElementById("bnVote");

const bnCandidateList = document.getElementById("bnCandidateList");
const bnVoteList = document.getElementById("bnVoteList");


// Metodo creación del usuario como un objeto
const registerEvent = (e, event) =>{
    const candidate = {
        idRegis: idRegis.value,
        name: name.value
    }
    candidateRegister(candidate);
}

// Metodo creación del voto como un objeto
const voteEvent = (e, event) =>{
    const vote = {
        idVote: idVote.value,
    }
    voteRegister(vote);
}


// CLICKS
bnRegister.addEventListener('click', registerEvent);
bnVote.addEventListener('click',voteEvent);
bnCandidateList.addEventListener('click', getCand);
bnVoteList.addEventListener('click', getVote);