import { Component, OnDestroy, OnInit } from '@angular/core';
import { first, Subscription } from 'rxjs';
import { SidebarService } from 'src/app/sidebar/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  sidebarDisplayed = false;
  sidebarVisible = false;
  sibebarSubscription: Subscription = new Subscription();
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sibebarSubscription.add(
      this.sidebarService.$isSidebarDisplayed.subscribe((displayability) => {
        this.sidebarDisplayed = displayability;
      })
    );
    this.sibebarSubscription.add(
      this.sidebarService.$isSidebarVisible.subscribe((visibility) => {
        this.sidebarVisible = visibility;
      })
    );
  }
  changeSidebarVisibility() {
    this.sidebarService.setVisibility(!this.sidebarVisible);
  }
  ngOnDestroy() {
    this.sibebarSubscription.unsubscribe();
  }
}
