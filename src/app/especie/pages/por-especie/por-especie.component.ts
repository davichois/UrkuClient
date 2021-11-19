import { Component, OnInit } from '@angular/core';
import { EspecieService } from '../../services/especie.service';
import {
  especie,
  clasificacion,
  genero,
  rescatista,
} from '../../interfaces/especie.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClasificacionService } from '../../services/clasificacion.service';
import { GeneroService } from '../../services/genero.service';
import { RescatistaService } from '../../services/rescatista.service';

@Component({
  selector: 'app-por-especie',
  templateUrl: './por-especie.component.html',
  styleUrls: ['./por-especie.component.css'],
})
export class PorEspecieComponent implements OnInit {
  especies: especie[] = [];
  clasificaciones: clasificacion[] = [];
  generos: genero[] = [];
  rescatistas: rescatista[] = [];
  header: string[] = [
    '#',
    'nombre',
    'genero',
    'clasificacion',
    'F. ingreso',
    'observaciones',
    'rescatista',
    'acciones',
  ];

  stateForm: boolean = false;
  formEspecie: FormGroup = new FormGroup({});

  tipo: string = '';
  opcion: number = 0;
  idEspecie: any;

  constructor(
    private especie: EspecieService,
    private clasificacion: ClasificacionService,
    private genero: GeneroService,
    private rescatista: RescatistaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const formControl = {
      name: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      clasificacion: ['', [Validators.required]],
      rescatista: ['', [Validators.required]],
      lugarRescate: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
    };

    this.formEspecie = this.formBuilder.group(formControl);

    this.especie.findAll().subscribe((data) => {
      this.especies = data.body;
    });

    this.clasificacion.findAll().subscribe((data) => {
      this.clasificaciones = data.body;
    });

    this.genero.findAll().subscribe((data) => {
      this.generos = data.body;
    });

    this.rescatista.findAll().subscribe((data) => {
      this.rescatistas = data.body;
    });
  }

  onChangeStateForm() {
    this.stateForm = !this.stateForm;
    this.formEspecie.reset();
    this.opcion = 1;
  }

  close() {
    this.onChangeStateForm();
  }

  onType(event: string) {
    this.tipo = event;
  }

  save() {
    const data = {
      aniNombre: this.formEspecie.value['name'],
      aniFechaIngreso: this.formEspecie.value['fechaIngreso'],
      aniObservaciones: this.formEspecie.value['observacion'],
      aniLugarRescate: this.formEspecie.value['lugarRescate'],
      aniGenero: this.formEspecie.value['genero'],
      aniRescatista: this.formEspecie.value['rescatista'],
      aniClasificacion: this.formEspecie.value['clasificacion'],
    };
    if (this.formEspecie.invalid) {
      console.log('Faltan datos...');
    } else {
      this.especie.save(data).subscribe((data) => {
        console.log(data);
      });
      this.close();
    }
  }

  onEspecie(event: especie) {
    this.idEspecie = event.aniId;
    if (this.tipo == 'eliminar') {
      this.especie.delete(event.aniId).subscribe((data) => {
        console.log(data);
      });
      window.location.reload();
    } else {
      this.onChangeStateForm();
      this.opcion = 2;
      this.formEspecie.patchValue({
        name: event.aniNombre,
        genero: event.aniGenero,
        clasificacion: event.aniClasificacion,
        rescatista: event.aniRescatista,
        lugarRescate: event.aniLugarRescate,
        fechaIngreso: event.aniFechaIngreso,
        observacion: event.aniObservaciones,
      });
    }
  }

  editarEspecie() {
    const data = {
      aniNombre: this.formEspecie.value['name'],
      aniFechaIngreso: this.formEspecie.value['fechaIngreso'],
      aniObservaciones: this.formEspecie.value['observacion'],
      aniLugarRescate: this.formEspecie.value['lugarRescate'],
      aniGenero: this.formEspecie.value['genero'],
      aniRescatista: this.formEspecie.value['rescatista'],
      aniClasificacion: this.formEspecie.value['clasificacion'],
    };
    if (this.formEspecie.invalid) {
      console.log('Faltan datos...');
    } else {
      this.especie.edit(data, this.idEspecie).subscribe((data) => {
        console.log(data);
      });
      this.close();
      window.location.reload();
    }
  }
}
