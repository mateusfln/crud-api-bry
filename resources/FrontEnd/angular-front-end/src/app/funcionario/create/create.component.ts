import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from '../funcionario.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({

  selector: 'app-create',

  standalone: true,

  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './create.component.html',

  styleUrl: './create.component.css'

})

export class CreateComponent {

  form!: FormGroup;

  constructor(

    public funcionarioService: FuncionarioService,

    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.funcionarioService.create(this.form.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
}