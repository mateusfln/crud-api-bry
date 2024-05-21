<?php

namespace App\Http\Controllers;

use App\Models\Funcionario;
use Illuminate\Http\Request;

class FuncionariosController extends Controller
{
    public function index()
    {
        $funcionarios = Funcionario::all();
        return response()->json($funcionarios);
    }

    public function show($id)
    {
        $funcionarios = Funcionario::findOrFail($id);
        return response()->json($funcionarios);
    }

    public function store(Request $request)
    {
        $funcionarios = Funcionario::create($request->all());
        return response()->json($funcionarios, 201);
    }

    public function update(Request $request, $id)
    {
        $funcionario = Funcionario::findOrFail($id);
        $funcionario->update($request->all());
        return response()->json($funcionario, 200);
    }

    public function destroy($id)
    {
        Funcionario::findOrFail($id)->delete();
        return response()->json(['message' => 'Funcionario excluído'], 200);
    }
}