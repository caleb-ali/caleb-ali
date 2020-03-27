let name = “Caleb Ali”;
let courses = [“HTML”, “CSS”, “JavaScript”];
var numOfCourses = courses.length;
let numDisplay = “”;
for (let i = 1; i <= 200; i++){
      if (numOfCourses % 2 == 1){
           if( i % 2 ==1){
               if(i == 200 - 1){
                    break;
               }
               numDisplay += i + 2 + " ";
           }
      }
}

console.log(numDisplay)