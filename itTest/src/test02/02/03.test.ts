import {addSkill, doesStudentLiveIn, makeStudentActive, studentType} from "./03";


let student: studentType;
beforeEach(() => {
    student =  {
        id: 1,
        name: 'Pavel',
        age: 34,
        isActive: false,
        address: {
            streetTitle: "Surganova 2",
            city : {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'JS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test("new tech skill shpuld be added to student", ()=> {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test("student should be made active", ()=> {
    expect(student.isActive).toBe(false);

    makeStudentActive(student)

    expect(student.isActive).toBe(true);
})

test("Does student lives in city?", ()=> {
    expect(student.isActive).toBe(false);

    let result1 = doesStudentLiveIn(student, "Moscow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

