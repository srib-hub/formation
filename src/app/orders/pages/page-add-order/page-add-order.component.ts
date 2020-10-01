import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  constructor(private orderService:OrdersService,
      private router:Router,
      private currentRoute:ActivatedRoute) { }
  public addOrder(item:Order) {
    this.orderService.addItem(item).subscribe(
      (result)=> {
        this.router.navigate(['../',{relativeTo:this.currentRoute}]);
      }
    )
  }
  ngOnInit(): void {
  }

}