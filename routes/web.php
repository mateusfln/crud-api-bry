<?php

use App\Http\Controllers\FuncionariosController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
