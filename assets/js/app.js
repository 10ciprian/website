const homeContent = document.querySelector('.home__content');
const hamburger = document.querySelector('.hamburger');
const imgHamburger = document.querySelector('.hamburger img');
const elements = document.querySelector('.elements');
const navbar = document.querySelector('.navbar');
const progressBar = document.querySelectorAll('.progressbar__fill');
const topBtn = document.querySelector('.goTop');
const services = document.querySelector('.services');
const skills = document.querySelector('.skills');
const texts = document.querySelectorAll('.text');
const portfolio = document.querySelector('.portfolio');
const contact = document.querySelector('.contact');

for(let i=0; i<progressBar.length; i++){
      if(i===0){
          progressBar[0].style.width="90%";
      }else if(i==1){
          progressBar[1].style.width="75%";
      }else{
          progressBar[2].style.width="75%";
      }
}




hamburger.addEventListener('click', (e)=>{
    e.preventDefault();
    if(hamburger.classList == 'hamburger active'){
        navbar.classList.remove('active');
        homeContent.classList.remove('active');
        hamburger.classList.remove('active');
        elements.classList.remove('active');
        imgHamburger.src="assets/img/hamburger.png";
        skills.classList.remove('active');
        services.classList.remove('active');
        portfolio.classList.remove('active');
        contact.classList.remove('active');
    }else{

        services.classList.add('active');
        skills.classList.add('active');
        navbar.classList.add('active');
        homeContent.classList.add('active');
        elements.classList.add('active');
        hamburger.classList.add('active')
        portfolio.classList.add('active');
        imgHamburger.src="assets/img/close.png";
        contact.classList.add('active');
    }
    

    
})
window.onscroll = ()=>{
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
        topBtn.classList.add('active');
    }
    else{
        topBtn.classList.remove('active');

    }
}
topBtn.addEventListener('click', ()=>{
    navbar.scrollIntoView();
})




for(let i=0; i<elements.children.length; i++){
    elements.children[i].addEventListener('click', (e)=>{
        e.preventDefault();
        navbar.classList.remove('active');
        homeContent.classList.remove('active');
        hamburger.classList.remove('active');
        elements.classList.remove('active');
        imgHamburger.src="assets/img/hamburger.png";
        skills.classList.remove('active');
        services.classList.remove('active');
        portfolio.classList.remove('active');
        contact.classList.remove('active');
        if(i==0){
            navbar.scrollIntoView();
        }else if(i==1){
             services.scrollIntoView();
        }else if(i==2){
            skills.scrollIntoView();
        }else if(i==3){
            portfolio.scrollIntoView();
        }else if(i==4){
            contact.scrollIntoView();
        }

    })
}
for(let i=0; i<texts.length; i++){
    if(i==0){
        texts[i].addEventListener('click', (e)=>{
            e.preventDefault();
            window.open('https://10ciprian.github.io/portfolio.github.io/')
        })
    }else{
        texts[i].addEventListener('click', (e)=>{
            e.preventDefault();
            window.open('https://10ciprian.github.io/instatweet.github.io/');
        })
    }
}