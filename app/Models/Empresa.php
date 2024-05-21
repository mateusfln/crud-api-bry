<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Empresa extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nome',
        'cnpj',
        'endereco'
    ];

    public function funcionario(): HasMany
    {
        return $this->hasMany(Funcionario::class);
    }
}
