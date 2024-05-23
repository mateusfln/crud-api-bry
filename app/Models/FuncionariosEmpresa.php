<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FuncionariosEmpresa extends Model
{
    use HasFactory;

    protected $fillable = [
        'funcionario_id',
        'empresa_id',
    ];
}
