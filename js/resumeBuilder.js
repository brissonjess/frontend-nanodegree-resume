/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Jessica Brisson";
 var role = "Web Developer, Designer";
 var formattedName = HTMLheaderName.replace("%data%",name);
 var formattedRole = HTMLheaderRole.replace("%data%",role);
 var skills = ["CSS3","HTML5","JavaScript","Digital Design"];
 var bio = {
 	"skills": skills,
 	"name": "Jessica",
 	"contact": {
 		"phone": "780-885-4151",
 		"twitter": "@brissonjess",
 		"email": "brissonjess@gmail.com",
 		"location": "Edmonton, AB"
 	},
 	"role" : "Web Designer, Developer",
 	"pic": "images/fry.jpg"
 };
 bio.education = {
 	"macewanName": "Grant MacEwan University",
 	"macewanYears": "2 years",
 	"macewanDiploma": "Journalism Diploma"
 };

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(bio.contact.phone,
					bio.contact.email,
					bio.contact.twitter,
					bio.contact.location);
$("#header").append(bio.skills);
$("#main").append(bio.pic);
$("#main").append(
	bio.education.macewanName,
	bio.education.macewanYears,
	bio.education.macewanDiploma
	);


//name
console.log(formattedName);
console.log(HTMLheaderName);
//role
console.log(formattedRole);
console.log(HTMLheaderRole);

