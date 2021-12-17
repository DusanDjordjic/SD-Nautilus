import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/shared/models/package.model';
import { SidebarService } from 'src/app/sidebar/sidebar.service';
import { PackageService } from '../package.service';

@Component({
  selector: 'app-single-package-page',
  templateUrl: './single-package-page.component.html',
  styleUrls: ['./single-package-page.component.scss'],
})
export class SinglePackagePageComponent implements OnInit {
  singlePackage: Package = new Package();
  constructor(
    private route: ActivatedRoute,
    private packageService: PackageService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.sidebarService.setDisplayability(false);
    this.route.params.subscribe((params) => {
      const singlePackage = this.packageService.getPackageByLink(
        params['packageLink']
      );
      if (singlePackage) {
        this.singlePackage = singlePackage;
      } else {
        console.log('GRESKA');
      }
    });
  }
}
