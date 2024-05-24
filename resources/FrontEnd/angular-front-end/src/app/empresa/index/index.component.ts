import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';

@Component({

  selector: 'app-index',

  standalone: true,

  imports: [CommonModule, RouterModule],

  templateUrl: './index.component.html',

  styleUrl: './index.component.css'

})

export class empresaIndexComponent {
  
  empresas: Empresa[] = [];

  constructor(public empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe((data: Empresa[])=>{
      this.empresas = data;
      console.log(this.empresas);
    })  
  }

  deleteEmpresa(id:number){
    this.empresaService.delete(id).subscribe(() => {
         this.empresas = this.empresas.filter(item => item.id !== id);
         console.log('empresa deleted successfully!');
    })
  }
}
