 import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  @ViewChild('confirmAdd') private confirmAdd: TemplateRef<any>;
  private currentModale: NgbModalRef;
  public modaleValues: Order;

  constructor(private orderService:OrdersService,
      private router:Router,
      private currentRoute:ActivatedRoute,
      private modalService: NgbModal) { }
  public addOrder(item:Order) {
    this.orderService.addItem(item).subscribe(
      (result)=> {
        this.dismissModale();
        this.router.navigate(['../',{relativeTo:this.currentRoute}]);
      }
    )
  }
  ngOnInit(): void {
  }

  public openModale( values: any) {
    this.modaleValues = values;
    this.currentModale = this.modalService.open(this.confirmAdd);
  }

  public dismissModale() {
    this.currentModale.dismiss();
  }

}
