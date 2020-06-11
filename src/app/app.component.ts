import { Component } from '@angular/core';
import {FetchdataService} from './services/fetchdata.service'
import Swal from 'sweetalert2'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karthik';
  public usersData = [];
  public inputUserName="";
  id:number

  constructor(private fetchDataService : FetchdataService,
              private router:Router){

  }

  getDataFromApi(inputUserName){
    this.fetchDataService.fetchData(inputUserName)
    .subscribe((data) => {
      console.log(data)
      if(data.length !== 0){
        this.usersData = data;
        this.id = data[0].id;
        this.router.navigate(['post', this.id]);
     //this.router.navigate(['post'], { queryParams: { id: this.id}})
      }else{
        Swal.fire({
          icon: 'error',
          title: 'OOPS',
          text: `We couldn't find the user!`
        })
      }
    })
  }

}
