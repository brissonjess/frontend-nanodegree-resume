/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Jessica Brisson";
 var role = "Web Developer, Designer";
 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//name
console.log(formattedName);
console.log(HTMLheaderName);
//role
console.log(formattedRole);
console.log(HTMLheaderRole);

