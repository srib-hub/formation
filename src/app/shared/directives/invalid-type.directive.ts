import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';

@Directive({
  selector: '[invalidType]'
})
export class InvalidTypeDirective implements OnInit {
  @Input('invalidType') type: string;

  constructor(private invalidMsg: InvalidMessageDirective, private tempref: TemplateRef<any>, private cont: ViewContainerRef) { }

  ngOnInit() {
    this.invalidMsg.controlValue$.subscribe(
      () => {
        this.setVisible();
      }
    )
  }

  private setVisible() {
    if(this.invalidMsg.match(this.type)) {
      this.cont.createEmbeddedView(this.tempref);
    }
    else {
      this.cont.clear();
    }
  }
}
