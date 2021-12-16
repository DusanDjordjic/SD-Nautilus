import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SidebarService } from './sidebar/sidebar.service';
import { PackageModule } from './package/package.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PackageModule],
  providers: [SidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
