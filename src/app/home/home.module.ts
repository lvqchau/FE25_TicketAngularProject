import { LandingPageModule } from "./landing-page/landing-page.module";
import { CinemaPageModule } from "./cinema-page/cinema-page.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MoviePageModule } from "./movie-page/movie-page.module";
import { NewsPageModule } from "./news-page/news-page.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CinemaPageModule,
    LandingPageModule,
    MoviePageModule,
    NewsPageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}