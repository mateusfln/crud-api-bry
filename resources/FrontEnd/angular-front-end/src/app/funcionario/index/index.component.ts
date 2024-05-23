import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../funcionario';

@Component({

  selector: 'app-index',

  standalone: true,

  imports: [CommonModule, RouterModule],

  templateUrl: './index.component.html',

  styleUrl: './index.component.css'

})

export class IndexComponent {
  
  funcionarios: Funcionario[] = [];

  constructor(public funcionarioService: FuncionarioService) { }

  ngOnInit(): void {

    this.funcionarioService.getAll().subscribe((data: Funcionario[])=>{
      this.funcionarios = data;
      console.log(this.funcionarios);
    })  
  }

  deleteFuncionario(id:number){
    this.funcionarioService.delete(id).subscribe(() => {
         this.funcionarios = this.funcionarios.filter(item => item.id !== id);
         console.log('funcionario deleted successfully!');
    })
  }
}
