import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common'; 
import { LayoutserviceService } from 'src/app/services/layoutservice.service';
import { ApiService } from '../../../services/api.service';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private layoutServiceService: LayoutserviceService,
    private loader:LoaderService
  ) {
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

  ngOnInit() {}

  ngOnDestroy() {
    // this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getActiveRoutes() {
    let segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[1];
    this.currentActiveSubMenu = segments[2];
    this.currentActiveSubOfSub = segments[3];
  }
}
