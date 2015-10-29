/*
Biography
*/
var bio = { // JSON formatted data
  "name": "Andreas Isenegger",
  "role": "Software Engineer",
  "welcomeMessage": "Welcome to my Resume Page!",
  "contacts": {
    "mobile": "+41 76 400 9417",
    "email": "a.isenegger@gmail.com",
    // "twitter": "", // No Twitter account
    // TODO: Improve URI linking or remove; 29Oct-2015/ais
    // "linkedIn": '<a href="https://www.linkedin.com/pub/andreas-isenegger/107/aa1/571" target="_blank">my career</a>',
    // "github": '<a href="https://github.com/isenegger" target="_blank">my repo</a>',
    // "blog" : '<a href="http://bitcontrol.ch/blog" target="_blank">my blog</a>',
    "linkedIn": "Andreas Isenegger",
    "github": "isenegger",
    "blog" : "bitcontrol.ch/blog",
    "location": "Switzerland"
  },
  "skills": [
    "Project Management",
    "IoT Systems Engineering",
    "C/C++ Programming",
    "ARM STM32 Development",
    "Java SE Programming",
    "Linux Admininstration"
    ]
};

bio.display = function() { // Define display() function
  /* Header */
  // Use prepend() to insert before element with id="topContacts"
  var formattedRole = HTMLheaderRole.replace("%data%", this.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", this.name);
  $("#header").prepend(formattedName);
  var formattedBioPic = HTMLbioPic.replace("%data%", "images/portraitAndreas.jpg");
  $("#header").append(formattedBioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if (this.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i=0; i<this.skills.length && i<4; i+=1) {
      var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }

  /* Process JSON data for contact information*/
  var formattedHTMLmobile = HTMLmobile.replace(
    "%data%", this.contacts.mobile);
  var formattedHTMLemail = HTMLemail.replace(
    "%data%", this.contacts.email);
  // var formattedHTMLtwitter = HTMLtwitter.replace( // No Twitter account
  //   "%data%", this.contacts.
  var formattedHTMLlinkedIn = HTMLlinkedIn.replace(
    "%data%", this.contacts.linkedIn);
  var formattedHTMLgithub = HTMLgithub.replace(
    "%data%", this.contacts.github);
  var formattedHTMLblog = HTMLblog.replace(
    "%data%", this.contacts.blog);
  var formattedHTMLlocation = HTMLlocation.replace(
    "%data%", this.contacts.location);

  /* Header contacts */
  $("#topContacts").append(formattedHTMLmobile
    + formattedHTMLemail
    + formattedHTMLlinkedIn
    + formattedHTMLgithub
    + formattedHTMLblog
    + formattedHTMLlocation);

  /* Footer contacts */
  $("#footerContacts").append(formattedHTMLmobile
    + formattedHTMLemail
    + formattedHTMLlinkedIn
    + formattedHTMLgithub
    + formattedHTMLblog
    + formattedHTMLlocation);
};

bio.display(); // Run display() function

/*
Work
*/
var work = { // JSON formatted data
  "jobs": [
    {
      "employer": "Bitcontrol GmbH",
      "title": "Managing Director and Software Engineer",
      "location": "Baden, Switzerland",
      "dates": {
        "end": "today",
        "start": "Jun-2013"
      },
      "description": "Working for industry and science in product development and consulting."
    },
    {
      "employer": "RUAG Aviation",
      "title": "Software Engineer",
      "location": "Emmen, Switzerland",
      "dates": {
        "end": "Mar-2013",
        "start": "Oct-2011"
      },
      "description": "Developing software for unmanned aerial systems in a research environment."
    },
    {
      "employer": "Paul Scherrer Institute",
      "title": "Team Leader, Software Engineer",
      "location": "Villigen, Switzerland",
      "dates": {
        "end": "Sep-2011",
        "start": "Feb-2005"
      },
      "description": "Leading the Control Systems team of 8 software engineers working for "
        + "the beamlines at the Swiss Light Source, a synchrotron radiation facility.<br>"
        + "Writing software for such systems and integrating a variety of devices in the "
        + "existing, Linux based control system environment."
    },
    {
      "employer": "Varian Medical Systems Imaging Laboratory GmbH",
      "title": "Project Leader, Development Engineer",
      "location": "Daettwil, Switzerland",
      "dates": {
        "end": "Dec-2004",
        "start": "Apr-1999"
      },
      "description": "Leading international projects and developing software for motion "
        + "control systems of radiation therapy systems and treatment simulators. Frequent "
        + "business trips to the London area in the UK were part of the job. Trips to the "
        + "company's head quarters in the Silicon Valley and trips inside Europe for "
        + "installations and engineering support were also part of it."
    }
  ]
};

work.display = function() { // Define display() function
  for (var job in this.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkEmployer = HTMLworkEmployer.replace(
      "%data%", this.jobs[job].employer);

    var formattedWorkTitle = HTMLworkTitle.replace(
      "%data%", this.jobs[job].title);

    var formattedWorkDates = HTMLworkDates.replace(
      "%dataFrom%", this.jobs[job].dates.start);
    if (this.jobs[job].dates.end === "") {
      formattedWorkDates = formattedWorkDates.replace("%dataTo%", "");
    }
    else {
      formattedWorkDates = formattedWorkDates.replace("%dataTo%",
        " - " + this.jobs[job].dates.end);
    }

    var formattedWorkLocation = HTMLworkLocation.replace(
      "%data%", this.jobs[job].location);

    var formattedWorkDescr = HTMLworkDescription.replace(
      "%data%", this.jobs[job].description);

    // Note that append() requires complete HTML elements; partial elements
    // like '<a href="#">Bitcontrol GmbH' will be completed with a '</a>'
    // closing tag.
    // In the call below, the strings are concatenated before they are
    // passed to the function.
    $(".work-entry:last").append(formattedWorkEmployer
      + formattedWorkTitle
      + formattedWorkDates
      + formattedWorkLocation
      + formattedWorkDescr);
  }
};

work.display(); // Run display() function

/*
Projects
*/
var projects = { // JSON formatted data
  "projects": [
    {
      "title": "Parallel Robotics Inspired Goniometer (PRIGo)",
      "dates": {
        "end": "Aug-2015",
        "start": "Feb-2015"
      },
      "description": "Repair an existing PRIGo device and calibrate it.<br>"
        + "The repair includes mechanics, hardware, software and configuration. The device is "
        + "part of the Macro-Molecular X-ray beamline X06DA at the Swiss Light Source.",
      "images": ["images/SLS_X06DA_Prigo_500x250.jpg"
      ]
    },
    {
      "title": "Smart Magnet Controller",
      "dates": {
        "end": "Jan-2015",
        "start": "Feb-2014"
      },
      "description": "Design and create a product for the Macro-Molecular X-ray beamlines "
        + "at the Swiss Light Source.<br>"
        + "The device controls the electrical current through the sample holder coil at the "
        + "endstation and senses if a sample pin is mounted or not. It returns this information "
        + "to the control system.",
      "images": ["images/Bitcontrol_SMC_frontView_375x250.jpg"
      ]
    },
    {
      "title": "Light Controller Application",
      "dates": {
        "end": "Jan-2014",
        "start": "Aug-2013"
      },
      "description": "Design, implement, test and document a software for a light controller.<br>"
        + "The controller has these features: form size: electronic cut-in unit, DALI inputs "
        + "and outputs, , STM32 type micro-controller, bootstrap loader, NV configuration block, "
        + "RS-485 bus, sensor bus, and more.<br>The device is used throughout the main "
        + "product portfolio of a large industrial lighting company.",
      "images": [
      ]
    },
    {
      "title": "Digitally Addressable Light Interface (DALI) Ballast Stack",
      "dates": {
        "end": "Aug-2013",
        "start": "Jun-2013"
      },
      "description": "Design, implement, test and document a DALI ballast software stack "
        + "for a light controller according to the international DALI specifications.<br>"
        + "The device is used in light controllers of a large industrial lighting company.",
      "images": [
      ]
    },
    {
      "title": "Unmanned Aerial Vehicle (UAS) Software",
      "dates": {
        "end": "Mar-2013",
        "start": "Oct-2011"
      },
      "description": "Design, implement, test and document UAS software in a research "
        + "environment.",
      "images": [
      ]
    },
    {
      "title": "Data Acquisition (DAQ) Software Framework",
      "dates": {
        "end": "Sep-2011",
        "start": "Feb-2011"
      },
      "description": "Port a large scientific DAQ framework from the Diamond Light Source "
        + "in the UK to the Swiss Light Source.<br>"
        + "The framework is based on Java/Eclipse and its Rich Client Platform (RCP) plugin "
        + "mechanism.",
      "images": [
      ]
    },
    {
      "title": "Beamline Data Acquisition and Control Systems",
      "dates": {
        "end": "Jan-2011",
        "start": "Feb-2005"
      },
      "description": "Design, implement and test data acquisition and motion control systems "
        + "for various beamlines at the Swiss Light Source.<br>"
        + "Order and commission the hardware and implement the software of the control systems "
        + "for the beamlines X02DA (TOMCAT), X10DA () and X06DA (MXIII).<br>"
        + "Integrate many off-the-shelf as well as highly specific components as a major part "
        + "of the work.<br>"
        + "EPICS has been used as motion control framework, C/C++ and Java for programming.",
      "images": ["images/SLS_X09LA_experimentationChamber_444x250.jpg"
      ]
    },
    {
      "title": "Oncology On-Board Imaging",
      "dates": {
        "end": "2004",
        "start": "2003"
      },
      "description": "Lead a team of four software engineers technically.<br>"
        + "Design the motion control system for the On-Board Imaging system and lead the project "
        + "through the prototype phase to a large exhibition show in Salt Lake City, Utah.<br>"
        + "The project involved various trips to the US.",
      "images": ["images/VarianOBI_480x250.jpg"
      ]
    },
    {
      "title": "Radiotherapy Treatment Simulator",
      "dates": {
        "end": "2003",
        "start": "2001"
      },
      "description": "Integrate the imaging detector robot arm into the treatment "
        + "simulator as far as motion control is concerned.<br>"
        + "The project involved various trips to the UK.",
      "images": ["images/VarianAcuity_480x250.jpg"
      ]
    }
  ]
};

projects.display = function() { // Define display() function
  for (var project in this.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace(
      "%data%", this.projects[project].title);

    var formattedProjectDates = HTMLprojectDates.replace(
      "%dataFrom%", this.projects[project].dates.start);
    if (this.projects[project].dates.end === "") {
      formattedProjectDates = formattedProjectDates.replace("%dataTo%", "");
    }
    else {
      formattedProjectDates = formattedProjectDates.replace("%dataTo%",
        " - " + this.projects[project].dates.end);
    }

    var formattedProjectDescr = HTMLprojectDescription.replace(
      "%data%", this.projects[project].description);

    $(".project-entry:last").append(formattedProjectTitle
      + formattedProjectDates
      + formattedProjectDescr);

    if (this.projects[project].images.length > 0) {
      for (var image in this.projects[project].images) {
        var formattedProjectImage = HTMLprojectImage.replace(
          "%data%", this.projects[project].images[image]);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  }
};

projects.display(); // Run display() function

/*
Education
*/
var education = { // JSON formatted data
  "schools": [
    {
      "name": "Cairns Language Center",
      "location": "Cairns, Australia",
      "degree": "Cambridge English: Advanced Certificate",
      "majors": ["English"
      ],
      "dates": {
        "end": "Dec-1992",
        "start": "Oct-1992"
      },
      "url": "http://www.clcaustralia.com/"
    },
    {
      "name": "Hochschule für Technik Rapperswil",
      "location": "Rapperswil, Switzerland",
      "degree": "Dipl. Ing. FH Elektrotechnik",
      "majors": [
        "Information Technology",
        "Signal Processing",
        "Control Theory"
      ],
      "dates": {
        "end": "1991",
        "start": "1987"
      },
      "url": "http://www.hsr.ch"
    },
    {
      "name": "Swiss Air Force",
      "location": "Dubendorf, Switzerland",
      "degree": "Electronics Technician",
      "majors": [
        "Electronics"
      ],
      "dates": {
        "end": "1981",
        "start": "1985"
      },
      "url": "http://www.lw.admin.ch/internet/luftwaffe/en/home.html"
    }
  ],
  "onlineCourses": [
    {
      "title": "Web Front-End Developer",
      "school": "Udacity",
      "dates": {
        "end": "March 2016",
        "start": "September 2015"
      },
      "url": "https://www.udacity.com"
    }
  ]
};

education.display = function() { // Define display() function
  for (var school in this.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace(
      "%data%", this.schools[school].name);

    var formattedSchoolDegree = HTMLschoolDegree.replace(
      "%data%", this.schools[school].degree);

    var formattedSchoolDates = HTMLschoolDates.replace(
      "%dataFrom%", this.schools[school].dates.start);
    if (this.schools[school].dates.end === "") {
      formattedSchoolDates = formattedSchoolDates.replace("%dataTo%", "");
    }
    else {
      formattedSchoolDates = formattedSchoolDates.replace("%dataTo%",
        " - " + this.schools[school].dates.end);
    }

    var formattedSchoolLocation = HTMLschoolLocation.replace(
      "%data%", this.schools[school].location);

    var majors = "";
    for (major in this.schools[school].majors) {
      majors += this.schools[school].majors[major] + ", ";
    }
    majors = majors.substring(0, majors.length-2);
    var formattedSchoolMajors = HTMLschoolMajors.replace(
      "%data%", majors);

    $(".education-entry:last").append(formattedSchoolName
      + formattedSchoolDegree
      + formattedSchoolDates
      + formattedSchoolLocation
      + formattedSchoolMajors);
  }
}

education.display(); // Run display() function

/*
Google Map.
*/
// Displays a Google map indicating the cities I've been educated and worked in
$("#mapDiv").append(googleMap);

// // TODO: Remove or comment when done with excercise; 23-Oct-2015/ais
// $("#main").append(internationalizeButton);

// /* Assumes the name format "firstname lastname". */
// function inName() {
//   var internationalizedName = bio.name.split(" ");
//   internationalizedName[0].charAt(0).toUpperCase() + internationalizedName.slice(1);
//   internationalizedName[1] = internationalizedName[1].toUpperCase();
//   return internationalizedName[0] + " " + internationalizedName[1];
// };
