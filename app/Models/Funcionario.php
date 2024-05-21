<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    public function empreas(): HasMany
    {
        return $this->hasMany(Empresa::class);
    }
}
