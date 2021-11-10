import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { IgxGridModule, IgxActionStripModule, IgxButtonModule, IgxToggleModule, IgxIconModule, IgxDialogModule, IgxSelectModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxCardModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AccountComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxActionStripModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxIconModule,
    IgxDialogModule,
    IgxSelectModule,
    IgxInputGroupModule,
    IgxDateTimeEditorModule,
    IgxCardModule,
    FormsModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
