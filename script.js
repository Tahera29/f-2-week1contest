/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  
    arr.map(student)=> {
    if(student.marks>50)
    {console.log(student);}
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  
  arr.forEach(student)=> {
    if(student.marks>50)
    {console.log(student);}
  }
}

function addData() {
  //Write your code here, just console.log
  
  const newstudent({id:4,name:"susan",age:"20",marks:45};)
  arr.push(newstudent);
  console.log(newstudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  
  const failedstudents= arr.filter(student)=>{
  return (student.marks<50)
  }
  console.log(failedstudents);
}

function concatenateArray() {
  //Write your code here, just console.log
  
   let newarr = [
    { id: 4, name: "sam", age: "18", marks: 80 },
    { id: 5, name: "jackie", age: "17", marks: 85 },
    { id: 6, name: "lauren", age: "19", marks: 35 },
  ];
  arr.concat(newarr);
}
