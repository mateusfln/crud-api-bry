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
        if ($this->funcionarioTemEmpresa($id)){
            FuncionariosEmpresa::where("funcionario_id",$id)->delete();
        }
        
        if (!empty($request->get('empresa_id'))){
            foreach($request->get('empresa_id') as $empresa){
                FuncionariosEmpresa::create(['funcionario_id' => $id, 'empresa_id' => $empresa]);
            }
        }
        return response()->json(Funcionario::with('empresas')->findOrFail($id), 200);
    }

    public function destroy($id)
    {
        if ($this->funcionarioTemEmpresa($id)){
            FuncionariosEmpresa::where("funcionario_id",$id)->delete();
        }
        Funcionario::findOrFail($id)->delete();
        return response()->json(['message' => 'Funcionário excluído com sucesso!'], 200);
    }

    public function funcionarioTemEmpresa($id): bool
    {
        if (!empty(Funcionario::with('empresas')->findOrFail($id)->first()->empresas)){
            return true;
        }
        return false;
    }
}