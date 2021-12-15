import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SidebarService implements OnInit {
  private isSidebarDisplayedSubject = new BehaviorSubject<boolean>(false);
  $isSidebarDisplayed = this.isSidebarDisplayedSubject.asObservable();
  private isSidebarVisibleSubject = new BehaviorSubject<boolean>(false);
  $isSidebarVisible = this.isSidebarVisibleSubject.asObservable();
  setVisibility(visibility: boolean) {
    console.log('a');

    this.isSidebarVisibleSubject.next(visibility);
  }
  setDisplayability(displayability: boolean) {
    this.isSidebarDisplayedSubject.next(displayability);
  }
  ngOnInit(): void {
    setInterval(() => {
      this.isSidebarDisplayedSubject.next(Math.random() >= 0.5);
    }, 1000);
  }
}
