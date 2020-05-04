
const context = {
    items:[
       {
       	imgUrl: "../../Resources/Fortin.jpg",
       	title: 'BACKGROUND',
        id: 'background',
        imgId: 'fortin',
       	description: 'Hello!, my name is Cesar Labastida and I am originally from a little town called fortin de las flores in the state of Veracruz Mexico. '
       },
       {
        imgUrl: "../../Resources/spu.jpg",
        title: "EDUCATION",
        id: 'education',
        imgId: 'spu',
        description: "I graduated from Seattle Pacific Univesity on December 2019. I recieved a bachelor's of Science degree with a major in CSC"
       },
       {
       	imgUrl: "../../Resources/Stadium.jpg",
       	title: 'PASSION',
        id: 'passions',
        imgId: 'stadium',
       	description: "Besides programming, I also like to play and watch futbol. Otherwise know as The Beautiful Game"
       },
       {
        imgUrl: "../../Resources/books.jpg",
        title: 'HOBBIES',
        id: 'hobbies',
        imgId: 'books',
        description: " During my spare time I like to read philosophy books and drink coffee when it's rainy and ride my bike when sunny"
       }
    ]
};



const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('about-me-section').innerHTML = compiledHtml;


const descriptions = []; 

context.items.forEach(function(item){
  let description = document.getElementById(item.id);
  descriptions.push(description);
});

const images = [];

context.items.forEach(function(item){
  let image = document.getElementById(item.imgId);
  images.push(image);
})




let togleVisibility = (visible, hidden) =>{
  console.log("#" +visible.id);
  console.log("#" +hidden.id);

  visible.style.visibility = "visible";
  hidden.style.visibility = "visible";

  $(document).ready(function(){
    $("#" + visible.id).fadeTo("slow", .7);
    $("#" + hidden.id).fadeTo("slow", 0);
  });
  
}

let hideVisibility = (hidden1, hidden2) =>{
  hidden1.style.visibility = "hidden";
  hidden2.style.visibility = "hidden";
}

let assignEvent = (section) =>{
  section.addEventListener('mouseover', event =>{
    if(window.innerWidth < 768){

      togleVisibility(event.target.querySelector('p'), event.target.querySelector('h3'));
    }
    else{
      hideVisibility(event.target.querySelector('p'), event.target.querySelector('h3'));

    }
    
  });
  section.addEventListener('mouseleave', event=>{
    if(window.innerWidth < 768){
      togleVisibility(event.target.querySelector('h3'), event.target.querySelector('p'));

    }else{
      hideVisibility(event.target.querySelector('p'), event.target.querySelector('h3'));
    }
    
  });
}


let isSectionTouched = false;
let sectionId;

let renderHeading = (paragraph) =>{
  paragraph.innerHTML =  event.target.querySelector('h3').innerHTML;
  paragraph.style.fontSize = "390%";
  paragraph.style.textAlign = "center";
  isSectionTouched = false;
}

let renderDescription = (paragraph, description) =>{
  paragraph.innerHTML = description;
  paragraph.style.fontSize = "200%";
  paragraph.style.textAlign = "left";
  isSectionTouched = true;
}

let assignMobileEvents = (section) =>{
    section.addEventListener('touchstart', event =>{
    if(window.innerWidth < 770){
      let paragraph = event.target.querySelector('p');
      paragraph.style.visibility = "visible";
      if(isSectionTouched){
        let section = document.getElementById(sectionId);
        renderHeading(paragraph);
      }else{
        let description = context.items[context.items.findIndex(x => x.imgId === section.id)].description;
        renderDescription(paragraph, description);
        sectionId = event.target.id;
      }

    }
    
  }, false);
}


//THESE ARE FOR THE NAVIGATION TAB ALL THE WAY TO TOP
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
  console.log(navigationElements);
  for(let i=0; i< navigationElements.length; i++){
    setHoverListener(navigationElements[i]);
  }
}

setNavigationListeners();


//THESE IS TO HIDE THE SIDE DESCRIPTIONS AND RENDER DESCRIPTION INSIDE IMAGE


let addBackgroundImage = (image) =>{
  let background = document.getElementById(image.imgId);
  background.style.backgroundImage = "url('"+image.imgUrl+"')";
}

let isDeviceMobile = () => {return window.orientation > -1}



let processImagesListeners = () =>{
  images.forEach(image => {
 // if(!isDeviceMobile())
    assignEvent(image);
  // else
  //   assignMobileEvents(image);
});
}

processImagesListeners();

let isSectionVisible = false;
let resize = () =>{
  
  window.addEventListener('resize', event=>{
    if(window.innerWidth >= 766 && !isSectionVisible){
      let descriptions = document.getElementsByClassName("section-description");
      for(description of descriptions){
        description.style.display = "none";
        description.querySelector('h3').style.display = "none";
        description.querySelector('p').style.display = "none";
      }
      isSectionVisible = true;
    }else
    {
    let descriptions = document.getElementsByClassName("section-description");
      for(description of descriptions){
        description.style.display = "block";
        description.querySelector('h3').style.display = "block";
        description.querySelector('p').style.display = "block";
      }
      isSectionVisible = false;
    }
  })
}

resize();

context.items.forEach(item => addBackgroundImage(item));


let runPopupAnimation = (imageId) =>{
  $(document).ready(function(){
    
    $("#" + imageId).stop(true,true).animate({
      width: "+=15px",
      height: "+=15px"
    }, 100);
  });
}

let runPopdownAnimation = (imageId) =>{
   $(document).ready(function(){
    
    $("#" + imageId).stop(true, true).animate({
      width: "-=15px",
      height: "-=15px"
    }, 100, function(){
      let image = document.getElementById(imageId);
      let url = image.style.backgroundImage;
      //console.log(image.style.backgroundImage);
       image.style = "";
       image.style.backgroundImage = url;
      // document.getElementById(imageId).classList.add(".section-image");
    });
  });
}


let setPopUpImageListner = (image)=>{

  $(document).ready(function(){
    $("#"+image.id).mouseenter(function(){
      if(window.innerWidth >= 766){
      runPopupAnimation(image.id);
    }
  });

  $(document).ready(function(){
    $("#"+image.id).mouseleave(function(){
      if(window.innerWidth >= 766){
      runPopdownAnimation(image.id);
    }
    });
  });
 
  })
}

//EVENTS FOR LARGE ITEMS
let proccessLargeItemsEvents = () =>{
  let images = document.getElementsByClassName("section-image");

  for(let i=0; i<images.length; i++){
    setPopUpImageListner(images[i]);
  }
}

proccessLargeItemsEvents();

