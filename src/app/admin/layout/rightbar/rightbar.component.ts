import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'; 
import { LayoutserviceService } from 'src/app/services/layoutservice.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent {
  private ngUnsubscribe = new Subject();
  isRightToggle!: string;

  constructor(private layoutServiceService: LayoutserviceService) {
    this.layoutServiceService.rightBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rightToggle) => {
        this.isRightToggle = rightToggle;
      });
  }

  ngOnInit(): void {}

  rightToggle() {
    this.layoutServiceService.rightBarMenuHide();
  }
}
