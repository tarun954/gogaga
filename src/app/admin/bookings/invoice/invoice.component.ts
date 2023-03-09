import { Component,ElementRef,ViewChild } from '@angular/core';
import { callback } from 'chart.js/dist/helpers/helpers.core';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent {
  // public openPDF(): void {
  //     let DATA: any = document.getElementById('htmlData');
  //     html2canvas(DATA).then((canvas) => {
  //       let fileWidth = 208;
  //       let fileHeight = 250;
  //       let imgHeight = canvas.height * fileWidth / canvas.width;
  //       let heightLeft = imgHeight;
  //       let FILEURI = canvas.toDataURL('image/png');
  //       let PDF = new jsPDF('p', 'mm', 'a4');
  //       let position = 2;
  //       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, heightLeft); 
  //       // this.toastr.success("Downloaded Sucessfully")
  //     });
  //   }
  // @ViewChild('invoice') invoice: any;

//   const DATA = this.invoice.getElementById;
//   const doc: jsPDF = new jsPDF('l', 'mm', [1000, 1010]);
//   invoicedata: any;
// doc.html(DATA, {
//     callback: (doc:any) => {
//       doc.setFont('fa-solid-900', 'normal');
//       doc.save("invoice.pdf");
//     }
//   });

  @ViewChild('invoice')
  invoice!: ElementRef;
  
    downloadPdf() {
    // const doc = new jsPDF();
    const doc: jsPDF = new jsPDF('p','mm',[1200,1100]);
    const specialElementHandlers = {
      '#invoice': function (element:any, renderer:any) {
        return true;
      }
    };
    
    const content = this.invoice.nativeElement;
    doc.html(content, {
      callback: (doc) => {
        doc.setFont('fa-solid-900', 'normal');
        doc.save("payslip.pdf");
      }
    });
    
//tryonce thankyou bro okay i will call ok bro
    // doc.html(content.innerHTML, 15, 15, {
    //   'width': 190,
    //   'elementHandlers': specialElementHandlers
    // });wait

    // doc.save('asdfghj' + '.pdf');
  }
  // @ViewChild('invoice') invoice!: ElementRef;

  // makePdf() { 
  //   let doc = new jsPDF('landscape');
  //   doc.html(this.invoice.nativeElement,{ callback:()=> {
  //      doc.save("obrz.pdf");
  //   }
  //   });
  // }
}
