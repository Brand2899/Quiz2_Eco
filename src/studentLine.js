import { getDatabase, ref, push, set } from 'firebase/database';

export class studentLine{
    constructor(student){
        this.student = student;
    }

    render(){
        // Componente Padre
        let comp = document.createElement("div");
        comp.className = "component";


        // Nombre del estudiante
        let name = document.createElement("p");
        name.className = "studentName";
        name.innerHTML = this.student.name;

        // Código del estudiante
        let code = document.createElement("p");
        code.className = "studentCode";
        code.innerHTML = this.student.code;

        // Curso del estudiante
        let course = document.createElement("p");
        course.className = "studentCourse";
        course.innerHTML = this.student.course;

        // Puntaje del estudiante
        let score = document.createElement('h5');
        score.className = "studentScore";
        score.innerHTML = this.student.score;

        // Botón borrar
        let bnDelete = document.createElement('button');
        bnDelete.className = "deleteButton";
        bnDelete.innerHTML = "X";

        // Botón sumar
        let bnAdd = document.createElement('button');
        bnAdd.className = "addButton";
        bnAdd.innerHTML = "+";

        // Evento Eliminar Componente
        bnDelete.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbRef = ref(db, 'students/' + this.student.id);
            set(dbRef, null);
        });

        // Evento Sumar Puntaje
        bnAdd.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const dbRef = ref(db, 'students/' + this.student.id + '/score');
            set(dbRef, this.student.score + 1);
        });

        comp.appendChild(course);
        comp.appendChild(name);
        comp.appendChild(code);
        comp.appendChild(score);

        comp.appendChild(bnDelete);
        comp.appendChild(bnAdd);

        return comp;
    }
}