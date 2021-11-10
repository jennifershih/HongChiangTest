import { Component, OnInit } from '@angular/core';
import { DataSource1StoreService } from '../services/data-source1-store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  public dataSource1StoreTable1: any = null;

  constructor(
    private dataSource1StoreService: DataSource1StoreService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource1StoreService.getData('Table 1').subscribe(data => this.dataSource1StoreTable1 = data);
  }
}
