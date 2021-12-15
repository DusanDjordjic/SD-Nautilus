import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/sidebar/sidebar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.setDisplayability(true);
  }
}
