import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { TabsComponent } from './tab-page/tab-page.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { DicasComponent } from './dicas/dicas.component';

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
