import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/subfite/subfite.service';
import { SubredditModel } from 'src/app/subfite/subfite-response';

@Component({
  selector: 'app-fite-side-bar',
  templateUrl: './fite-side-bar.component.html',
  styleUrls: ['./fite-side-bar.component.css']
})
export class FiteSideBarComponent implements OnInit {
  subreddits: Array<SubredditModel> = [];
  displayViewAll: boolean=false;

  constructor(private subredditService: SubredditService) {
    this.subredditService.getAllSubreddits().subscribe(data => {
      if (data.length > 3) {
        this.subreddits = data.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreddits = data;
      }
    });
  }

  ngOnInit(): void { }

}
