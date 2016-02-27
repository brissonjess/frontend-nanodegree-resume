//Elements that are no longer needed but demonstrate skills that are useful
//var name = "Jessica Brisson";
//var role = "Web Developer, Designer";
//var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//var skills = ;

//Objects for my resume
var bio = {
	"name": "Jessica Brisson",
	"role": "Web Developer / Designer",
	"welcomeMessage": "Welcome to my resume",
	"contacts": {
		"phone": "780-885-4151",
		"email": "brissonjess@gmail.com",
		"twitter": "@brissonjess",
		"GitHub": "github.com/brissonjess",
		"location": "Edmonton, AB"
	},
	"skills": ["CSS3","HTML5","JavaScript","Digital Design"],
	"pic": "images/fry.jpg"
}
var work = {
	"jobs": [{
		"employer": "Edmonton Journal",
		"title": "Graphic Designer",
		"location": "Edmonton, AB",
		"dates": "October 2009 - January 2016",
		"description": "Enter job description here"
	}, {
		"employer": "See Magazine",
		"title": "Journalism Intern",
		"location": "Edmonton, AB",
		"dates": "June 2010 - August 2010",
		"description": "Enter job description here"
	}]
}
var education = {
	"schools": [{
		"name": "Grant MacEwan University",
		"city": "Edmonton, AB",
		"degree": "Associate Degree",
		"majors": ["Journalism"],
		"dates": "2008-2010",
		"url": "macewan.ca/Journalism"
	}, {
		"name": "Northern Alberta Institue of Technology",
		"city": "Edmonton, AB",
		"degree": "Associate Degree",
		"major": "Computer Software Development",
		"graduationYears": "2014-Present",
		"url": "http://www.nait.ca/98288.htm"
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
var projects = {
	"projects": [{
		"title": "Website",
		"dates": "2015",
		"description": "Description of project",
		"image": "placehold.it/100x100"
	}]
}

/*
NOTE: may need this section
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

*/


//name
console.log(formattedName);
console.log(HTMLheaderName);
//role
console.log(formattedRole);
console.log(HTMLheaderRole);

