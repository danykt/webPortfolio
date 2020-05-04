
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
    		heading: "Portafolio",
    		date: "Enero-Marzo  2020",
            description: "Esta applicacion fue implementada usando HTML5/CSS3 y JavaScript. Usando recursos importantes tales como animaciones Jquery y tambien handlebar temples para renderizar los projectos. La pagina es completamente ajustable a cualquier tipo de pantalla.",
            link: "https://github.com/danykt/WebsitePortfolio",
    		technologyIcons:[{iconName: "html5", iconColor: "orange"},{iconName: "css3", iconColor: "blue"},{iconName: "js icon", iconColor: "yellow"}]
    	},
        {
    		id: "react",
    		heading: "Applicacion web en React",
    		date: "Augosto-Diciembre 2019",
            description: "Disenio e Implementacion de la web app para Edry Delivery como prototipo. Usando React.js Redux y Node.js, la applicacion fue diseniada para consumir el servidor Express.js. Las interfaces fueron disneñadas para differente tipo de usarios.",
            link: "https://github.com/danykt/ReactWebApp-Edfry",
    		technologyIcons:[{iconName: "react", iconColor: "teal"}, {iconName: "node icon", iconColor: "green"}]
    	},
    	{
    		id: "server",
    		heading: "Servidor web Express",
    		date: "Febrero-Agosto 2019",
            description: "Implementacion de servidor web usando Express.js MongoDB y Node.js. Las diferentes rutas fueron disne&Ntilde;adas para satisfacer una compania de entregos. Clientes, Choferes y Manager fueron assignados diferente tipo de acesso. El servidor es completamente funcional y fue subido a heroku cloud services",
            link: "https://github.com/danykt/ExpressWebServer",
    		technologyIcons:[{iconName: "cloud", iconColor: "black"}, {iconName: "node icon", iconColor: "green"},{iconName:"git square", iconColor: "red"}, {iconName: "github", iconColor:"black"}, {iconName: "database", iconColor:"black"}]
    	},
        {
    		id: "csharp",
    		heading: "Applicacion Futbol",
    		date: "Septiembre-Diciembre 2017",
            description: "En el curso de programmacion avansada. Implemente una aplicacion de futbol donde calificabas a tus top diez jugadores. El projecto fue hecho con Xamarin form y servicios Azure para guardar la informacion de los jugadores. La idea era crear un systema de login para guardar las calificaciones.",
            link: "https://github.com/danykt/SoccerAPP",
    		technologyIcons:[{iconName: "windows", iconColor: "blue"},{iconName: "cloud upload", iconColor: "black"},{iconName: "file code", iconColor: "black"}]
    	},
    	{
    		id: "bookFinder",
    		heading: "SPU buscador de libros",
    		date: "Enero-Junio 2017",
            description: "En este projecto nuestro grupo fue asignado la tarea de disneñar e implementar una applicacion web donde los estudiantes venderian sus libros usados en cursos anteriormente. La pagina fue echa usando PHP HMTL/CSS para las interface y MySQL para la base de datos.",
            link: "https://github.com/TeamJakku/SPU-Book-Finder",
    		technologyIcons:[{iconName: "php", iconColor: "purple"},{iconName: "css3", iconColor: "blue"},{iconName: "html5", iconColor: "orange"},{iconName: "database", iconColor: "black"}]
    	},
    	{
    		id: "structures",
    		heading: "Estructuras de Datos",
    		date: "Enero-Marzo 2017",
            description: "En el curso de estructuras de datos avansados. Programe differentes tipos de estructuras tales como listas enlasadas, Arboles, grafos y listas usando c++. La idea de estos projectos era para entender como estas trabajaban internamente y como podrian aplicarce en la vida real",
            link: "https://github.com/danykt/DataStructureQueue",
    		technologyIcons:[{iconName: "share alternate", iconColor: "black"},{iconName: "file code", iconColor: "black"}]
    	},
    	{
    		id: "android",
    		heading: "Applicaciones android",
    		date: "Enero-Mazo 2017",
            description: "En el curso de desarrolo de applicaciones fuimos dados la tarea de desarrollar applicaciones usando Java junto con Android Studio. Durante estos projectos aprendimos como usar las librerias de google para implmentar servicios de google tales como mapas y herramientas de traduccion.",
            link: "https://github.com/danykt/AndroidApp",
    		technologyIcons:[{iconName: "android", iconColor: "green"},{iconName: "coffee", iconColor: "orange"},{iconName: "google play", iconColor: "blue"}]
    	},
    	{
    		id: "micro",
    		heading: "Microcontroladores",
    		date: "Marzo-Junio 2017",
            description: "En el curso de microcontroladores fuimos dados la tarea de assablar y programmar el microcontrolador PSOC4 para varios projectos usando el lenguaje C. La programmacion de un microcontrolador requiere differente tipo de programmacion tales como tablas de busqueda para hacer un microcontrolador tan efficiente como se posible",
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

