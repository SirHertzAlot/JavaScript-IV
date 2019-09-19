// CODE here for your Lambda Classes

//Person class with speak method.
class person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

//Instructor class with demo and grade method
class instructor extends person {
    constructor(attributes) {
        super(attributes);
        this.subject = attributes.subject;
        this.specialty = attributes.specialty; //Redux, React, Html, Vue, Css
        this.favLanguage = attributes.favLanguage; // Coding language. I.e. JavaScript, Python, Pascal, C#, Perl, Ruby, etc.
        this.catchPhrase = attributes.catchPhrase;
    }
    demo() {
        return `Today we are learning about ${this.subject}.`
        }
    grade(){
        return `${this.name} receives a perfect score on ${this.subject}.`
    }
}

//Student class with subjects, assignments, and sprint challenge method.
class student extends person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground; //Redux, React, Html, Vue, Css
        this.className = attributes.className; // Coding language. I.e. JavaScript, Python, Pascal, C#, Perl, Ruby, etc.
        this.subject = attributes.subject;
    }
    listsSubjects() {
        return `My favorite subjects are, ${this.subject}.`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subject}.`
    }
}

//Project Manager class with Standup and debugsCode method.

class projectManager extends instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standup times!`
    }
    debugsCode() {
        return `${this.name} debugs ${student.name}'s code on ${this.subject}.`
    }
}

//Instructors
const fred = new instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    subject: 'JavaScript',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const james = new instructor({
    name: 'James',
    location: 'Bond',
    age: 39,
    subject: 'Recon',
    favLanguage: 'Metasploit',
    specialty: 'White-hat Hacking',
    catchPhrase: `My name is bond, James Bond.`
});

//Students
const kareem = new student({
    name: 'Kareem',
    location: 'Breck',
    previousBackground:'Construction',
    className:'Web35',
    subject:'JavaScript',
    age: 23,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Let's get it.`
});

const charles = new student({
    name: 'Charles',
    location: 'Listerman',
    previousBackground: 'Customer Service',
    className: 'Web35',
    subject: 'SQL',
    age: 25,
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Let's do a rail.`
});

//Project Managers
const greg = new projectManager({
    name: 'Gregory',
    location: 'Richardson',
    age: 43,
    favLanguage: 'Java',
    specialty: 'Full-Stack Developer',
    catchPhrase: `Need my cup o' joe.`
});

const kissinger = new projectManager({
    name: 'Henry',
    location: 'Kissinger',
    age: 41,
    favLanguage: 'Asp.Net',
    specialty: 'Full-Stack Developer',
    catchPhrase: `Kiss the chef.`
});

console.log(charles.PRAssignment());
console.log(kareem.sprintChallenge());
console.log(kissinger.standUp());
console.log(greg.debugsCode());
console.log(kareem.listsSubjects());
console.log(james.demo());
console.log(fred.grade());