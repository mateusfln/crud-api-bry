<?php

DB::select('show databases;');
DB::select('use laravel;');
echo "<pre>";
// print_r(DB::delete("DELETE FROM funcionarios WHERE id = 1;"));
// print_r(DB::insert("INSERT INTO funcionarios (login, nome, cpf, email, endereco, senha, created_at, updated_at) VALUES ('teste', 'teste', '10074014943', 'mateusfln@gmail.com', 'rua joao da silva', '1234', '2024-05-22 10:30:00', '2024-05-22 10:30:00');"));
print_r(DB::select("SELECT * FROM funcionarios;"));