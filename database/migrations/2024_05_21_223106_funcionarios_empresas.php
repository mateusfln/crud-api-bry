<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('funcionarios_empresas', function (Blueprint $table) {
            $table->bigInteger('funcionario_id')->unsigned();
            $table->bigInteger('empresa_id')->unsigned();
            $table->foreign('funcionario_id')->references('id')->on('funcionarios');
            $table->foreign('empresa_id')->references('id')->on('empresas');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('funcionarios_empresas');
    }
};
