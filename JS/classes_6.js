class University {
    constructor(name) {
        this.name = name;
        this.faculties = [];
    }

    addFaculty(faculty) {
        this.faculties.push(faculty);
    }
    
    deleteFaculty(faculty) {
        const index = this.faculties.indexOf(faculty);
        if (index !== -1) {
            this.faculties.splice(index, 1);
        } else {
            console.log(`Faculty ${faculty} not found`);
        }
    }

    showFaculties() {
        if (this.faculties.length === 0) {
            console.log("No faculties found");
        } else {
            console.log("Faculties:");
            this.faculties.forEach(faculty => {
                console.log(`- ${faculty}`);
            });
        }
    }
}

class Department extends University {
    constructor(name) {
        super(name);
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    deleteDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        } else {
            console.log(`Department ${department} not found`);
        }
    }

    showDepartments() {
        if (this.departments.length === 0) {
            console.log("No departments found");
        } else {
            console.log("Departments:");
            this.departments.forEach(department => {
                console.log(`- ${department}`);
            });
        }
    }
}

const myUniversity = new Department("BSUIR");


myUniversity.addFaculty("Engineering");
myUniversity.addFaculty("Arts");

myUniversity.deleteFaculty("Arts");

myUniversity.showFaculties();

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mathematics");

myUniversity.deleteDepartment("Mathematics");

myUniversity.showDepartments();
