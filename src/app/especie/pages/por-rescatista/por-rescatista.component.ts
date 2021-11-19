import { Component, OnInit } from '@angular/core';
import { RescatistaService } from '../../services/rescatista.service';

@Component({
  selector: 'app-por-rescatista',
  templateUrl: './por-rescatista.component.html',
  styleUrls: ['./por-rescatista.component.css'],
})
export class PorRescatistaComponent implements OnInit {
  header: string[] = ['#', 'nombre', 'acciones'];
  data: any[] = [];

  constructor(private rescatista: RescatistaService) {}

  ngOnInit(): void {
    this.rescatista.findAll().subscribe((data) => {
      this.data = data.body;
    });
  }
}
