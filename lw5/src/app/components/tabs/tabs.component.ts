import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  tabs:TabComponent[] = [];

  addTab(tab:TabComponent) {
    if (!this.tabs.length)
      tab.selected = true;

    this.tabs.push(tab);
  }

  selectTab(tab:TabComponent) {
    this.tabs.map((tab) => { tab.selected = false; })
    
    tab.selected = true;
  }
}
