import { StateOrder } from 'src/app/orders/enums/state-order.enum';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI{
  tjmHt: number;
  nbJours: number=1;
  tva: number;
  state: StateOrder = StateOrder.INPROGRESS;
  typePresta: string;
  client: string;
  comment: string;
  id: number
  totalHt(): number {
    return this.tjmHt*this.nbJours;
  };
  totalTtc(): number {
     return this.totalHt()*(1+ this.tva /100);
  };

  constructor(obj?: Partial<Order>) {
    if (obj) {
       Object.assign(this,obj);
    }
  }
}
