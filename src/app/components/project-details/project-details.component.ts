import { Component, HostListener, OnInit } from '@angular/core';
import projects from '../../resources/projects/projectsList.json'
import SwiperCore, { SwiperOptions, EffectCoverflow, Navigation, Pagination, Mousewheel } from 'swiper/core';
import { NavigationStart, Router } from '@angular/router';
import ProjectType from 'src/app/resources/projects/projectType';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import 'hammerjs';

export let browserRefresh = false;

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Mousewheel]);

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  localStorageProject: any
  projectCookie: any;
  projects: ProjectType[] = projects
  config: SwiperOptions = {
    slidesPerView: 9,
    spaceBetween: 0,
    slideToClickedSlide: true,
    slideActiveClass: 'swiper-slide-active'
  };
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor(private router: Router) {
   }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if(event.target.innerWidth >= 1700)
        this.config = { slidesPerView: 9 };
      if(event.target.innerWidth < 1700)
        this.config = { slidesPerView: 8 };
      if(event.target.innerWidth < 1500)
        this.config = { slidesPerView: 7 };
      if(event.target.innerWidth < 1380)
        this.config = { slidesPerView: 9 };
      if(event.target.innerWidth < 1250)
        this.config = { slidesPerView: 8 };
      if(event.target.innerWidth < 1180)
        this.config = { slidesPerView: 7 };
      if(event.target.innerWidth < 980)
        this.config = { slidesPerView: 6 };
      if(event.target.innerWidth < 780)
        this.config = { slidesPerView: 5 };
      if(event.target.innerWidth < 651)
        this.config = { slidesPerView: 3 };
      if(event.target.innerWidth < 480)
        this.config = { slidesPerView: 3 };
    }

  ngOnInit() {
    this.handleReceivedData()
    this.handleError()
    this.checkWindowSize()
    setTimeout(() => this.setCurrentSlide(), 300);
    this.setGallery()
    this.getCookie()
  }

  ngOnDestroy(){

  }

  getCookie() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`project=`);
    this.projectCookie = JSON.parse(parts.pop().split(';').shift())
  }
  
  createCookie(project){
    let expiration = new Date()
    expiration.setDate(expiration.getDate() + 1)
    document.cookie = `project= ${JSON.stringify(project)}; expires=` + expiration.toUTCString()
  }

  deleteCookie(){
    document.cookie = "project=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  handleReceivedData(){
    this.localStorageProject = localStorage.getItem('project')
    this.localStorageProject = JSON.parse(this.localStorageProject)

    if(this.localStorageProject == null){
      this.getCookie()
      this.localStorageProject = this.projectCookie
    }
  }
  
  //Uncaught TypeError: Cannot read properties of null (reading 'classList'): header tag from home ?!
  handleError(){
    window.onerror = () => {
      return true
    }
  }

  selectProject(project){
    localStorage.setItem('project', JSON.stringify(project))
    
    this.removePreviousSlide()
    this.handleReceivedData()
    this.deleteCookie()
    this.createCookie(project)
    this.getCookie()
    this.setCurrentSlide()    
    this.setGallery()
  }

  setCurrentSlide(){
    const currentSlide = document.getElementById(this.localStorageProject.id)
    currentSlide.classList.add('currentSlide')
    
    const currentSlideTitle = document.getElementById(this.localStorageProject.title)
    currentSlideTitle.style.opacity = '1'
  }
  removePreviousSlide(){
    const currentSlide = document.getElementById(this.localStorageProject.id)
    currentSlide.classList.remove('currentSlide')
    
    const currentSlideTitle = document.getElementById(this.localStorageProject.title)
    currentSlideTitle.style.opacity = '0'
  }

  checkWindowSize(){
    switch (true) {
      case window.innerWidth >= 1700:
        this.config = { slidesPerView: 9 };
        break;
    
      case window.innerWidth < 1700 && window.innerWidth >= 1500:
        this.config = { slidesPerView: 8 };
        break;

      case window.innerWidth < 1500 && window.innerWidth >= 1380:
        this.config = { slidesPerView: 7 };
        break;
    
      case window.innerWidth < 1380 && window.innerWidth >= 1250:
        this.config = { slidesPerView: 9 };
        break;
    
      case window.innerWidth < 1250 && window.innerWidth >= 1180:
        this.config = { slidesPerView: 8 };
        break;
    
      case window.innerWidth < 1180 && window.innerWidth >= 980:
        this.config = { slidesPerView: 7 };
        break;
    
      case window.innerWidth < 980 && window.innerWidth >= 780:
        this.config = { slidesPerView: 6 };
        break;
    
      case window.innerWidth < 780 && window.innerWidth >= 768:
        this.config = { slidesPerView: 5 };
        break;
      case window.innerWidth < 768 && window.innerWidth >= 651:
        this.config = { slidesPerView: 5 };
        break;
      case window.innerWidth < 651:
        this.config = { slidesPerView: 3 };
        break;
    
      default:
        break;
    }
  }
  setGallery(){
    this.galleryOptions = [
      {
        width: '100%',
        height: '190%',
        imageSwipe: true,
        imageArrowsAutoHide: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 6000,
        imageInfinityMove: true,
        imageAutoPlayPauseOnHover: true,
        thumbnailsColumns: 4,
        thumbnailsPercent: 25.5,
        thumbnailsSwipe: true,
        thumbnailsArrowsAutoHide: true,
        previewCloseOnEsc: true,
        previewCloseOnClick: true,
        previewSwipe: true,
        previewInfinityMove: true,
        previewKeyboardNavigation: true,
        previewZoom: true,
        previewZoomStep: 0.4,
        previewDownload: true,
        previewBullets: true,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        closeIcon: 'fa fa-times',
        downloadIcon: 'fa fa-download',
        zoomInIcon: 'fa fa-search-plus',
        zoomOutIcon: 'fa fa-search-minus',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 2300,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1380,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 3300,
        width: '100%',
        height: '1200px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 4200,
        width: '100%',
        height: '1500px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1000,
        thumbnailsPercent: 25.5,
      },
      {
        breakpoint: 480,
        preview: true
      }
    ];
    this.galleryImages = [ ]
    this.localStorageProject.gallery.forEach(galleryImage => {
      let currentImage =
        {
          small: galleryImage,
          medium: galleryImage,
          big: galleryImage
        }
      this.galleryImages.push(currentImage)
    });
  }

}
