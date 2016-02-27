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
var education = {
	"schools": [{
		"name": "Grant MacEwan University",
		"city": "Edmonton, AB",
		"degree": "Associate Degree",
		"major": ["Journalism"],
		"minor": "NA",
		"graduationYears": "2008-2010"
	}, {
		"name": "Northern Alberta Institue of Technology",
		"city": "Edmonton, AB",
		"degree": "Associate Degree",
		"major": "Computer Software Development",
		"minor": "NA",
		"graduationYears": "2014-Present"
	}],
	"onlineCourses": [{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"date": "2016",
		"url": "http://www.udacity.com/course/ud804"
	}, {
		"title": "Linux Command Line Basics",
		"school": "Udacity",
		"date": "2016",
		"url": "http://www.udacity.com/course/ud595"
	}, {
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"date": "2016",
		"url": "http://www.udacity.com/course/ud775"
	}]
}

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

