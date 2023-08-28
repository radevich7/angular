import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  id: any;
  id$!: Observable<any>;
  ngOnInit(): void {
    this.id$ = this.router.paramMap.pipe(map((params) => params.get('id')));
    // this.router.params.subscribe((param) => {
    //   this.id = param['id'];
    // });
  }
}
