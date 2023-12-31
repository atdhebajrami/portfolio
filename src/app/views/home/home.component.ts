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
  selectedLanguage: string = 'de';

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

  project = {
    title: "Sunny Hill Festival",
    platforms: [
      {
        title: "open-in-play-store",
        iconPath: "assets/icons/android_icon.svg",
        link: "https://play.google.com/store/apps/details?id=com.company.sunnyhillmobile&hl=en&gl=US"
      },
      {
        title: "open-in-app-store",
        iconPath: "assets/icons/apple_icon.svg",
        link: "https://apps.apple.com/al/app/sunny-hill-festival/id1634476298"
      },
    ],
    imagePath: "assets/icons/sunny_hill_festival_image.jpg",
    techStack: [
      "Node.js",
      "Express.js",
      "Typescript",
      "Javascript",
      "Angular",
      "Ionic",
      "Html",
      "Css",
      "Sass",
      "MySQL",
      "Firebase",
      "Amazon Web Services",
      "Git",
      "Gitlab",
    ],
  }

  contacts = [
    {
      title: "Instagram",
      iconPath: "assets/icons/instagram_icon.svg",
      link: "https://www.instagram.com/atdhebajramii/",
    },
    {
      title: "Facebook",
      iconPath: "assets/icons/facebook_icon.svg",
      link: "https://www.facebook.com/profile.php?id=100005978838474",
    },
    {
      title: "LinkedIn",
      iconPath: "assets/icons/linkedin_icon.svg",
      link: "https://www.linkedin.com/in/atdhe-bajrami-b970031b2",
    },
    {
      title: "GitHub",
      iconPath: "assets/icons/github_icon_2.svg",
      link: "https://www.github.com/atdhebajrami",
    },
    {
      title: "E-Mail",
      iconPath: "assets/icons/email_icon.svg",
      link: "mailto:atdheuaccounts@yahoo.com",
    },
  ]

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

  goToContact(){
    this.elementFourRef.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
  
}
