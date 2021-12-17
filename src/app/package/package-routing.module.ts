import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagePageComponent } from './package-page/package-page.component';
import { SinglePackagePageComponent } from './single-package-page/single-package-page.component';

const routes: Routes = [
  { path: '', component: PackagePageComponent },
  {
    path: ':packageLink',
    component: SinglePackagePageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackageRoutingModule {}
