import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ChildrenOutletContexts } from '@angular/router';
import { MessageService } from 'primeng/api';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MessageService],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

  showHeader = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contexts: ChildrenOutletContexts) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild?.snapshot.data['showHeader'] !== false
      }
    });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
