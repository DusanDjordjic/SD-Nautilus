import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Package } from 'src/app/shared/models/package.model';
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
    private packageService: PackageService
  ) {}

  ngOnInit(): void {
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
