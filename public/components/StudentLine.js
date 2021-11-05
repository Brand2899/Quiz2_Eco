class StudentLine{
    constructor(student){
        this.student = student;
    }

    render = () => {
        let component = document.createElement('div');
        component.innerHTML = (
            '<p>' + this.student.name + '</p>'
        );
        return component;
    }
}