import promptSync from 'prompt-sync';

const prompt = promptSync();
let student_note = prompt('Please enter your grade: ');
console.log(student_note);

if(student_note >= 90){
    console.log(`Your note with ${student_note} is EXCELENT`);
} else if(student_note >= 75 && student_note <= 89){
    console.log(`Your note with ${student_note} is GOOD`);
} else if(student_note >= 60 && student_note <= 74){
    console.log(`Your note with ${student_note} is ENOUGH`);
} else{
    console.log(`Your note with ${student_note} is FAILED`);
}

