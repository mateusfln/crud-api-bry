<?php

use App\Http\Controllers\FuncionariosController;
use Illuminate\Support\Facades\Route;


Route::get('/funcionarios', [FuncionariosController::class, 'index']);

Route::get('/funcionarios/{id}', [FuncionariosController::class, 'show']);

Route::post('/funcionarios', [FuncionariosController::class, 'store']);

Route::put('/funcionarios/{id}', [FuncionariosController::class, 'update']);

Route::delete('/funcionarios/{id}', [FuncionariosController::class, 'destroy']);