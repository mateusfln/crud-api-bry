import { Component } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class empresaViewComponent {

  id!: number;
  empresa!: Empresa;

  constructor(
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['empresaId'];
    this.empresaService.find(this.id).subscribe((data: Empresa)=>{
      this.empresa = data;
      console.log(this.empresa)
    });
  }
}