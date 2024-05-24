import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Empresa } from '../../empresa/empresa';
import { EmpresaService } from '../../empresa/empresa.service';

  

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class EditComponent {

  id!: number;

  funcionario!: Funcionario;

  empresas: Empresa[] = [];

  form!: FormGroup;

  constructor(
    public funcionarioService: FuncionarioService,
    public empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['funcionarioId'];
    this.funcionarioService.find(this.id).subscribe((data: Funcionario)=>{
      this.funcionario = data;
    }); 

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

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.funcionarioService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('funcionario updated successfully!');
         this.router.navigateByUrl('funcionario/index');
    })
  }
}