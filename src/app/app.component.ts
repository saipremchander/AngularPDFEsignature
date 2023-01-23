import { Component,ViewChild,Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _theme = 'findbar';

  test="'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png'"
  src="'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'"
  public showPdfViewer = true;

  pdfSrc = 'path/to/your/pdf.pdf';
 



 

  public set theme(theme: string) {
    if (this._theme !== theme) {
      this.showPdfViewer = false;
      this._theme = theme;
      setTimeout(() => this.showPdfViewer = true, 100);
    } else {
      this._theme = theme;
    }
  }

  public get theme(): string {
    return this._theme;
  }
  displayData: boolean = false;
  content: string = 'Something to be displayed on click event';

  appendData() {
    this.displayData = true;
  }

  pdfUrl:any
    url: any
  trustedurl:any
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => { 

        this.url = event.target?.result;
       alert(this.url)

      }
    }
  }
  print() {
    
    window.print();

  }
}
