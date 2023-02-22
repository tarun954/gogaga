import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CalenderComponent } from './calender/calender.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { InboxComponent } from './inbox/inbox.component';
import { ReiumbersementComponent } from './reiumbersement/reiumbersement.component';
import { RightComponent } from './right/right.component';
import { WeatherComponent } from './weather/weather.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path:'',
    component: RightComponent,
    children: [
      {path: '',redirectTo:'right',pathMatch:'full'},
      {
        path: 'blog',
        component: BlogComponent,
        data: { title: ':: Gogaga Holidays :: AddItinerary ::' },
      },
      {
        path: 'chat',
        component: ChatComponent,
        data: { title: ':: Gogaga Holidays :: AddItinerary ::' },
      },
      {
        path: 'calender',
        component: CalenderComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'filemanager',
        component: FilemanagerComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'inbox',
        component: InboxComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      }, 
      {
        path: 'reiumbersements',
        component: ReiumbersementComponent,
        data: { title: ':: Gogaga Holidays :: Pending ::' },
      },  
      {
        path:'weather',
        component:WeatherComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RightbarRoutingModule { }
