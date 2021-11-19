import { Component, OnInit } from '@angular/core';
import { ClasificacionService } from '../../services/clasificacion.service';
import { clasificacion } from '../../interfaces/especie.interface';

@Component({
  selector: 'app-por-clasificacion',
  templateUrl: './por-clasificacion.component.html',
  styleUrls: ['./por-clasificacion.component.css'],
})
export class PorClasificacionComponent implements OnInit {
  header: string[] = ['#', 'nombre', 'acciones'];
  data: any[] = [];

  constructor(private clasificacion: ClasificacionService) {}

  ngOnInit(): void {
    this.clasificacion.findAll().subscribe((data) => {
      this.data = data.body;
    });
  }
}
