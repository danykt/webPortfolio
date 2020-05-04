
const context = {
    languages:[
    	{ref: "android", name: "Java", iconClass: "file code icon"},
        {ref: "structures",name: "C++",iconClass: "file code icon"},
       	{ref: "csharp",name: "C#",iconClass: "file code icon"},
       	{ref: "micro",name: "C",iconClass: "file code icon"},
       	{ref: "webApp",name: "HTML",iconClass: "html5 icon"},
       	{ref: "webApp",name: "CSS",iconClass: "css3 alternate icon"},
       	{ref: "react",name: "JavaScript",iconClass: "node js icon"},
       	{ref: "server",name: "Github",iconClass: "github icon"},
       	{ref: "bookFinder",name: "SQL",iconClass: "database icon"},
       	{ref: "react",name: "React.js",iconClass: "react icon"},
       	{ref: "csharp",name: ".NET",iconClass: "windows icon"},
       	{ ref: "android", name: "Android", iconClass: "android icon"},
       	{ref: "server",name: "Git",iconClass: "git icon"},
       	{ref: "server",name: "Heroku",iconClass: "cloud upload icon"},
       	{ref: "server",name: "MongoDB",iconClass: "database icon"},
       	{ ref: "csharp", name: "Azure", iconClass: "cloud upload icon"},
       	{ref: "react",name: "Node.js",iconClass: "node icon"},
       	{ref: "python",name: "Python",iconClass: "python icon"}
    ],

    projects: [
    	{
    		id: "webApp",
    		heading: "Web App Portfolio",
    		date: "January-March  2020",
    		description: "This web app was build using HTML/CSS and JavaScript. Using important resources such as Jquery animations as well as handlebars template to render each project. The web app is fully responsive to any device or screen size. Ico alarcon",
            link: "https://github.com/danykt/WebsitePortfolio",
    		technologyIcons:[{iconName: "html5", iconColor: "orange"},{iconName: "css3", iconColor: "blue"},{iconName: "js icon", iconColor: "yellow"}]
    	},
        {
    		id: "react",
    		heading: "React Web App",
    		date: "August-December 2019",
    		description: "Design and Implmentation of Edfry Delivery web app prototype. Using React.js Redux and Node.js, the web app was designed to consume the Express.js web api. The interfaces were designed for the  different types of Users: Customer, Driver and Manager.",
            link: "https://github.com/danykt/ReactWebApp-Edfry",
    		technologyIcons:[{iconName: "react", iconColor: "teal"}, {iconName: "node icon", iconColor: "green"}]
    	},
    	{
    		id: "server",
    		heading: "Express Web Server",
    		date: "February-August 2019",
    		description: "Implementation of web server  using Express.js, MongoDB and Node.js. Different route were designed to satisfy a delivery company's needs. Customer, Drivers and Manager were assigned different permission access. Server is fully functional and deployed to heroku cloud services",
            link: "https://github.com/danykt/ExpressWebServer",
    		technologyIcons:[{iconName: "cloud", iconColor: "black"}, {iconName: "node icon", iconColor: "green"},{iconName:"git square", iconColor: "red"}, {iconName: "github", iconColor:"black"}, {iconName: "database", iconColor:"black"}]
    	},
        {
    		id: "csharp",
    		heading: "Soccer App",
    		date: "September-December 2017",
    		description: "In Advance programming course. I implemented a soccer app where users give ratings to different soccer players. The project was built with Xamarin forms and Azure services to retrieve soccer players information. The idea was to save players ratings once the user had signed in.",
            link: "https://github.com/danykt/SoccerAPP",
    		technologyIcons:[{iconName: "windows", iconColor: "blue"},{iconName: "cloud upload", iconColor: "black"},{iconName: "file code", iconColor: "black"}]
    	},
    	{
    		id: "bookFinder",
    		heading: "Book Finder SPU",
    		date: "January-June 2017",
    		description: "In this project our group was given the task to design and implement a web app where students would sell their unwanted textbooks. The web app was built using PHP/HTML and CSS for the front end part and MySQL for the Database.",
            link: "https://github.com/TeamJakku/SPU-Book-Finder",
    		technologyIcons:[{iconName: "php", iconColor: "purple"},{iconName: "css3", iconColor: "blue"},{iconName: "html5", iconColor: "orange"},{iconName: "database", iconColor: "black"}]
    	},
    	{
    		id: "structures",
    		heading: "Data Structures",
    		date: "January-March 2017",
    		description: "In data structures II course I programmed different types of data sturctures such as linked list, trees stacks and queues using c++. The idea of these projects was to understand how data structues worked internally and how they could be applied to real world scenerios.",
            link: "https://github.com/danykt/DataStructureQueue",
    		technologyIcons:[{iconName: "share alternate", iconColor: "black"},{iconName: "file code", iconColor: "black"}]
    	},
    	{
    		id: "android",
    		heading: "Android App",
    		date: "January-March 2017",
    		description: "In app develoment course we were given the tasks to develop apps using Java along with Android Studio. During these project we learn how to use Google libraries in order to implement google services such maps or google translation tools.",
            link: "https://github.com/danykt/AndroidApp",
    		technologyIcons:[{iconName: "android", iconColor: "green"},{iconName: "coffee", iconColor: "orange"},{iconName: "google play", iconColor: "blue"}]
    	},
    	{
    		id: "micro",
    		heading: "Microcontrollers",
    		date: "March-June 2017",
    		description: "In Microcontrollers system design we were assigned to assemble and program the PSOC4 microcontroller for various projects using C language. The programming of a microcontroller requires different techniques such as look up tables to make the microcontroller as efficient as possible.",
            link: "https://www.youtube.com/watch?v=ykFCnOzNMU4",
    		technologyIcons:[{iconName: "microchip", iconColor: "black"},{iconName: "file code", iconColor: "black"},{iconName: "youtube", iconColor: "red"}]
    	}

    ]

};



//TEMPLATE FOR DROPDOWN MENU
const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('dropdownIn').innerHTML = compiledHtml;

//TEMPLATE FOR PROJECTS
const templateElement2 = document.getElementById("template2HB");
const templateSource2 = templateElement2.innerHTML;
const template2 = Handlebars.compile(templateSource2);
const compiledHtml2 = template2(context);
document.getElementById('projects-board').innerHTML = compiledHtml2;


let dropdownVisible = false;
let hideVisibility = () =>{
	let dropdown = document.getElementById("dropdownIn");
	dropdown.style.display = "none";
	dropdownVisible = false;
}

let showVisibility = () =>{
	let dropdown = document.getElementById("dropdownIn");
	dropdown.style.display = "block";
	dropdownVisible = true;
}

let toggleVisibility = () => {
	let dropdown = document.getElementById("dropdownIn");
	if(dropdownVisible){
		hideVisibility();
	}else{
		showVisibility();
	}
}


let selectedProjectId = "";
let unselectProjectAnimation = (projectId) =>{
	$(document).ready(function(){
		var projectSection = $('#' + projectId);
		console.log(projectSection);
		$("#" +projectId).stop().animate({
			opacity: '.6',
			//outlineWidth: "0px"
		}, 300);
	});

}
let selectProjectAnimation = (projectId) =>{
	console.log("selected" + projectId);
	$(document).ready(function(){
		
		$("#" +projectId).stop().animate({
			opacity: '1',
			//outlineWidth: "3px"
		}, 300);
	});
}


let scrollToProjectAnimation = (projectId) =>{
    var target = document.getElementById(projectId);
    let offSet = target.offsetTop - 60;
    event.preventDefault();
     $('html, body').stop().animate({
            scrollTop: offSet
     }, 1000);
    
}

let selectLanguage = (languageId) =>{
	//let description = context.items[context.items.findIndex(x => x.imgId === section.id)].description;
	let languageName = context.languages[context.languages.findIndex(x => x.ref === languageId)].name;
	let input = document.getElementById("language-input");
	input.value = languageName;
	//HERE IS WHERE YOU WILL DEFINE SCROLL FUNCTION
}

let previousProjectId;
let setEventListener = (languageElement) =>{
	languageElement.addEventListener('click', event =>{
		var array = event.target.href.split('#');
		var id = array[array.length -1];
		selectLanguage(id);
		hideVisibility();
		scrollToProjectAnimation(id);
		unselectProjectAnimation(previousProjectId);
    	selectProjectAnimation(id);
    	previousProjectId = id;
	})
}

let processDropdownItemsEventListeners = () =>{
	let languageElements = document.getElementsByClassName('language');
	for(let i=0; i< languageElements.length; i++){
		setEventListener(languageElements[i]);
	}
}

processDropdownItemsEventListeners();


let processProject = (projectDiv) =>{
	projectDiv.addEventListener("mouseover", event =>{
		selectProjectAnimation(projectDiv.id);
	});
	projectDiv.addEventListener("mouseleave", event =>{
		unselectProjectAnimation(projectDiv.id);
	});
}

let proccessProjectsListeners = () =>{
	let projectElements = document.getElementsByClassName('project');
	for(let i=0; i<projectElements.length; i++){
		processProject(projectElements[i]);
	}
}

proccessProjectsListeners();


// let assignReferenceListeners = (projectLink) =>{
// 	projectLink.addEventListener("mouseover", event =>{
// 		event.target.style.backgroundColor = "black";
// 		event.target.style.color = "white";
// 	});
// 	projectLink.addEventListener("mouseleave", event =>{
// 		event.target.style.backgroundColor = "white";
// 		event.target.style.color = "black";
// 		let header = event.target.getElementsByTagName("h3")[0];
// 		header.style.backgroundColor = "white";
// 		header.style.color = "black";
// 	});
// }


// let setProjectLinkListeners = () =>{
// 	let projectLinks = document.getElementsByClassName('project-link');
// 	for(let i=0; i<projectLinks.length; i++){
// 		assignReferenceListeners(projectLinks[i]);
// 	}
// }

// setProjectLinkListeners();


let setHoverListener = (navigationElement) =>{
	navigationElement.addEventListener("mouseover", event => {
		let info = event.target.getElementsByClassName("link-info")[0];
		info.style.display = "block";
	});

	navigationElement.addEventListener("mouseleave", event => {
		let info = event.target.getElementsByClassName("link-info")[0];
		info.style.display = "none";
	});
}


let setNavigationListeners = () =>{
	let navigationElements = document.getElementsByClassName('navigation-link');
	for(let i=0; i< navigationElements.length; i++){
		setHoverListener(navigationElements[i]);
	}
}

setNavigationListeners();

var searchBar = document.getElementById("projects-bar");
console.log(searchBar.offsetTop)
var barOffset = searchBar.offsetTop;
let setSearchbarFixed = () => {
	if(window.pageYOffset >= barOffset)
	{
		searchBar.classList.add("stick");
		searchBar.style.opacity = '.8';
	}else{
		searchBar.classList.remove("stick");
		searchBar.style.opacity = '1';
	}
}


// let changeIconsSize = () =>{
// 	let icons = document.get
// }



//   window.addEventListener('resize', event=>{
//     if(window.innerWidth >= 769){
      
      
//     }
//     else
//     {
      
//     }
//   })
// }



window.onscroll = function() {setSearchbarFixed()}


function filterResults(){
	if(!dropdownVisible){
		showVisibility();
	}
	let input = document.getElementById("language-input");
	let upperCaseInput = input.value.toUpperCase();
    let dropdown = document.getElementById("dropdownIn");
    let languages = document.getElementsByClassName("language");
    for(let i=0; i<languages.length; i++){
    	console.log(languages[i]);
    	let textvalue = languages[i].textContent || languages[i].innerText;
    	if(textvalue.toUpperCase().indexOf(upperCaseInput) > -1)
    	{
    		languages[i].style.display = "";
    	}else{
    		languages[i].style.display = "none";
    	}
    }
}

