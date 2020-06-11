import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {FetchdataService} from '../services/fetchdata.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postID;
  UsersPost:any = []
  constructor(private FetchDataService: FetchdataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.postID = this.route.snapshot.params['id']
    this.getUserPost(this.postID)
  }


  getUserPost(id){
    this.FetchDataService.fetchUserPost(id)
    .subscribe((data) => {
      console.log(data);
      this.UsersPost = data;
      })
    }

  }

