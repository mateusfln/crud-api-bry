<?php

use App\Http\Controllers\EmpresasController;
use App\Http\Controllers\FuncionariosController;
use App\Http\Controllers\FuncionariosEmpresasController;
use Illuminate\Support\Facades\Route;

/**
 * Start Rotas de funcionarios
 */
Route::get('/funcionarios', [FuncionariosController::class, 'index']);

Route::get('/funcionarios/{id}', [FuncionariosController::class, 'show']);

Route::post('/funcionarios', [FuncionariosController::class, 'store']);

Route::put('/funcionarios/{id}', [FuncionariosController::class, 'update']);

Route::delete('/funcionarios/{id}', [FuncionariosController::class, 'destroy']);
/**
 * End Rotas de funcionarios
 */

 /**
 * Start Rotas de empresas
 */
Route::get('/empresas', [EmpresasController::class, 'index']);

Route::get('/empresas/{id}', [EmpresasController::class, 'show']);

Route::post('/empresas', [EmpresasController::class, 'store']);

Route::put('/empresas/{id}', [EmpresasController::class, 'update']);

Route::delete('/empresas/{id}', [EmpresasController::class, 'destroy']);
/**
 * End Rotas de empresas
 */

  /**
 * Start Rotas FuncionariosEmpresas
 */
Route::get('/funcionariosempresas', [FuncionariosEmpresasController::class, 'index']);

Route::get('/funcionariosempresas/{funcionarioId}/{empresaId}', [FuncionariosEmpresasController::class, 'show']);

Route::post('/funcionariosempresas', [FuncionariosEmpresasController::class, 'store']);

Route::put('/funcionariosempresas/{funcionarioId}/{empresaId}', [FuncionariosEmpresasController::class, 'update']);

Route::delete('/funcionariosempresas/{funcionarioId}/{empresaId}', [FuncionariosEmpresasController::class, 'destroy']);
/**
 * End Rotas de empresas
 */