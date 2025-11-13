///Add 3 entries, delete one entry, print .size.


let StudentMarks = new Map();

StudentMarks.set("Priya",90);
StudentMarks.set("Samruddhi",85);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
StudentMarks.set("Prachi",90);


//console.log(StudentMarks);
StudentMarks.delete("Samruddhi");
console.log(StudentMarks);
console.log("Size Of Map",StudentMarks.size);