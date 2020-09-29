import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  listItems ;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.listItems =  this.getItemes();
  }

  getItemes() {

    return this.http.get('http://paris-tronchet.bws-support.com/wp-json/wp/v2/posts/?per_page=10');
}

}
