//Objects for my resume
var bio = {
	name: "Jessica Brisson",
	role: "Web Designer",
	welcomeMessage: "Welcome to my resume. Thank you for taking the time to get to know me.",
	contacts: {
		phone: "780-885-4151",
		email: "brissonjess@gmail.com",
		twitter: "@brissonjess",
		GitHub: "github.com/brissonjess",
		location: "Edmonton, AB"
	},
	skills: ["CSS3","HTML5","JavaScript","Digital Design"],
	biopic: "images/me.jpg"
};
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
};
var education = {
	schools: [{
		name: "Grant MacEwan University",
		location: "Edmonton, AB",
		degree: "Associate Degree",
		majors: ["Journalism"],
		dates: "2008-2010",
		url: "macewan.ca/Journalism",
		description: "Majoring in Journalism provides you with a cross section of writing, research and reporting skills that will make you a huge asset in any newsroom. MacEwan’s Journalism major provides you access to the same kind of multimedia equipment and experience you’ll find in any modern newsroom which means that when you graduate, you can hit the ground running."
	}, {
		name: "Northern Alberta Institute of Technology",
		location: "Edmonton, AB",
		degree: "Associate Degree",
		majors: ["Computer Software Development"],
		dates: "2014-Present",
		url: "http://www.nait.ca/98288.html"
	}],
	onlineCourses: [{
		title: "Front-end Web Developer Nanodegree",
		school: "Udacity",
		date: "2016",
		url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}, {
		title: "JavaScript Syntax",
		school: "Udacity",
		date: "2016",
		url: "http://www.udacity.com/course/ud804"
	}, {
		title: "Linux Command Line Basics",
		school: "Udacity",
		date: "2016",
		url: "http://www.udacity.com/course/ud595"
	}, {
		title: "How to Use Git and GitHub",
		school: "Udacity",
		date: "2016",
		url: "http://www.udacity.com/course/ud775"
	}]
};
var projects = {
	projects: [{
		title: "Portfolio Website",
		dates: "2015",
		url: "",
		description: "Coded a basic portfolio website based off of Udacity's development standards.",
		images: ["images/portfolio.png"]
	}, {
		title: "Company Website for Moonshine Doughnuts",
		dates: "2014",
		url: "http://moonshinedoughnuts.ca/",
		description: "Developed a fully functional company website based off of the client's needs. The layout was based on mock-ups I created.",
		images: ["images/moonshinedoughnuts.png"]
	}]
};

bio.display = function(){
	$('#header').prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage), HTMLbioPic.replace("%data%", bio.biopic));
	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for (var skill = 0; skill < bio.skills.length; skill++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
		}
	}
	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.GitHub));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	for (var contact = 0; contact < formattedContactInfo.length; contact++){
		$("#topContacts").append(formattedContactInfo[contact]);
		$("#footerContacts").append(formattedContactInfo[contact]);
	}
};
bio.display();

work.display = function(){
	for (var job = 0; job < work.jobs.length; job++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployerURL = HTMLworkEmployer.replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};
work.display();


//console.log the x and y locations on click events

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});


/*
"Locationizer" button that changes the way my name displays on the page.
function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
    }

function inName() {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
};
*/

projects.display = function(){
	for (var item = 0; item < projects.projects.length; item++){
		$('#projects').append(HTMLprojectStart);
		
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);

		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescription);

		if (projects.projects[item].images.length > 0){			
			for (var photo = 0; photo < projects.projects[item].images.length; photo++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
				//$(".project-entry:last").append(formattedImage);
				
				console.log(formattedProjectImage);
				console.log(projects.projects[item].length);
				$('.project-entry:last').append(formattedProjectImage);
			}
			
		}
	}
};
projects.display();


education.display = function(){
	//post-secondary institutions
	for (var school = 0; school <  education.schools.length; school++){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolCity);

		if(education.schools[school].majors.length > 0 ){
			for (var major = 0; major < education.schools[school].majors.length; major++){
				var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			}
			$(".education-entry:last").append(formattedSchoolMajors);
		}
	}
	//online classes
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);
	for (var course = 0; course < education.onlineCourses.length; course++){
		
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};
education.display();

$('#mapDiv').append(googleMap);
