import { Component, OnInit } from '@angular/core';
import { DataSource1AccountService } from '../services/data-source1-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public dataSource1AccountTable1: any = null;

  constructor(
    private dataSource1AccountService: DataSource1AccountService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource1AccountService.getData('Table 1').subscribe(data => this.dataSource1AccountTable1 = data);
  }
}
