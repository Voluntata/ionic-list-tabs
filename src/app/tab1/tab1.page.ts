import { Component} from '@angular/core';
import { ListService } from '../list.service';
//import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
 
UsersList: any = [];

  constructor(private listService: ListService,
              private router: Router) {
    this.listService.getUsers().subscribe((res) => {
      this.UsersList = res;
    })
  }

  reorderList(e){
  console.log(`Item moved ${e.detail.from} to ${e.detail.to}`);
  let movedItem = this.UsersList.splice(e.detail.from, 1)[0];
  this.UsersList.splice(e.detail.to, 0, movedItem)
  e.detail.complete();
}

updatedList(){
  console.table(this.UsersList);


  this.router.navigate(['/tabs/tab2']);
;
}
}

