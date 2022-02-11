import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

import emailjs, { init } from '@emailjs/browser';
init("user_Fz4boP7tBN8xAWZ4iKxGt");

import Typewriter from 't-writer.js'
import VanillaTilt from 'vanilla-tilt';

import skills from '../../resources/skills/skillList.json'
import experiences from '../../resources/experience/experienceList.json'
import projects from '../../resources/projects/projectsList.json'
import SkillType from "../../resources/skills/skillType";
import ExperienceType from '../../resources/experience/experienceType'
import ProjectType from 'src/app/resources/projects/projectType';

import SwiperCore, { SwiperOptions, EffectCoverflow, Navigation, Pagination, Swiper } from 'swiper/core';
import { ToastrService } from 'ngx-toastr';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  backgroundImage = "../../../assets/bg.jpg"
  logo = "../../../assets/CBoantaLogo.png"
  potion = "../../../assets/aspects/potion.gif"
  passions = "../../../assets/aspects/passions.gif"
  texts: string[] = ['Programmer', 'Web Developer', 'Freelancer', 'Engineer', 'Weeb']
  index = 0
  currentText = ''
  letter = ''
  menuOpen: boolean = false
  aboutMe: string[] = ["", "Hello, I am Boanta Ionut Cristian, I graduated Computers and Information Technology and Information Systems for e-Business Master's Degree within the Faculty of Automation, Computers and Electronics.", "I am a positive, enthusiastic, self driven full stack web developer, fascinated by technology. The hunger for knowledge and determination to turn information into action has contributed to my personal development and helped to learn how to handle things on my own.", "I like to build an app from scratch, because it gives the oportunity of customization, thus I am more focused on front-end and user interface."]
  skills: SkillType[] = skills
  experiences: ExperienceType[] = experiences
  projects: ProjectType[] = projects
  resumeLink = "../../../assets/CV_Boanta_Cristian.doc"
  socialMedia = {
      facebookLink: "https://www.facebook.com/cristi.boanta.7/",
      instagramLink: "https://www.instagram.com/boanta_cristian/?hl=ro",
      youtubeLink: "https://www.youtube.com/channel/UC0nDxqcbkehTAEx3cK7ZaZg",
      linkedinLink: "https://www.linkedin.com/in/cristi-boanta-6a9237218/",
      githubLink: "https://github.com/BoantaCristian"
    }
  swipeConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 200,
    grabCursor: true,
    centeredSlides: true,
    navigation: true,
    pagination: { clickable: true },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 80,
      stretch: 50,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    }
  };
  projectsSwipeConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 200,
    grabCursor: true,
    centeredSlides: true,
    navigation: true,
    pagination: { clickable: true, dynamicBullets: true },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 80,
      stretch: 50,
      depth: 200,
      modifier: 1,
      slideShadows: false
    }
  };

  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  })
 
  constructor(private formBuilder: FormBuilder, private scrollDispatcher: ScrollDispatcher, private router: Router, private toastr: ToastrService) { }

  @HostListener('document:mouseover', ['$event'])
    mouseover(event) {
        if(event.target.matches('.visitCard')) {
            VanillaTilt.init(document.getElementById("tilt"), {
              glare: true,
            });
        }
        if(event.target.matches('.skillCard')) {
          skills.forEach(element => {
            VanillaTilt.init(document.getElementById(element.id), {
              glare: true,
            });
          });
        }
        if(event.target.matches('.experienceCard')) {
          experiences.forEach(element => {
            VanillaTilt.init(document.getElementById(element.title), {
              glare: true,
            });
          });
        }
        if(event.target.matches('.skillCardWrapper')) {
          var skillLevels = document.getElementsByName("skillsLevel")
            skillLevels.forEach(element => {
              element.style.width = element.textContent
              element.animate([
              { width: 0 },
              { width: element.textContent }
            ], {
              duration: 1000
            });
          }); 
        }
        if(event.target.matches('.contactCard')) {
          VanillaTilt.init(document.getElementById("contactCard"), {
            glare: true,
          });
        }
    }
    
  @HostListener('window:scroll', ['$event'])
    skewEffectListener(event) {
        // console.log("host listener",window.scrollY)
        
    }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      
      var textArea = document.querySelector("textarea")
      if(window.innerWidth <= 650)
        textArea.style.minHeight = '90px'
      if(window.innerWidth > 650 && window.innerWidth <= 767)
        textArea.style.minHeight = '60px'
      if(event.target.innerWidth > 767 && event.target.innerWidth <= 962)
        textArea.style.minHeight = '60px !important'
      if(event.target.innerWidth > 962 && event.target.innerWidth <= 1280)
        textArea.style.minHeight = '74px !important'

      // for some reason here method this.closeMenu() isn't called
      if(this.menuOpen) {
        var header = document.querySelector("header")
        const menuBtn = document.querySelector('.menu-btn');
        header.classList.toggle("scrolled", window.scrollY > 100)
        menuBtn.classList.remove('open');
        this.menuOpen = false;
        document.getElementById('toggleMenu').click();
      }
    }
    @HostListener('window:orientationchange', ['$event'])
    onOrientationChange(event) {
      
      var textArea = document.querySelector("textarea")
      if(window.innerWidth <= 650)
        textArea.style.minHeight = '90px !important'
      if(event.target.innerWidth > 650 && event.target.innerWidth <= 767)
        textArea.style.minHeight = '60px !important'
      if(event.target.innerWidth > 767 && event.target.innerWidth <= 962)
        textArea.style.minHeight = '60px !important'
      if(event.target.innerWidth > 962 && event.target.innerWidth <= 1280)
        textArea.style.minHeight = '74px !important'

      // for some reason here method this.closeMenu() isn't called
      if(this.menuOpen) {
        var header = document.querySelector("header")
        const menuBtn = document.querySelector('.menu-btn');
        header.classList.toggle("scrolled", window.scrollY > 100)
        menuBtn.classList.remove('open');
        this.menuOpen = false;
        document.getElementById('toggleMenu').click();
      }
    }

  ngOnInit() {
    this.typeWriter()
    this.activeLinksForSection()
    this.getY()
    // this.skewScroll()
  }
  
  ngAfterViewInit(){
    this.progressBar()
    this.navBarScroll()
    this.hideIndicatorOnScroll()
    this.showScrollTop()
  }
  
  ngAfterViewChecked(){
    
  }
  ngOnDestroy(){

  }
  

  sendEmail(){
    var tempParams = {
      from_name: this.contactForm.value.name,
      to_name: 'Cristi',
      subject: this.contactForm.value.subject,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    }
    emailjs.send('service_rt95r4p', 'template_yxbeg3m',tempParams).then(
      res => {
          this.toastr.success(`Keep in touch ${this.contactForm.value.name}`, 'Email sent!');
          this.contactForm.reset()
      },
      err => {
        console.log(err)
        this.toastr.error('Something went wrong.', 'Failed!');
      }
    )
  }

  openProjectDetails(project){
    this.router.navigateByUrl('projects')
    localStorage.setItem('project', JSON.stringify(project))
    this.createCookie(project)
  }

  createCookie(project){
    let expiration = new Date()
    expiration.setDate(expiration.getDate() + 1)
    document.cookie = `project= ${JSON.stringify(project)}; expires=` + expiration.toUTCString()
  }

  progressBar(){
    var skillLevels = document.getElementsByName("skillsLevel")
    skillLevels.forEach(element => {
      element.style.width = element.textContent
      element.animate([
        { width: 0 },
        { width: element.textContent }
      ], {
        duration: 1000
      });
    });
  }
  
  currentPosition = 0
  getY(){
    this.currentPosition = window.scrollY
    setTimeout(() => {
      this.getY()
    }, 30);
  }

  skewScroll(){
    if(window.innerWidth >= 768 && this.stopSkew == false){

      const about = document.getElementById('about')
      const projects = document.getElementById('projects')
      const contact = document.getElementById('contact')
      
      const maxSkew = 20
      const maxRotate = 10
      
      const newPosition = window.scrollY
      let dif = newPosition - this.currentPosition
      
      let skew = dif * .6
      let rotate = dif * .15
      
      if(skew > maxSkew || skew < -maxSkew){
        if(skew > 0)
        skew = maxSkew
        if(skew < 0)
        skew = -maxSkew
      }
      
      if(rotate > maxRotate || rotate < -maxRotate){
        if(rotate > 0)
        rotate = maxRotate
        if(rotate < 0)
        rotate = -maxRotate
      }
      
      about.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`
      projects.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`
      contact.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`
      
      this.currentPosition = newPosition
      
      if(this.stopSkew)
      return 0
      
      setTimeout(() => {
        this.skewScroll()
      }, 30);
    }
  }

  stopSkew = false
  callSkewScroll(){
    this.stopSkew = false
    this.skewScroll()
    setTimeout(() => {
      this.stopSkew = true
      
      const about = document.getElementById('about')
      const projects = document.getElementById('projects')
      const contact = document.getElementById('contact')
      
      about.style.transform = `skewY(0deg) rotateY(0deg)`
      projects.style.transform = `skewY(0deg) rotateY(0deg)`
      contact.style.transform = `skewY(0deg) rotateY(0deg)`
    }, 1200);
  }

  scrollTop(){
    window.scroll(0,0)
  }

  navBarScroll(){
    this.scrollDispatcher.scrolled()
      .subscribe(event => {
        var header = document.querySelector("header")
        if(!this.menuOpen)
          header.classList.toggle("scrolled", window.scrollY > 100)
      });
  }

  activeLinksForSection(){
    const headerLi = document.querySelectorAll('header ul li a');
    const sections = document.querySelectorAll('section');

    this.scrollDispatcher.scrolled()
      .subscribe( event => {
        let index = sections.length;

        while(--index && window.scrollY + 300 < sections[index].offsetTop) {}
        
        headerLi.forEach((link) => link.classList.remove('active'));
        headerLi[index].classList.add('active');

      })
  }

  hideIndicatorOnScroll(){
    this.scrollDispatcher.scrolled()
      .subscribe(event => {
        var indicator = document.getElementById("scrollIndicator")
        indicator.classList.toggle('hide', window.scrollY > 100)
      });
  }

  showScrollTop(){
    this.scrollDispatcher.scrolled()
      .subscribe(event => {
        var topButton = document.getElementById("backTopButton")
        topButton.classList.toggle('show', window.scrollY > 890)
      });
  }

  typeWriter(){
    const writer = new Typewriter(document.querySelector('.typeWriter'), {
      loop: true,
      deleteSpeed: 50,
      typeColor: 'rgb(158, 192, 243)'
    })

    writer.removeCursor()

    this.texts.forEach(word => {
      writer
      .type(word)
      .rest(800)
      .clear()
      
      .start()
    });
  }

  toggleMenu(){
    var header = document.querySelector("header")
    header.classList.remove("scrolled")
    const menuBtn = document.querySelector('.menu-btn');
    if(!this.menuOpen) {
      menuBtn.classList.add('open');
      this.menuOpen = true;
      header.classList.remove("scrolled")
    } else {
      header.classList.toggle("scrolled", window.scrollY > 100)
      menuBtn.classList.remove('open');
      this.menuOpen = false;
    }
  }

  closeMenu(){
      const menuBtn = document.querySelector('.menu-btn');
      var header = document.querySelector("header")
      if(!this.menuOpen) {
        //do nothing because the menu is already closed
      } else {
        header.classList.toggle("scrolled", window.scrollY > 100)
        menuBtn.classList.remove('open');
        this.menuOpen = false;
        document.getElementById('toggleMenu').click();
      }
    }
}
