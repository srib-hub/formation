import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appInvalidMessage]'
})
export class InvalidMessageDirective implements OnInit, OnDestroy {
  @Input() invalidRow: string;
  public control: AbstractControl;
  public controlValue$: Observable<any>;
  public controlSubscription: Subscription;

  constructor(private fg: ControlContainer, private renderer: Renderer2, private elt: ElementRef) { }

  ngOnInit() {
    this.control = this.form.get(this.invalidRow);
    this.controlValue$ = this.control.valueChanges;
    this.controlSubscription = this.controlValue$.subscribe(
      (newVal) => {
        this.setVisible();
      }
    );
  }

  ngOnDestroy() {
    this.controlSubscription.unsubscribe();
  }

  get form() {
    return this.fg.formDirective ? (this.fg.formDirective as FormGroupDirective).form : null;
  }

  private setVisible() {
    if(this.control.invalid && this.control.dirty) {
      this.renderer.removeStyle(this.elt.nativeElement, 'display');
    }
    else {
      this.renderer.setStyle(this.elt.nativeElement, 'display', 'none');
    }
  }

  public match(error: string) {
    if(this.control?.errors) {
      if(Object.keys(this.control.errors).indexOf(error) !== -1) {
        return true;
      }
    }
    return false;
  }
}
