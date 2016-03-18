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
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedPhone = HTMLmobile.replace("%data%",bio.contacts.phone);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.GitHub);
//var fotmattedBlog = HTMLtwitter.replace("%data%",bio.contacts.twitter);
//var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.pic);
var formattedGreeting = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedGreeting);
$("#header").append(formattedBioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedPhone);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGitHub);
//$("#topContacts").append(formattedLocation);


if (bio.skills.length > 0){
	//var formattedHeaderName = HTMLheaderName.replace('%data%', bio.name);
	var skill0 = HTMLskills.replace('%data%', bio.skills[0]);
	var skill1 = HTMLskills.replace('%data%', bio.skills[1]);
	var skill2 = HTMLskills.replace('%data%', bio.skills[2]);
	var skill3 = HTMLskills.replace('%data%', bio.skills[3]);
	$('#header').append(HTMLskillsStart);
	$('#skills').append(skill0,skill1,skill2,skill3);
	console.log('bio.skills === true');
}
else {
	console.log('bio.skills === false');
}
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};
displayWork();


//console.log the x and y locations on click events

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY)
});


/*
function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;

}
*/

/*
function inName() {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
};
*/

projects.display = function(){
	for (item in projects.projects){
		$('#projects').append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		$('.project-entry:last').append(formattedProjectTitle);
		
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$('.project-entry:last').append(formattedProjectDescription);

		if (projects.projects[item].images.length > 0){
			for (image in projects.projects[item].image) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[item].image[image]);
				$('.project-entry:last').append(formattedProjectImage);
			}
		}
	}
}
projects.display();

$('#mapDiv').append(googleMap);
