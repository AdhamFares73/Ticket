import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  customers!: any []
  customer : any[] =[];
  first = 0;
  loading: boolean = true;
  rows = 10;
  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
];
  // constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customers = [
      {
        "Id": 1,
        "user":{
          "name" : "احمد محمود",
          "phone" : "01021980438",
          "img" : "../../../assets/imgs/testi1.png"
        },
        "ticketNumber": "C-101",
        "ticketPrice": 40,
        "cinema" : "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
        "person" : 1,
        "numberPurchased" : "مرة واحدة",
        "ticket" : "../../../assets/pdfs/markusCV.pdf"
      },
      {
        "Id": 1,
        "user":{
          "name" : "احمد محمود",
          "phone" : "01021980438",
          "img" : "../../../assets/imgs/testi2.png"
        },
        "ticketNumber": "C-102",
        "ticketPrice": 50,
        "cinema" : "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
        "person" : 1,
        "numberPurchased" : "مرة واحدة",
        "ticket" : "../../../assets/pdfs/markusCV.pdf"
      },
      {
        "Id": 2,
        "user":{
          "name" : "احمد محمود",
          "phone" : "01021980438",
          "img" : "../../../assets/imgs/testi3.png"
        },
        "ticketNumber": "C-103",
        "ticketPrice": 90,
        "cinema" : "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
        "person" : 1,
        "numberPurchased" : "مرة واحدة",
        "ticket" : "../../../assets/pdfs/markusCV.pdf"
      },
      {
        "Id": 3,
        "user":{
          "name" : "احمد محمود",
          "phone" : "01021980438",
          "img" : "../../../assets/imgs/testi3.png"
        },
        "ticketNumber": "C-101",
        "ticketPrice": 80,
        "cinema" : "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
        "person" : 1,
        "numberPurchased" : "مرة واحدة",
        "ticket" : "../../../assets/pdfs/markusCV.pdf"
      }
      ,
      {
        "Id": 4,
        "user":{
          "name" : "احمد محمود",
          "phone" : "01021980438",
          "img" : "../../../assets/imgs/testi2.png"
        },
        "ticketNumber": "C-101",
        "ticketPrice": 120,
        "cinema" : "سينما مصر , مول العرب , برج الأطنان , سرايا القبة ...",
        "person" : 1,
        "numberPurchased" : "مرة واحدة",
        "ticket" : "../../../assets/pdfs/markusCV.pdf"
      }
    ];
    this.customer = this.customers;
  }


  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  pageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }

  isLastPage(): boolean {
      return this.customers ? this.first === this.customers.length - this.rows : true;
  }

  isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
  }
}
