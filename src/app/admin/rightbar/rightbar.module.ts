import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RightbarRoutingModule } from './rightbar-routing.module';
import { RightComponent } from './right/right.component';
import { WeatherComponent } from './weather/weather.component';
import { InboxComponent } from './inbox/inbox.component';
import { ChatComponent } from './chat/chat.component';
import { CalenderComponent } from './calender/calender.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { ReiumbersementComponent } from './reiumbersement/reiumbersement.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    RightComponent,
    WeatherComponent,
    InboxComponent,
    ChatComponent,
    CalenderComponent,
    FilemanagerComponent,
    ReiumbersementComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    RightbarRoutingModule
  ]
})
export class RightbarModule { }
