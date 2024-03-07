import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/users')
      .subscribe((response: any) => {
        this.user = response.user;
      });
  }
}
