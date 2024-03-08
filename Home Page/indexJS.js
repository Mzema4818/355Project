let flipTime = 10000;
let interval = 200;
const cardItems = ['images/Suit Top/SuitTop1.png', "images/Suit Top/SuitTop2.png", "images/Suit Top/SuitTop3.png", "images/Suit Top/SuitTop4.png", "images/Suit Top/SuitTop5.png", "images/Suit Top/SuitTop6.png",
                   "images/Suit Bottom/SuitBottom1.png", "images/Suit Bottom/SuitBottom2.png", "images/Suit Bottom/SuitBottom3.png", "images/Suit Bottom/SuitBottom4.png", "images/Suit Bottom/SuitBottom5.png", "images/Suit Bottom/SuitBottom6.png",
                   "images/Shirts/Shirt1.png", "images/Shirts/Shirt2.png", "images/Shirts/Shirt3.png", "images/Shirts/Shirt4.png", "images/Shirts/Shirt5.png", "images/Shirts/Shirt6.png",
                   "images/Shoes/Shoes1.png", "images/Shoes/Shoes2.png", "images/Shoes/Shoes3.png", "images/Shoes/Shoes4.png", "images/Shoes/Shoes5.png", "images/Shoes/Shoes6.png",
                   "images/Accessories/Accessory1.png", "images/Accessories/Accessory2.png", "images/Accessories/Accessory3.png", "images/Accessories/Accessory4.png", "images/Accessories/Accessory5.png", "images/Accessories/Accessory6.png", "images/Accessories/Accessory7.png"]

//randomizes inital selection of card images
Randomize('card1', 'card2');
Randomize('card3', 'card4');
Randomize('card5', 'card6');
Randomize('card7', 'card8');

let num1 = 0; let num2 = 0; let num3 = 0; let num4 = 0;
setInterval(CardFliper, flipTime, 'flip1', 'card1', 'card2', num1, null, null, null);
setInterval(CardFliper, flipTime, 'flip2', 'card3', 'card4', null, num2, null, null);
setInterval(CardFliper, flipTime, 'flip3', 'card5', 'card6', null, null, num3, null);
setInterval(CardFliper, flipTime, 'flip4', 'card7', 'card8', null, null, null, num4);

function CardFliper(flip, fade1, fade2, card1, card2, card3, card4){
    let myFLip = document.getElementById(flip);
    let cardFlip1 = document.getElementById(fade1);
    let cardFlip2 = document.getElementById(fade2);
    const cardSet = [cardFlip1, cardFlip2];

    myFLip.classList.toggle('hover');
    setTimeout(function(){ //Have to do this stupuid thing with num1 - num 4 and all these if statements because of variable shadowing in Javascript
        let num = getRandomInt(cardItems.length);

        if(card1 != null){
            cardSet[num1].src = cardItems[num] //"../" + 
            num1++;
            if(num1 == 2) num1 = 0;
        }else if(card2 != null){
            cardSet[num2].src = cardItems[num]
            num2++;
            if(num2 == 2) num2 = 0;
        }else if(card3 != null){
            cardSet[num3].src = cardItems[num]
            num3++;
            if(num3 == 2) num3 = 0;
        }else if(card4 != null){
            cardSet[num4].src = cardItems[num]
            num4++;
            if(num4 == 2) num4 = 0;
        }
    }, 3000); //300 because after card flips, it changes the back of the card (pretty sure 300 works because animation time is 0.3s)
}

function Randomize(fade1, fade2){
    let num1 = getRandomInt(cardItems.length);
    let num2 = getRandomInt(cardItems.length);

    let cardFlip1 = document.getElementById(fade1);
    let cardFlip2 = document.getElementById(fade2);
    cardFlip1.src = cardItems[num1]
    cardFlip2.src = cardItems[num2]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function StartSearch(){
    pages = ["Suit Tops/index.html", "Suit Bottoms/index.html","Shirts/index.html", "Shoes/index.html", "Accessories/index.html"]
    window.open(pages[getRandomInt(pages.length)], "_self");
}


const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    text:
      "I ordered a suit for my brother's wedding, and I couldn't be happier with the quality and fit. The fabric feels luxurious, and the attention to detail is impressive. The customer service team was also incredibly helpful throughout the entire process. Highly recommend!",
  },
  {
    name: 'June Cha',
    text:
      'As someone whos always been skeptical about buying clothes online, I was pleasantly surprised by my experience with this website. The sizing guide was spot-on, and the suit arrived promptly and looked even better in person. Will definitely be a returning customer.',
  },
  {
    name: 'Iida Niskanen',
    text:
      "I've been searching for a suit for an upcoming job interview, and I'm so glad I found this website. They have a wide selection of styles and colors to choose from, and the prices are very reasonable for the quality you get. Plus, the ordering process was quick and easy.",
  },
  {
    name: 'Renee Sims',
    text:
      "I've purchased multiple suits from this website, and they've all fit me perfectly right out of the box. The attention to detail in the tailoring is evident, and I always receive compliments whenever I wear them. I wouldn't hesitate to recommend this site to anyone in need of a great suit.",
  },
  {
    name: 'Jonathan Nunfiez',
    text:
      "I had a few questions about sizing before placing my order, so I reached out to customer service via live chat. The representative was extremely helpful and guided me through the process, ensuring I got the right fit. It's refreshing to receive such personalized assistance online.",
  },
  {
    name: 'Sasha Ho',
    text:
      'I needed a suit for a last-minute event, so I was relieved when I found this website offering expedited shipping. The suit arrived just in time, and it looked fantastic. Plus, the return process was a breeze when I needed to exchange for a different size. Overall, a great shopping experience.',
  },
  {
    name: 'Veeti Seppanen',
    text:
      'What sets this website apart from others is the attention to detail in every aspect of the shopping experience. From the user-friendly interface to the quality of the suits themselves, its clear that they prioritize customer satisfaction. Ill definitely be a repeat customer',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, text } = testimonials[idx]

  testimonial.innerHTML = text
  username.innerHTML = name

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)