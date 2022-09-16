import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts" 

let aluno = 'Nicolly Evangelista'
let professores = ['José', 'Maria','Afonso', 'João']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Nicolly Evangelista");   
    assertStringIncludes(aluno, "Nicolly");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Maria", "Afonso", "Josué"],
        "Opa! Algo deu errado!"); //mensagem  caso haja erro
})
