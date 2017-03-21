var bio = {
    "name": "Jose L Jimenez",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "(800)588-2300",
        "email": "jluis9@sbcglobal.net",
        "github": "jluis9",
        "twitter": "n/a",
        "location": "Chicago IL"
    },
    "welcomeMessage": "Hello everyone Welomcome to my page!",
    "skills": ["CSS", "Bootstrap", "HTML", "JAVA", "JQUERY"],
    "biopic": "images/homer.jpg",
};
var work = {
    "jobs": [{
        "employer": "Capital One",
        "title": "Tops program Rotation",
        "date": "2015-current",
        "description": "I work Front end applications such as IRIS,CHAMPS,TOOLBARS,.",
        "location": "Chicago, IL"
    }, {
        "employer": "3D Binding",
        "title": "Customer Service Represenative",
        "date": "2010-2014",
        "description": "Working With Data Entry for Cusomers",
        "location": "Broadview, IL"
    }],
};
var education = {
    "schools": [{
        "name": "Udacity",
        "location": "Chicago,IL",
        "degree": "NanoDegree",
        "majors": ["Web Development"],
        "dates": "Current",
        "url": "http://www.udacity.com"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "W3 Schools, Code Acedemy",
        "dates": "2015",
        "url": "http://www.codeacademy.com,http://www.w3schools.com"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015",
        "url": "http://www.udacity.com"
    }]
};
var projects = {
    "projects": [{
        "title": "Front End Web Developer",
        "date": "2015",
        "description": "These are my current projects completed",
        "images": ["images/myproject_2.jpg", "images/myproject_3.jpg"]
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedImage, formattedMsg);
    $("#topContacts, #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedprotitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry").append(formattedprotitle);
        var formattedprodate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $(".project-entry:last").append(formattedprodate);
        var formattedprodesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedprodesc);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedimages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedimages);
            }
        }
    }
};
projects.display();
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattededucation = formattedschoolname + formatteddegree;
        $(".education-entry:last").append(formattededucation);
        var formattedschooldate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschooldate);
        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedmajor);

        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {
            var formattedcourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedonline = formattedcourse + formattedschool;
            $(".education-entry:last").append(formattedonline);
            var formatteddate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formatteddate);
            var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedurl);
        }
    }
};
education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
inName(bio.name);
$("#mapDiv").append(googleMap);
