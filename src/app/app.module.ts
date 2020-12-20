import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsSmallGroupComponent } from './cards-small-group/cards-small-group.component';
import { CardsMediumGroupComponent } from './cards-medium-group/cards-medium-group.component';
import { CardsLargeGroupComponent } from './cards-large-group/cards-large-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    CountdownComponent,
    CarouselComponent,
    CardsSmallGroupComponent,
    CardsMediumGroupComponent,
    CardsLargeGroupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
