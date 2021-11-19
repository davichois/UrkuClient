import { Component, EventEmitter, Input, Output } from '@angular/core';
import { especie } from '../../interfaces/especie.interface';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css'],
})
export class TableInfoComponent {
  @Input() data: especie = {
    aniNombre: '',
    aniFechaIngreso: new Date(),
    aniObservaciones: '',
    aniLugarRescate: '',
    aniGenero: 0,
    aniRescatista: 0,
    aniClasificacion: 0,
  };

  @Output() editEspecie = new EventEmitter<especie>();
  @Output() Type = new EventEmitter<string>();

  constructor() {}

  onEspecieEdit() {
    this.Type.emit('editar');
    this.editEspecie.emit(this.data);
  }

  onEspecieDelete() {
    this.Type.emit('eliminar');
    this.editEspecie.emit(this.data);
  }
}
