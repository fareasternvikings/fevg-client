import {Directive, Input} from '@angular/core'
import {FormGroupDirective} from '@angular/forms'

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[patchFormGroupValues]',
})
export class PatchFormGroupValuesDirective {
  @Input() formGroup: any
  @Input()
  set patchFormGroupValues(val: any) {
    if (!val) return
    this.formGroup.patchValue(val, {emitEvent: false})
    // this.formGroup.patchValue(val)
  }

  constructor(private formGroupDirective: FormGroupDirective) {}
}
