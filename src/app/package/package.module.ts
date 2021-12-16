import { NgModule } from '@angular/core';
import { PackagePageComponent } from './package-page/package-page.component';
import { PackageRoutingModule } from './package-routing.module';
import { PackageService } from './package.service';

@NgModule({
  imports: [PackageRoutingModule],
  declarations: [PackagePageComponent],
  providers: [PackageService],
})
export class PackageModule {}
