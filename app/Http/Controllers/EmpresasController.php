<?php

namespace App\Http\Controllers;

use App\Models\Empresa;
use Illuminate\Http\Request;

class EmpresasController extends Controller
{
    public function index()
    {
        $empresa = Empresa::all();
        return response()->json($empresa);
    }

    public function show($id)
    {
        $empresa = Empresa::findOrFail($id);
        return response()->json($empresa);
    }

    public function store(Request $request)
    {
        $empresa = Empresa::create($request->all());
        return response()->json($empresa, 201);
    }

    public function update(Request $request, $id)
    {
        $empresa = Empresa::findOrFail($id);
        $empresa->update($request->all());
        return response()->json($empresa, 200);
    }

    public function destroy($id)
    {
        Empresa::findOrFail($id)->delete();
        return response()->json(['message' => 'Empresa excluída com sucesso!'], 200);
    }
}