import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { SidebarService } from 'src/app/sidebar/sidebar.service';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.scss'],
})
export class PackagePageComponent implements OnInit {
  packages: Package[] = [];
  constructor(
    private packageService: PackageService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.sidebarService.setDisplayability(false);
    this.getPackages();
  }
  getPackages() {
    this.packages = this.packageService.getAllPackages();
  }
}
