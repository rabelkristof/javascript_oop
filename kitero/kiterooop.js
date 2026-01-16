class Student {
    /**
     * @param {string} name 
     */
    constructor(name) {
        this.name = name;
        this.askedQuestionNumber = 0;
    }

    askedQuestion() {
        console.log("???");
        this.askedQuestionNumber++;
    }
}

const stu1 = new Student("Mr. Marcell");
console.log(stu1);
stu1.askedQuestion();
console.log(stu1);

class StudentWithWork extends Student {
    /**
     * @param {string} name
     */
    constructor(name) {
        super(name);
        this.workDone = 0;
    }

    doWork() {
        this.workDone++;
    }
}

const stu2 = new StudentWithWork("Mr. Csaba");
stu2.askedQuestion();
stu2.doWork();
console.log(stu2);