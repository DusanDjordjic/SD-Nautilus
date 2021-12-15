import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from './sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sidebarSubscription = new Subscription();
  sidebarVisible = false;
  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.sidebarSubscription.add(
      this.sidebarService.$isSidebarVisible.subscribe((visibility) => {
        this.sidebarVisible = visibility;
      })
    );
  }
  ngOnDestroy(): void {
    this.sidebarSubscription.unsubscribe();
  }
}
