import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  inputName:string;
  inputNum:number
  constructor(private http:HttpClient) {}

  fetchData(inputName):Observable<any>{

    const url = `https://jsonplaceholder.typicode.com/users?name=${inputName}`;
    console.log(url)

    return this.http.get(url)
  }

  fetchUserPost(inputNum):Observable<any>{

    const url = `https://jsonplaceholder.typicode.com/posts?userId=${inputNum}`;
    console.log(url)

    return this.http.get(url)
  }
}
