// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName, jane.lastName, mark.lastName);
*/





// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    }
);
*/





// Primitive vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/



// Lecture: Passing Functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/



// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

// My own practice for functions returning functions
function workout(day) {
    if (day === 'Monday' || day === 'Thursday') {
        return function(time) {
            if (time >= 6 && time <= 9) {
                console.log('Today is ' + day + ', and it\'s only ' + time + ' o\'clock so you are working out your legs.');
            } else {
                console.log('Today is ' + day + ', and it\'s already ' + time + ' o\'clock so you will have to skip gym.')
            }
        }
    } else if (day === 'Tuesday' || day === 'Friday') {
        return function(time) {
            if (time >= 6 && time <= 9) {
                console.log('Today is ' + day + ', and it\'s only ' + time + ' o\'clock so you are working out your chest.');
            } else {
                console.log('Today is ' + day + ', and it\'s already ' + time + ' o\'clock so you will have to skip gym.')
            }
        }
    } else if (day === 'Wednesday' || day === 'Saturday') {
        return function(time) {
            if (time >= 6 && time <= 9) {
                console.log('Today is ' + day + ', and it\'s only ' + time + ' o\'clock so you are working out your back.');
            } else {
                console.log('Today is ' + day + ', and it\'s already ' + time + ' o\'clock so you will have to skip gym.')
            }
        }
    } else {
        return function(time) {
            console.log('It\'s ' + time + ' o\'clock on a ' + day + '. Take a day off.')
        }
    }
}

workout('Tuesday')(6);
workout('Friday')(8);
workout('Wednesday')(10);
workout('Sunday')(12);















