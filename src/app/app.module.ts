import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsComponent } from './components/chart/chart.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { MidNavComponent } from './components/mid-nav/mid-nav.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { QRCodeModule } from 'angularx-qrcode';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChartsComponent,
    CardComponent,
    TableComponent,
    MidNavComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    TableModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    QRCodeModule,
    InputSwitchModule,
    TooltipModule,
    PaginatorModule,
    DropdownModule,
    SplitButtonModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
