//Objects for my resume
var bio = {
	name: "Jessica Brisson",
	role: "Web Designer",
	welcomeMessage: "Welcome to my resume",
	contacts: {
		phone: "780-885-4151",
		email: "brissonjess@gmail.com",
		twitter: "@brissonjess",
		GitHub: "github.com/brissonjess",
		location: "Edmonton, AB"
	},
	skills: ["CSS3","HTML5","JavaScript","Digital Design"],
	pic: "images/me.jpg"
}
var work = {
	jobs: [{
		employer: "Moonshine Doughnuts",
		title: "Web Developer / Designer",
		location: "Edmonton, AB",
		date: "January 2015 - April 2015",
		url: "http://moonshinedoughnuts.ca/",
		description: "Designed and developed a fully function website for an Edmonton bake shop. By working with the business owners I was able to design a mock-up for the Moonshine Doughnuts' website, and then use that design as a blueprint for coding the website."
	}, {
		employer: "Edmonton Journal",
		title: "Graphic Designer",
		location: "10006 - 101 St., Edmonton, AB",
		date: "October 2009 - January 2016",
		url: "http://edmontonjournal.com/",
		description: "I worked many departments during my tenure at the Edmonton Journal. I have laid out sports stats, created maps, charts and graphics based on the day's top stories, and curated the company's website. However, my fascination of web development sparked in 2014 when the company attempted to create a daily tablet publication. I was part of six person team whose goal was to re-purposed traditional news stories so they were mobile-friendly, interactive, and informative. Despite the project being shelved, due to a lack in company finances, I was able to gain real world experience designing a mobile product that was clean and easy to use.  During my final two years at the paper I would continue to pitch ideas that would allow to me to expand my knowledge of web design."
	}, {
		employer: "See Magazine",
		title: "Journalism Intern",
		location: "Edmonton, AB",
		date: "June 2010 - August 2010",
		description: "Shortly after I graduated from MacEwan University I worked as a summer intern for a period of two months. During that time I worked 9 a.m. to 5 p.m. and then went to work in the evening as a sports statistician at the Edmonton Journal from 5:30 p.m. to 12 a.m. Though I worked long hours I had a blast writing and pitching stories by day and crunching sports stats by night. "
	}]
}
var education = {
	schools: [{
		name: "Grant MacEwan University",
		city: "Edmonton, AB",
		degree: "Associate Degree",
		major: "Journalism",
		date: "2008-2010",
		url: "macewan.ca/Journalism",
		description: "Majoring in Journalism provides you with a cross section of writing, research and reporting skills that will make you a huge asset in any newsroom. MacEwan’s Journalism major provides you access to the same kind of multimedia equipment and experience you’ll find in any modern newsroom which means that when you graduate, you can hit the ground running."
	}, {
		name: "Northern Alberta Institute of Technology",
		city: "Edmonton, AB",
		degree: "Associate Degree",
		major: "Computer Software Development",
		date: "2014-Present",
		url: "http://www.nait.ca/98288.html"
	}],
	onlineCourses: [{
		title: "JavaScript Syntax",
		school: "Udacity",
		dates: "2016",
		url: "http://www.udacity.com/course/ud804"
	}, {
		title: "Linux Command Line Basics",
		school: "Udacity",
		dates: "2016",
		url: "http://www.udacity.com/course/ud595"
	}, {
		title: "How to Use Git and GitHub",
		school: "Udacity",
		dates: "2016",
		url: "http://www.udacity.com/course/ud775"
	}]
}
var projects = {
	projects: [{
		title: "Portfolio Website",
		date: "2015",
		url: "",
		description: "Coded a basic portfolio website based off of Udacity's development standards.",
		image: "images/fry.jpg",
		image: "images/portfolio.png"
	}, {
		title: "Company Website for Moonshine Doughnuts",
		date: "2014",
		url: "http://moonshinedoughnuts.ca/",
		description: "Developed a fully functional company website based off of the client's needs. The layout was based on mock-ups I created.",
		image: "images/moonshinedoughnuts.png"
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
work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		console.log(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};
work.display();


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
		
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[item].date);
		$('.project-entry:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
		$('.project-entry:last').append(formattedProjectDescription);

		if (projects.projects[item].image.length > 0){			
			for (photo in projects.projects[item].image) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[item].image);
				//$(".project-entry:last").append(formattedImage);
				
				console.log(formattedProjectImage);
				console.log(projects.projects[item].length);
			}
			$('.project-entry:last').append(formattedProjectImage);
		}
	}
}
//i = 0; j = projects.projects[item].image.length; i < j; i++
projects.display();


education.display = function(){
	$('#education').append(HTMLschoolStart);
	for (school in education.schools){
		var formattedEducationTitle = HTMLschoolName.replace("%data%", education.schools[school].name);
		$('.education-entry:last').append(formattedEducationTitle);

		var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$('.education-entry:last').append(formattedEducationDates);

		var formattedEducationCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$('.education-entry:last').append(formattedEducationCity);

		var formattedEducationMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$('.education-entry:last').append(formattedEducationMajor);

		var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$('.education-entry:last').append(formattedEducationDegree);
	}
	//$("#education").append(HTMLonlineClasses)
	$(".education-entry:last").append(HTMLonlineClasses);
	for (online in education.onlineCourses) {
	var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title).replace("#", education.onlineCourses[online].url);
	var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
	var formattedTitleSchool = formattedTitle + formattedSchool;
	var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url).replace("#", education.onlineCourses[online].url);

		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedURL);
	}
};
education.display();

$('#mapDiv').append(googleMap);
