import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../funcionario.service';
import { EmpresaService } from '../../empresa/empresa.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Empresa } from '../../empresa/empresa';
 
@Component({

  selector: 'app-create',

  standalone: true,

  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './create.component.html',

  styleUrls: ['./create.component.css']

})

export class funcionarioCreateComponent {

  form!: FormGroup;

  empresas: Empresa[] = [];

  constructor(

    public funcionarioService: FuncionarioService,
    public empresaService: EmpresaService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required]),
      empresa_id: new FormArray([]),
    });

    this.empresaService.getAll().subscribe((data: Empresa[])=>{
      this.empresas = data;
      console.log(this.empresas);
    })
    }

  get f(){
    return this.form.controls;
  }

  onCheckboxChange(empresaId: number, isChecked: boolean) {
    const empresaIdControl = this.form.get('empresa_id') as FormArray;
    if (isChecked) {
      empresaIdControl.push(new FormControl(empresaId));
    } else {
      const index = empresaIdControl.value.findIndex((id: number) => id === empresaId);
      if (index !== -1) {
        empresaIdControl.removeAt(index);
      }
    }
    console.log(empresaIdControl);
  }

  submit(){
    console.log('Campos: ' , this.form.value);
    this.funcionarioService.create(this.form.value).subscribe((res:any) => {
         console.log('Funcionario created successfully!');
         this.router.navigateByUrl('funcionario/index');
    })
  }
}