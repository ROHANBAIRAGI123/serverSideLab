var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Print object before deletion
console.log("Before deleting:", student);

// Delete rollno property
delete student.rollno;

// Print object after deletion
console.log("After deleting:", student);
