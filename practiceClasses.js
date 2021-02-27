class homework {

    isWeekend = false;

    mathCoach = 'PersonOne';
    englishCoach = 'PersonTwo';

    constructor (subject, isComplete, pages) {
        this.subject = subject;
        this.isComplete = isComplete;
        this.pages = pages;
    }

    setTeacher(teacher) {
        this.topic = teacher;
    }

    isWeekend(isWeekend) {
        this.isWeekend = false || true;
    }

}

const webDevelopment = {
    subject: 'programming',
    isComplete: false,
    pages: 1,
    
}

/* const webDevelopment = new homework(programming, false, 1); */

