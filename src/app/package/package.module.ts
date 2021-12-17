import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PackagePageComponent } from './package-page/package-page.component';
import { PackageRoutingModule } from './package-routing.module';
import { PackageService } from './package.service';
import { SinglePackagePageComponent } from './single-package-page/single-package-page.component';

@NgModule({
  imports: [CommonModule, PackageRoutingModule],
  declarations: [PackagePageComponent, SinglePackagePageComponent],
  providers: [PackageService],
})
export class PackageModule {}
