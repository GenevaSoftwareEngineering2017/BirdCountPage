import { Component, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Http, Response} from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],

})
export class ExampleComponent implements OnInit {

  apiUrl ='http://localhost:58281/api/member/getall';
  apiUrl2 ='http://localhost:58281/api/effort/getall';
  apiUrl3 ='http://localhost:58281/api/count/getall';

  data: any = {};
  data2: any = {};
  data3: any = {};

	   constructor (private http: Http)
	   {
		   this.getData();
       this.getData2();
       this.getData3();
       this.getNames();
       this.getEffort();
       this.getCount();
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

     getData2()
    {
      return this.http.get(this.apiUrl2)
      .map((res: Response) => res.json())
    }

    getEffort()
    {
      this.getData2().subscribe(data => {
      this.data2 = data
      console.log(data)
      })
    }

    getData3()
    {
      return this.http.get(this.apiUrl3)
      .map((res: Response) => res.json())
    }

    getCount()
    {
      this.getData3().subscribe(data => {
      this.data3 = data
      console.log(data)
      })
    }
  ngOnInit() {
  }
}
