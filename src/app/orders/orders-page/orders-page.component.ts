import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/sidebar/sidebar.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.setDisplayability(false);
  }
}
