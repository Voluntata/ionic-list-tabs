import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  UsersList: any = [];


  constructor(private listService: ListService) {
    this.listService.getUsers().subscribe((res) => {
      this.UsersList = res;
    })
  }

}
