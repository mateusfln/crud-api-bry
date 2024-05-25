import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
  
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class empresaEditComponent {

  id!: number;

  empresa!: Empresa;

  empresas: Empresa[] = [];

  form!: FormGroup;

  constructor(
    public EmpresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['empresaId'];
    this.EmpresaService.find(this.id).subscribe((data: Empresa)=>{
      this.empresa = data;
    }); 

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
    });
    this.EmpresaService.getAll().subscribe((data: Empresa[])=>{
      this.empresas = data;
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
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.EmpresaService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('empresa updated successfully!');
         this.router.navigateByUrl('empresa/index');
    })
  }
}