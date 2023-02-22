import { Component, ViewChild, ChangeDetectorRef, Inject } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutserviceService } from '../../../services/layoutservice.service';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public title = 'iconic';
  public isStopLoading: boolean = false;
  public showNotifMenu: boolean = false;
  public showToggleMenu: boolean = false;
  public navTab: string = 'menu';
  public currentActiveMenu = 'light';
  public currentActiveSubMenu!: string;
  public currentActiveSubOfSub!: string;
  public themeClass: string = 'theme-cyan';
  public themeDarkClass: string = 'light';
  public themeHighContClass: string = '';
  public smallScreenMenu = '';
  public darkClass: string = '';
  private ngUnsubscribe = new Subject();
  public rtlClass: string = '';
  public themeFontClass: string = 'font-nunito';
  public isHorizontalMenu: boolean = false;
  isRightToggle!: string;
  visible = false;
  username!:any;
  isadmin = true;
  isaccounts = true;
  isinternational=true; 
  ngDoCheck(): void {
    let role=sessionStorage.getItem('role');
    if (role ==='admin') {
      this.isadmin = true;
    }else{
      this.isadmin = false;
    } 
    if(role==='accounts'){
      this.isaccounts=true;
    }else{
      this.isaccounts=false
    }
    if(role==='international'){
      this.isinternational=true;
    }else{
      this.isinternational=false
    }
  }
  toggleCollapse(): void {
    this.visible = this.visible;
  } isOpened = false;
  isTogOpened = false;
  isTogggOpened = false;
  isToggleOpened = false;
  isTogleOpened = false;
  isDropOpened = false;
  isCustOpened = false;
  isExtraOpened = false;
  isUserOpened = false;
  isSupOpened = false;
  drop(){
    this.isDropOpened = !this.isDropOpened;
  }
  custdrop(){
    this.isCustOpened = !this.isCustOpened;
  }
  supdrop(){
    this.isSupOpened = !this.isSupOpened;
  }
  extradrop(){
    this.isExtraOpened = !this.isExtraOpened;
  }
  userdrop(){
    this.isUserOpened = !this.isUserOpened;
  }
  toog(){
    this.isOpened = !this.isOpened;
  }
  toogg(){
    this.isTogOpened = !this.isTogOpened;
  }
  tooggl(){
    this.isTogggOpened = !this.isTogggOpened;
  }
  tooggle(){
    this.isToggleOpened = !this.isToggleOpened;
  }
  toogle(){
    this.isTogleOpened = !this.isTogleOpened;
  } 
  public currentActiveNav: string = '';
  public isRtl: boolean = false;
  public menuClass: string = ''; 
  hmenu: boolean = false; 
  isShowLeftBar!: String;
  

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service:AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private layoutServiceService: LayoutserviceService
  ) {
     
    let role=sessionStorage.getItem('role');
    if(role==='admin'){
      this.isadmin=true;
    } if(role==='accounts'){
      this.isaccounts=true
    }
    if(role==='international'){
      this.isinternational=true;
    }
    this.username = role
    this.router.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.getActiveRoutes();
        }
      });

    this.layoutServiceService.isHorizontalMenuSubject
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isHorizontalMenu: boolean) => {
        this.isHorizontalMenu = isHorizontalMenu;
      });

    this.layoutServiceService.leftBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isLeftBar: string) => {
        this.isShowLeftBar = isLeftBar;
      });

    this.layoutServiceService.menuClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((menuClass: string) => {
        this.menuClass = menuClass;
      });

    this.layoutServiceService.rtlClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rtlClass: string) => {
        this.rtlClass = rtlClass;
      });
    this.layoutServiceService.themeClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((themeClass: string) => {
        this.themeClass = themeClass;
      });

    this.layoutServiceService.themeDarkClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((themeDarkClass: string) => {
        this.themeDarkClass = themeDarkClass;
      });

    this.layoutServiceService.rtlClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rtlClass: string) => {
        this.rtlClass = rtlClass;
      });

    this.layoutServiceService.themeHighConChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((highContClass: string) => {
        this.themeHighContClass = highContClass;
      });

    this.layoutServiceService.themeFontFamilyChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((fontClass: string) => {
        this.themeFontClass = fontClass;
      });
      this.router.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isStopLoading = false;
          this.getActiveRoutes();
        }
      });

    this.layoutServiceService.isHorizontalMenuSubject
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isHorizontalMenu: boolean) => {
        this.isHorizontalMenu = isHorizontalMenu;
        if (isHorizontalMenu) {
          this.document.body.classList.add('h_menu');
        } else {
          this.document.body.classList.remove('h_menu');
        }
        this.cdr.detectChanges();
      });

    this.layoutServiceService.themeClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((themeClass: string) => {
        this.themeClass = themeClass;
      });

    this.layoutServiceService.themeDarkClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((themeDarkClass: string) => {
        this.themeDarkClass = themeDarkClass;
      });

    this.layoutServiceService.rtlClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rtlClass: string) => {
        this.rtlClass = rtlClass;
      });

    this.layoutServiceService.themeHighConChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((highContClass: string) => {
        this.themeHighContClass = highContClass;
      });

    this.layoutServiceService.themeFontFamilyChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((fontClass: string) => {
        this.themeFontClass = fontClass;
      });

    this.layoutServiceService.rightBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rightToggle: string) => {
        if (rightToggle === 'right_icon_toggle') {
          this.document.body.classList.add('right_icon_toggle');
        } else {
          this.document.body.classList.remove('right_icon_toggle');
        }
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

   

  toggleLeftBar() {
    this.layoutServiceService.leftBarToggleMenu();
  }

  getActiveRoutes() {
    let segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[1];
    this.currentActiveSubMenu = segments[2];
    this.currentActiveSubOfSub = segments[3];
    this.cdr.detectChanges();
  }

  changeNavTab(tab: string) {
    if (this.currentActiveMenu != tab) {
      this.currentActiveMenu = tab;
    } else {
      this.currentActiveMenu = '';
    }
  }

  changeNavSubTab(tab: string) {
    if (this.currentActiveSubMenu != tab) {
      this.currentActiveSubMenu = tab;
    } else {
      this.currentActiveSubMenu = '';
    }
  }

  toggleRtlLayout() {
    this.layoutServiceService.loaderShow();
    let that = this;
    if (this.isRtl) {
      this.isRtl = false;
      this.layoutServiceService.rtlChange('');
    } else {
      this.isRtl = true;
      this.layoutServiceService.rtlChange('rtl');
    }
    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  toggleMenu() {
    this.layoutServiceService.loaderShow();
    let that = this;

    this.layoutServiceService.toggleLeftBar();

    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  toggleHMenu() {}

  topMenuToggle() {
    this.layoutServiceService.loaderShow();
    let that = this;
    if (this.menuClass == 'index2') {
      this.layoutServiceService.menuChange('');
    } else {
      this.layoutServiceService.menuChange('index2');
    }
    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  changeTheme(theme: string) {
    this.layoutServiceService.themeChange(theme);
  }

  changeDarkClass(event: { target: { checked: any; }; }) {
    if (event.target.checked) {
      this.layoutServiceService.themeDarkChange('dark');
      this.layoutServiceService.themeHightCont('');
    } else {
      this.layoutServiceService.themeDarkChange('light');
    }
  }

  changeRtlClass(event: { target: { checked: any; }; }) {
    if (event.target.checked) {
      this.isRtl = true;
      this.layoutServiceService.rtlChange('rtl_mode');
    } else {
      this.isRtl = false;
      this.layoutServiceService.rtlChange('');
    }
  }

  changeHighContClass(event: { target: { checked: any; }; }) {
    if (event.target.checked) {
      this.layoutServiceService.themeDarkChange('');
      this.layoutServiceService.themeHightCont('high-contrast');
    } else {
      this.layoutServiceService.themeHightCont('');
    }
  }

  onItemChange(value: string) {
    this.layoutServiceService.themeFontFamily(value);
  }

  toggleHorizontalMenu() {
    this.layoutServiceService.toggleHorizontalMenu();
  }
}
