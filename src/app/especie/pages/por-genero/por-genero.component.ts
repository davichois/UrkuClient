import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../../services/genero.service';

@Component({
  selector: 'app-por-genero',
  templateUrl: './por-genero.component.html',
  styleUrls: ['./por-genero.component.css'],
})
export class PorGeneroComponent implements OnInit {
  header: string[] = ['#', 'nombre', 'acciones'];
  data: any[] = [];

  constructor(private genero: GeneroService) {}

  ngOnInit(): void {
    this.genero.findAll().subscribe((data) => {
      this.data = data.body;
    });
  }
}
