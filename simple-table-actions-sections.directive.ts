import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[cTemplate]',
  host: {
  }
})
export class CotrafaTemplateDirective {

  @Input() type: string;

  @Input('cTemplate') cTemplate: string;

  constructor(public template: TemplateRef<any>) { }

  getType(): string {
    return this.cTemplate;
  }
}
