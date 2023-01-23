import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    NgxExtendedPdfViewerModule,NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
