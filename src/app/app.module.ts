import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AcessibilidadeComponent,
    TabsComponent,
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
