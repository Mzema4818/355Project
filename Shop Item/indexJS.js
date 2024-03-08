const toggles = document.querySelectorAll('.toggle')
const XS = document.querySelector('#XS')
const S = document.querySelector('#S')
const M = document.querySelector('#M')
const L = document.querySelector('#L')
const XL = document.querySelector('#XL')

const addToCart = document.getElementById("buttonSource");
const stars = document.getElementById("stars");

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))
let checkedOne = M;
M.checked = true;

function doTheTrick(theClickedOne) {
    if(!(XS.checked ^ S.checked ^ M.checked ^ L.checked ^ XL.checked)) {
        if(checkedOne === theClickedOne){
            checkedOne.checked = true;
            return;
        }

        if(checkedOne !== theClickedOne && checkedOne !== theClickedOne){
            checkedOne.checked = false;
            checkedOne = theClickedOne;
        }
    }
}

//this code checks if user uses history to get back to the page, if they do, then it resets all the checked boxes to default
window.addEventListener( "pageshow", function ( event ) {
    var historyTraversal = event.persisted || 
                           ( typeof window.performance != "undefined" && 
                                window.performance.navigation.type === 2 );
    if ( historyTraversal ) {
      // Handle page restore.
      //window.location.reload();
      XS.checked = false;
      S.checked = false;
      L.checked = false;
      XL.checked = false;
      M.checked = true
      checkedOne = M
    }
  });


function start(){
    XS.checked = false;
    S.checked = false;
    L.checked = false;
    XL.checked = false;
    
    const getStars = addToCart.name.split("  ");

    for(let i = 0; i < getStars[3]; i++){
        stars.children[i].classList.add("checked");
    }
}

function getStars(){
    stars.classList.add("checked");
}

function GetSize(){
    addToCart.name += "  " + checkedOne.id.toString();
    //console.log(addToCart.name);
    //checkedOne.id.toString();
}

const toasts = document.getElementById('toasts')

function createNotification(message = null, type = null) {
    //console.log("hi");
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : 'info')

    notif.innerHTML = message ? message : "<b>Added to Cart</b>";

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

