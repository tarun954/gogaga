import { TreeviewMakerService } from '../services/treeview-maker.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';


@Component({
  selector: 'ico-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css'],
  providers: [TreeviewMakerService],
})
export class TreeviewComponent   {


}

