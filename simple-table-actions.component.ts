import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChildren,
  QueryList,
  TemplateRef,
  AfterContentInit,
  ContentChild,
} from '@angular/core';

// Modelos
import { ColsSimpleTableActionsModel } from './models/cols-simple-table-actions.model';
import { CotrafaTemplateDirective } from './simple-table-actions-sections.directive';



@Component({
  selector: 'app-simple-table-actions',
  templateUrl: './simple-table-actions.component.html',
  styleUrls: ['./simple-table-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTableActionsComponent<T> implements OnInit, OnChanges, AfterContentInit {
  /**
   * Lista de objetos con tipo que se establece al llamar el componente para listar en la tabla
   * @type {T[]}
   * @memberof SimpleTableActionsComponent
   */
  @Input()
  public datosTabla: T[];

  /**
   * Columnas de las tabla
   * @type {any[]}
   * @memberof SimpleTableActionsComponent
   */
  @Input()
  public cols: ColsSimpleTableActionsModel[];


  @Input()
  public incluyeAcciones: boolean;

  @ContentChild('actionsTemplate') actionsTemplate: TemplateRef<any>;
  @ContentChild('formularioTemplate') formularioTemplate: TemplateRef<any>;

  @ContentChildren(CotrafaTemplateDirective) cotrafaSectionsTemplate: QueryList<CotrafaTemplateDirective>;
  cotrafaActionsTemplate: TemplateRef<any>;
  cotrafaFormularioTemplate: TemplateRef<any>;


  constructor(private cd: ChangeDetectorRef) {
    // Inicializar
    this.datosTabla = [];
    this.cols = [];
    this.incluyeAcciones = false;
  }

  ngOnInit() { }

  ngAfterContentInit() {


    console.log('column template list');
    console.log(this.actionsTemplate);

    this.cotrafaSectionsTemplate.forEach((item) => {
      switch (item.getType()) {
        case 'actions':
          this.cotrafaActionsTemplate = item.template;
          break;
        case 'formulario':
          this.cotrafaFormularioTemplate = item.template;
          break;
      }
    });
  }

  /**
   * Detecta cuando la propiedad datosTabla recibe los datos
   * y se vuelve a renderizar gracias a la función markForCheck();
   * @memberof SimpleTableActionsComponent
   */
  ngOnChanges(): void {
    this.cd.markForCheck();
  }
}
