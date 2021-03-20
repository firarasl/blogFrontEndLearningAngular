import { Component, OnInit } from '@angular/core';
import { SubredditModel } from '../subfite-response';
import { SubredditService } from '../subfite.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subfites',
  templateUrl: './list-subfites.component.html',
  styleUrls: ['./list-subfites.component.css']
})
export class ListSubfitesComponent implements OnInit {

  subreddits: Array<SubredditModel>=[];
  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }
}