<?php

namespace App\Http\Controllers;

use App\Models\Empresa;
use App\Models\FuncionariosEmpresa;
use Illuminate\Http\Request;

class EmpresasController extends Controller
{
    public function index()
    {
        $empresas = Empresa::with('funcionarios')->get();
        return response()->json($empresas);
    }

    public function show($id)
    {
        $empresa = Empresa::with('funcionarios')->findOrFail($id);
        return response()->json($empresa);
    }

    public function store(Request $request)
    {
        $empresa = Empresa::create($request->all());
        if (!empty($request->get('funcionario_id'))){
            foreach($request->get('funcionario_id') as $funcionario){
                FuncionariosEmpresa::create(['empresa_id' => $empresa->id, 'funcionario_id' => $funcionario]);
            }
        }
        return response()->json($empresa->with('funcionarios')->findOrFail($empresa->id), 201);
    }

    public function update(Request $request, $id)
    {
        $empresa = Empresa::findOrFail($id);
        $empresa->update($request->all());
        return response()->json($empresa, 200);
    }

    public function destroy($id)
    {
        if (!empty(Empresa::with('funcionarios')->findOrFail($id)->first()->funcionarios)){
            foreach(Empresa::with('funcionarios')->findOrFail($id)->first()->funcionarios as $funcionario){
                FuncionariosEmpresa::destroy(['empresa_id' => $id, 'funcionario_id' => $funcionario->id]);
            }
        }
        Empresa::findOrFail($id)->delete();
        return response()->json(['message' => 'Empresa excluída com sucesso!'], 200);
    }
}