import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaService } from '../empresa.service';
import { FuncionarioService } from '../../funcionario/funcionario.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from '../../funcionario/funcionario';
 
@Component({

  selector: 'app-create',

  standalone: true,

  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './create.component.html',

  styleUrls: ['./create.component.css']

})

export class empresaCreateComponent {

  form!: FormGroup;

  funcionarios: Funcionario[] = [];

  constructor(

    public empresaService: EmpresaService,
    public funcionarioService: FuncionarioService,

    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
    });

      this.funcionarioService.getAll().subscribe((data: Funcionario[])=>{
        this.funcionarios = data;
        console.log(this.funcionarios);
      })  
    }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.empresaService.create(this.form.value).subscribe((res:any) => {
         console.log('Empresa created successfully!');
         this.router.navigateByUrl('empresa/index');
    })
  }
}