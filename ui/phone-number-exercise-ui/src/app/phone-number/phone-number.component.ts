import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  componentMessage = 'Enter a phone number!';
  hasNumbers = false;
  phoneNumber;
  phoneNumberList;
  phoneNumberCount;


  constructor(private http: Http) { }

  ngOnInit() {
  }

  findNumbers(number) {
    console.log(number)
    this.http.get("http://localhost:3000/phone-numbers/" + number).
      map(
         (response) => response.json()
      ).
      subscribe(
         (data) => {
           console.log(`Data from GET: ${JSON.stringify(data)}`)
           this.phoneNumberList = data.combinations;
           this.phoneNumberCount = data.totalCount;
           this.hasNumbers = true;
          }
      )
 }

}
