import { Component } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class funcionarioViewComponent {

  id!: number;
  funcionario!: Funcionario;

  constructor(
    public FuncionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['funcionarioId'];
    this.FuncionarioService.find(this.id).subscribe((data: Funcionario)=>{
      this.funcionario = data;
    });
  }
}