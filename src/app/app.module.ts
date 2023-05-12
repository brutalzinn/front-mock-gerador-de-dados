import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AcessibilidadeComponent } from './components/accessbility/accessbility..component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageComponent } from './components/language/language.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { TabGroupComponent } from './components/tabs/tab-group/tab-group.component';
import { TabMenuComponent } from './components/tabs/tab-menu/tab-menu.component';
import { TabsComponent } from './components/tabs/tab-page/tab-page.component';
import { DicasComponent } from './components/tips/tips.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AcessibilidadeComponent,
    TabsComponent,
    PlaceholderComponent,
    TabGroupComponent,
    TabMenuComponent,
    DicasComponent,
    LanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
