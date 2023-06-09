import { Component } from "@angular/core";

interface Propriedade{
    nomePropriedade:string,
    tipoDeDado:string | number,
    array:Categoria[]
}
interface Categoria{
    categoria:string,
    corFundo:string
}

@Component({
    selector:'propriedade-app' ,
    templateUrl: './propriedade.component.html',
    styleUrls:['./propriedade.component.css']
})

// castrar prorpiedade de forma de dinamica prorpiedade (string, numb)
// 	-nome 
// 	-tipo de dado( string, número, seleção)
// nas tarefas, carregar as propriedades cadastrar 
// permitindo o usuario prencher ou não 
//  propriedades( 
// propriedade{nome: , tipoDeDado:(select),selects:selects[]} )

export class PropriedadeComponent{
    nomePropriedade:string
    tipoDeDado:string | number='Tipo de dado'
    arrayPropriedade:Categoria[]
    escolhidoSelecao:boolean=false

    completar:boolean= true

    propriedade:Propriedade
    mudarOpcao():void{
        console.log('aaa')
        if(this.tipoDeDado=='Select'){

            this.completar=false
            this.escolhidoSelecao=true
        }else{
            this.completar=true
            this.escolhidoSelecao=false
        }
        
    }
    criarPropriedade():void{
        
        this.propriedade={
            nomePropriedade: this.nomePropriedade,
            tipoDeDado: this.tipoDeDado,
            array:this.arrayPropriedade
        }

        

    }
    adicionarCategoriaPropriedade(categoria):void{
        console.log(categoria)
        this.arrayPropriedade.push(categoria)
        if(this.arrayPropriedade!=[]){
                this.completar=true
        }
    }

}