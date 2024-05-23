<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'login',
        'nome',
        'cpf',
        'email',
        'endereco',
        'senha'
    ];

    public function empresas()
    {
        return $this->belongsToMany(Empresa::class, 'funcionarios_empresas', 'funcionario_id', 'empresa_id');        // return $this->belongsToMany(Empresa::class);
    }
}
