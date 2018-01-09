import {Component, OnInit} from '@angular/core';
import {Item} from './item';
import {Router} from '@angular/router';
import {ItemService} from './item.service';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})

export class DashboardItemComponent implements OnInit {
  private itemsDashboard: Item[];
  private seletctedItemDashboard: Item;
  constructor(
    private router: Router,
    private itemService: ItemService
  ) {}
  getItems(): void {
    this.itemService.getItems().then(items => this.itemsDashboard = items)
  }
  onSelect(item: Item):  void {
    this.seletctedItemDashboard = item;
  }
  ngOnInit(): void {
    // this.getItems()
  }
}
