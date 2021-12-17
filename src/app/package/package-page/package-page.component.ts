import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/shared/models/package.model';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.scss'],
})
export class PackagePageComponent implements OnInit {
  packages: Package[] = [];
  constructor(private packageService: PackageService) {}

  ngOnInit(): void {
    this.getPackages();
  }
  getPackages() {
    this.packages = this.packageService.getAllPackages();
  }
}
