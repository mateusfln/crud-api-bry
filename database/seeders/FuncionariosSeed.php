<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Number;
use Illuminate\Support\Str;

class FuncionariosSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('funcionarios')->insert([
            'login' => Str::random(10),
            'nome' => Str::random(10),
            'cpf' => Number::random(11),
            'email' => Str::random(10).'@example.com',
            'endereco' => Str::random(10),
            'senha' => Hash::make('teste123'),
        ]);
    }
}
