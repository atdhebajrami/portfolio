import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged } from 'rxjs';
import { map } from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('elementOne') elementOneRef: ElementRef;
  @ViewChild('elementTwo') elementTwoRef: ElementRef;
  @ViewChild('elementThree') elementThreeRef: ElementRef;
  @ViewChild('elementFour') elementFourRef: ElementRef;

  currentPosition: number = 0;

  languages = ['en', 'de'];
  selectedLanguage: string = 'en';

  skills = [
    {
      title: "Node.js",
      iconPath: "assets/icons/nodejs_icon.svg",
    },
    {
      title: "Nest.js",
      iconPath: "assets/icons/nestjs_icon.svg",
    },
    {
      title: "Express.js",
      iconPath: "assets/icons/express_icon.svg",
    },
    {
      title: "Typescript",
      iconPath: "assets/icons/typescript_icon.svg",
    },
    {
      title: "Javascript",
      iconPath: "assets/icons/javascript_icon.svg",
    },
    {
      title: "Angular",
      iconPath: "assets/icons/angular_icon.svg",
    },
    {
      title: "Ionic",
      iconPath: "assets/icons/ionic_icon.svg",
    },
    {
      title: "Java",
      iconPath: "assets/icons/java_icon.svg",
    },
    {
      title: "Html",
      iconPath: "assets/icons/html_icon.svg",
    },
    {
      title: "Css",
      iconPath: "assets/icons/css_icon.svg",
    },
    {
      title: "Sass",
      iconPath: "assets/icons/sass_icon.svg",
    },
    {
      title: "Tailwind Css",
      iconPath: "assets/icons/tailwindcss_icon.svg",
    },
    {
      title: "MySQL",
      iconPath: "assets/icons/mysql_icon.svg",
    },
    {
      title: "MongoDB",
      iconPath: "assets/icons/mongodb_icon.svg",
    },
    {
      title: "Firebase",
      iconPath: "assets/icons/firebase_icon.svg",
    },
    {
      title: "Socket.IO",
      iconPath: "assets/icons/socketio_icon.svg",
    },
    {
      title: "Amazon Web Services",
      iconPath: "assets/icons/aws_icon.svg",
    },
    {
      title: "Git",
      iconPath: "assets/icons/git_icon.svg",
    },
    {
      title: "Github",
      iconPath: "assets/icons/github_icon.svg",
    },
    {
      title: "Gitlab",
      iconPath: "assets/icons/gitlab_icon.svg",
    },
  ];

  constructor(
    private translate: TranslateService,
  ){
    this.selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.addLangs(this.languages);
    this.translate.use(this.selectedLanguage);
  }
  
  setLanguage(language: string){
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage);
    localStorage.setItem('selectedLanguage', this.selectedLanguage);
  }

  onScroll(event: any){
    const elementOne = this.elementOneRef.nativeElement.getBoundingClientRect().top;
    const elementTwo = this.elementTwoRef.nativeElement.getBoundingClientRect().top;
    const elementThree = this.elementThreeRef.nativeElement.getBoundingClientRect().top;
    const elementFour = this.elementFourRef.nativeElement.getBoundingClientRect().top;

    var array = [elementOne, elementTwo, elementThree, elementFour];
    var goal = 0;
    
    var closest = array.reduce(function(prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });

    if(closest == elementOne){
      this.currentPosition = 0;
    }
    if(closest == elementTwo){
      this.currentPosition = 1;
    }
    if(closest == elementThree){
      this.currentPosition = 2;
    }
    if(closest == elementFour){
      this.currentPosition = 3;
    }
  }

  scrollToElement(element){
    element.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  
}
