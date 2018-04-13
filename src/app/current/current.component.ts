import { Component, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']


})
export class CurrentComponent implements OnInit {

  apiUrl ='http://localhost:58281/api/team/getall';
  data: any = {};
	   constructor (private http: Http)
	   {
		   this.getNames();
		   this.getData();
	   }

	   getData()
	   {
		   return this.http.get(this.apiUrl)
		   .map((res: Response) => res.json())
	   }

	   getNames()
	   {
		   this.getData().subscribe(data => {
		   this.data = data
		   console.log(data)
		   })
	   }

  ngOnInit() {
  }

}
