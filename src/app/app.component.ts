import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h1 {
        text-decoration:underline;
   
    }
table {
    border-collapse: collapse;

}

table, th, td {
    border: 1px solid black;
}
th, td {
    padding: 15px;
    text-align: left;
  
}
table {
    width: 100%;
}

th {
    height: 50px;
  font: 100em;
}
tr:hover {background-color: #f5f5f5}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
}

li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}

/* Change the link color on hover */
li a:hover {
    background-color: #555;
    color: white;
}
.active {
    background-color: #4CAF50;
    color: white;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 10%;
    background-color: #f1f1f1;
    height: 75%; /* Full height */
    position: fixed; /* Make it stick, even on scroll */
    overflow: auto; /* Enable scrolling if the sidenav has too much content */
}
.birdTableList{
    margin-left: 12%;
}

`]
     
   
})
export class AppComponent {
  title = 'app';
}
