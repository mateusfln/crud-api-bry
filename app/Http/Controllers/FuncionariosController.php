<?php

namespace App\Http\Controllers;

use App\Models\Funcionario;
use App\Models\FuncionariosEmpresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FuncionariosController extends Controller
{
    public function index()
    {
        $funcionarios = Funcionario::with('empresas')->get();
        return response()->json($funcionarios);
    }

    public function show($id)
    {
        $funcionarios = Funcionario::with('empresas')->findOrFail($id);
        return response()->json($funcionarios);
    }

    public function store(Request $request)
    {
        $funcionarios = Funcionario::create($request->all());
        if (!empty($request->get('empresa_id'))){
            foreach($request->get('empresa_id') as $empresa){
                FuncionariosEmpresa::create(['funcionario_id' => $funcionarios->id, 'empresa_id' => $empresa]);
            }
        }
        return response()->json($funcionarios->with('empresas')->findOrFail($funcionarios->id), 201);
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