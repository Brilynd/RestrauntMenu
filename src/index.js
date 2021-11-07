import _ from 'lodash';
// import { title } from 'process';
import './style.css'
import greenPop from './icon.png';
import bluePop from './icon2.png';


function navbarDisplay() {
  const navbarDiv = document.createElement('div');
  navbarDiv.setAttribute("id","navbar")

  const rightNavbar = document.createElement('div');
  rightNavbar.setAttribute("id","rightNavbar")

  const navbarTitleContainer=document.createElement("div")
  navbarTitleContainer.setAttribute("class","titleContainer ")

  const navbarTitleOne=document.createElement('h3')
  navbarTitleOne.setAttribute("class","navbarTitleOne")
  navbarTitleOne.textContent="Quick"

  const navbarTitleTwo=document.createElement('h3')
  navbarTitleTwo.setAttribute("class","navbarTitleTwo")
  navbarTitleTwo.textContent=" Licks"

  const leftNavbar = document.createElement('div');
  leftNavbar.setAttribute("id","leftNavbar")

  const navbarUL=document.createElement("ul")
  navbarUL.setAttribute("id","navbarUl")

  const navbarMenu=document.createElement("li")
  navbarMenu.setAttribute("id","navbarMenu")
  navbarMenu.textContent="Menu"

 const  navbarStore=document.createElement("li")
  navbarStore.setAttribute("id","navbarStore")
  navbarStore.textContent="Store Locator"

 const navbarOrder=document.createElement("li")
  navbarOrder.setAttribute("id","navbarOrder")
  navbarOrder.textContent="Order Now"

 const myIcon = new Image();
 myIcon.src = greenPop;

  navbarDiv.appendChild(rightNavbar)
  rightNavbar.appendChild(navbarTitleContainer)
  rightNavbar.appendChild(myIcon);
  navbarTitleContainer.appendChild(navbarTitleOne)
  navbarTitleContainer.appendChild(navbarTitleTwo)
  navbarDiv.appendChild(leftNavbar)
  leftNavbar.appendChild(navbarUL)
  navbarUL.appendChild(navbarMenu)
  navbarUL.appendChild(navbarStore)
  navbarUL.appendChild(navbarOrder)    

  
 
  return navbarDiv
}
document.body.appendChild(navbarDisplay());
function homepageBody() {
  const bodyContainer=document.createElement("div")
  bodyContainer.setAttribute("id","bodyContainer")

  const bodyLeft= document.createElement("div")
  bodyLeft.setAttribute("class","bodyLeft")

  const BodyTextSpanOne= document.createElement("span")
  BodyTextSpanOne.setAttribute("class","BodyText")
  BodyTextSpanOne.textContent=`Hungry for `

  const BodyTextSpanTwo = document.createElement("span")
  BodyTextSpanTwo.setAttribute("class","BodyTextRed")
  BodyTextSpanTwo.textContent=` Popscicles `

  const BodyTextSpanThree = document.createElement("span")
  BodyTextSpanThree.setAttribute("class","BodyText")
  BodyTextSpanThree.textContent = "in a rush try Quick"

  const BodyTextSpanFour = document.createElement("span")
  BodyTextSpanFour.setAttribute("class","BodyTextGreen")
  BodyTextSpanFour.textContent=` Licks`

  const BodyTextSpanFive = document.createElement("span")
  BodyTextSpanFive.setAttribute("class","BodyText")
  BodyTextSpanFive.textContent=` today`

  const bodyParagraph = document.createElement("p")
  bodyParagraph.setAttribute("class","BodyP")
  bodyParagraph.textContent = "We deliver to almost anywhere inside the states in minutes"

  const bodyButton = document.createElement("button")
  bodyButton.setAttribute("id","bodyButton")
  bodyButton.textContent= "PLACE ORDER"

  const bodyRight=document.createElement("div")
  bodyRight.setAttribute("class","bodyRight")

  const GreenPopscicle = new Image();
  GreenPopscicle.src = greenPop;


  bodyContainer.appendChild(bodyLeft)
  bodyContainer.appendChild(bodyRight)
  bodyLeft.appendChild(BodyTextSpanOne)
  bodyLeft.appendChild(BodyTextSpanTwo)
  bodyLeft.appendChild(BodyTextSpanThree)
  bodyLeft.appendChild(BodyTextSpanFour)
  bodyLeft.appendChild(BodyTextSpanFive)
  bodyLeft.appendChild(bodyParagraph)
  bodyLeft.appendChild(bodyButton)
  bodyRight.appendChild(GreenPopscicle)
  return bodyContainer
}
document.body.appendChild(homepageBody());




function MenuSelection() {
  const GreenPopscicle = new Image();
  GreenPopscicle.src = greenPop;

  var BluePopscicle = new Image();
  BluePopscicle.src = bluePop;

  var SecondBluePopscicle = new Image();
  SecondBluePopscicle.src = bluePop;

  var pageRemove = document.body;
  if (pageRemove.childElementCount>=2){
    pageRemove.removeChild(pageRemove.lastChild);
  }


  
  const MenuButtonSet=document.getElementById("navbarMenu")
  MenuButtonSet.setAttribute("class","menuSelected")

  const menuList= document.createElement("div")
  menuList.setAttribute("class","menuList")

  //ITEM ONE

  const menuItemOne=document.createElement("div")
  menuItemOne.setAttribute("id","menuItemOne")

  const menuItemOneTitle=document.createElement("h4")
  menuItemOneTitle.setAttribute("id","itemOneTitle")
  menuItemOneTitle.textContent="GREEN POPSCICLE"

  const menuItemOnePrice=document.createElement("p")
  menuItemOnePrice.setAttribute("id","itemOnePrice")
  menuItemOnePrice.textContent="$5"

  const menuBtnBuyOne=document.createElement("button")
  menuBtnBuyOne.setAttribute("id","btnBuy")
  menuBtnBuyOne.textContent="BUY"
  const menuBtnSaveOne=document.createElement("button")
  menuBtnSaveOne.setAttribute("id","btnSave")
  menuBtnSaveOne.textContent="SAVE"
  //ITEM TWO

  const menuItemTwo=document.createElement("div")
  menuItemTwo.setAttribute("id","menuItemTwo")

  const menuItemTwoTitle=document.createElement("h4")
  menuItemTwoTitle.setAttribute("id","itemOneTitle")
  menuItemTwoTitle.textContent="BLUE POPSCICLE"

  const menuItemTwoPrice=document.createElement("p")
  menuItemTwoPrice.setAttribute("id","itemOnePrice")
  menuItemTwoPrice.textContent="$5"

  const menuBtnBuyTwo=document.createElement("button")
  menuBtnBuyTwo.setAttribute("id","btnBuy")
  menuBtnBuyTwo.textContent="BUY"

  const menuBtnSaveTwo=document.createElement("button")
  menuBtnSaveTwo.setAttribute("id","btnSave")
  menuBtnSaveTwo.textContent="SAVE"

  //ITEM THREE

  const menuItemThree=document.createElement("div")
  menuItemThree.setAttribute("id","menuItemThree")

  const menuItemThreeTitle=document.createElement("h4")
  menuItemThreeTitle.setAttribute("id","itemOneTitle")
  menuItemThreeTitle.textContent="BLUE POPSCICLE"

  const menuItemThreePrice=document.createElement("p")
  menuItemThreePrice.setAttribute("id","itemOnePrice")
  menuItemThreePrice.textContent="$5"
  const menuBtnBuyThree=document.createElement("button")
  menuBtnBuyThree.setAttribute("id","btnBuy")
  menuBtnBuyThree.textContent="BUY"

  const menuBtnSaveThree=document.createElement("button")
  menuBtnSaveThree.setAttribute("id","btnSave")
  menuBtnSaveThree.textContent="SAVE"

  //APPENDING

  menuList.appendChild(menuItemOne)
  menuItemOne.appendChild(GreenPopscicle)
  menuItemOne.appendChild(menuItemOneTitle)
  menuItemOne.appendChild(menuItemOnePrice)
  menuItemOne.appendChild(menuBtnBuyOne)
  menuItemOne.appendChild(menuBtnSaveOne)

  menuList.appendChild(menuItemTwo)
  menuItemTwo.appendChild(BluePopscicle)
  menuItemTwo.appendChild(menuItemTwoTitle)
  menuItemTwo.appendChild(menuItemTwoPrice)
  menuItemTwo.appendChild(menuBtnBuyTwo)
  menuItemTwo.appendChild(menuBtnSaveTwo)

  menuList.appendChild(menuItemThree)
  menuItemThree.appendChild(SecondBluePopscicle)
  menuItemThree.appendChild(menuItemThreeTitle)
  menuItemThree.appendChild(menuItemThreePrice)
  menuItemThree.appendChild(menuBtnBuyThree)
  menuItemThree.appendChild(menuBtnSaveThree)


  return menuList
  
}

function StoreLocator() {

  const GreenPopscicle = new Image();
  GreenPopscicle.src = greenPop;

  var BluePopscicle = new Image();
  BluePopscicle.src = bluePop;

  var pageRemove = document.body;
  if (pageRemove.childElementCount>=2){
    pageRemove.removeChild(pageRemove.lastChild);
  }

  const storeLocatorContainer=document.createElement("div")



  const storeLocatorRight=document.createElement("div")

  const storeLocatorLeft=document.createElement("div")

  const storeBanner=document.createElement("h1")
  storeBanner.textContent="STORE LOCATOR"
  const storeLocatorDiv=document.createElement("div")
  
  const locationOne=document.createElement("div")

  const  locationOneAway=document.createElement("p")
    locationOneAway.textContent=".63mi"
    const  locationOneAddress=document.createElement("p")
    locationOneAddress.textContent="FAKE ADDRESS"
    const  locationOneBtn=document.createElement("button")
    locationOneBtn.textContent="GO"

    const locationTwo=document.createElement("div")

    const locationTwoAway=document.createElement("p")
  locationTwoAway.textContent="1.43 mi"
  const locationTwoAddress=document.createElement("p")
  locationTwoAddress.textContent="FAKE ADDRESS"
  const  locationTwoBtn=document.createElement("button")
  locationTwoBtn.textContent="GO"

  const  locationThree=document.createElement("div")

  const  locationThreeAway=document.createElement("p")
  locationThreeAway.textContent="2.22mi"
  const  locationThreeAddress=document.createElement("p")
  locationThreeAddress.textContent="FAKE ADDRESS"
  const  locationThreeBtn=document.createElement("button")
  locationThreeBtn.textContent="GO"

  const  locationFour=document.createElement("div")

  const  locationFourAway=document.createElement("p")
  locationFourAway.textContent="3.67mi"
  const  locationFourAddress=document.createElement("p")
  locationFourAddress.textContent="FAKE ADDRESS"
  const  locationFourBtn=document.createElement("button")
  locationFourBtn.textContent="GO"

  const  locationFive=document.createElement("div")

  const  locationFiveAway=document.createElement("p")
  locationFiveAway.textContent="3.88mi"
  const  locationFiveAddress=document.createElement("p")
  locationFiveAddress.textContent="FAKE ADDRESS"
  const  locationFiveBtn=document.createElement("button")
  locationFiveBtn.textContent="GO"

  const  locationSix=document.createElement("div")

  const  locationSixAway=document.createElement("p")
  locationSixAway.textContent="4.5mi"
  const  locationSixAddress=document.createElement("p")
  locationSixAddress.textContent="FAKE ADDRESS"
  const  locationSixBtn=document.createElement("button")
  locationSixBtn.textContent="GO"

  storeLocatorContainer.appendChild(storeLocatorLeft)
  storeLocatorContainer.appendChild(storeLocatorRight)

  storeLocatorLeft.appendChild(storeBanner)
  storeLocatorLeft.appendChild(storeLocatorDiv)
  storeLocatorDiv.appendChild(locationOne)


  storeLocatorDiv.appendChild(locationOne)
locationOne.appendChild(locationOneAway)
locationOne.appendChild(locationOneAddress)
locationOne.appendChild(locationOneBtn)

  storeLocatorDiv.appendChild(locationTwo)
locationTwo.appendChild(locationTwoAway)
locationTwo.appendChild(locationTwoAddress)
locationTwo.appendChild(locationTwoBtn)

  storeLocatorDiv.appendChild(locationThree)
locationThree.appendChild(locationThreeAway)
locationThree.appendChild(locationThreeAddress)
locationThree.appendChild(locationThreeBtn)

  storeLocatorDiv.appendChild(locationFour)
  locationFour.appendChild(locationFourAway)
  locationFour.appendChild(locationFourAddress)
  locationFour.appendChild(locationFourBtn)


  storeLocatorDiv.appendChild(locationFive)
  locationFive.appendChild(locationFiveAway)
  locationFive.appendChild(locationFiveAddress)
  locationFive.appendChild(locationFiveBtn)

  storeLocatorDiv.appendChild(locationSix)
  locationSix.appendChild(locationSixAway)
  locationSix.appendChild(locationSixAddress)
  locationSix.appendChild(locationSixBtn)

  return storeLocatorContainer

}




document.getElementById("navbarMenu").addEventListener("click",function() {
  document.body.appendChild(MenuSelection())

  var div =  document.querySelectorAll('li');
  div.forEach(index => {
    index.classList.remove('menuSelected');
  });
  

    const MenuButtonSet=document.getElementById("navbarMenu")
  MenuButtonSet.setAttribute("class","menuSelected")
})


document.getElementById("navbarStore").addEventListener("click",function() {
document.body.appendChild(StoreLocator())


  var div =  document.querySelectorAll('li');
  div.forEach(index => {
    index.classList.remove('menuSelected');
  });
  
  var storeBtn= document.getElementById("navbarStore")
  storeBtn.setAttribute("class","menuSelected");
})



document.getElementById("rightNavbar").addEventListener("click",function() {
  var pageRemove = document.body;
  if (pageRemove.childElementCount>=2){
    pageRemove.removeChild(pageRemove.lastChild);
  }
  var div =  document.querySelectorAll('li');
  div.forEach(index => {
    index.classList.remove('menuSelected');
  });
  document.body.appendChild(homepageBody())
})


