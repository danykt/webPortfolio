

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

let hasIncreased = false;
let runPopupAnimation = (sectionId) =>{
  $(document).ready(function(){
    
    $("#" + sectionId).stop(true,true).animate({
      fontSize: '20px'
    }, 300);
  });
}

let runPopdownAnimation = (sectionId) =>{
   $(document).ready(function(){
    
    $("#" + sectionId).stop(true, true).animate({
      fontSize: '16px'
    }, 300);
  });
}




let setContactHoverListener = (contactElement) =>{

  $(document).ready(function(){
    $("#"+contactElement.id).mouseenter(function(){
      runPopupAnimation(contactElement.id);
    })
  });

  $(document).ready(function(){
    $("#"+contactElement.id).mouseleave(function(){
      runPopdownAnimation(contactElement.id);
    });
  });
  // contactElement.addEventListener("mouseover", event => {
  //     contactElement.style.margin = "15px";
  //     runPopupAnimation(contactElement.id);
  // });

  // contactElement.addEventListener("mouseleave", event => {
  //   runPopdownAnimation(contactElement.id);
  //   hasIncreased = false;
  // });
}


let setContactHoverListeners = () =>{
  let contactItems = document.getElementsByClassName('contact-icon');
  for(let i=0; i< contactItems.length; i++){
    setContactHoverListener(contactItems[i]);
  }
}


setContactHoverListeners();