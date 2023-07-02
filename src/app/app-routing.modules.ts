import { Component, NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AdicionaCategoriaComponent } from "./AdicionaCategoria/adicionaCategoria.component";
import { LoginComponent } from "./Login/login.component";
import { PropriedadeComponent } from "./propriedade/propriedade.component";
import { TodoAppComponent } from "./todo-app/todo-app.component";
import { CadastroComponent } from "./Cadastro/cadastro.component";

const rotas: Route[]=[
    {
        path:'todo-app',
        component: TodoAppComponent
    },
    {
        path:'categoria',
        component: AdicionaCategoriaComponent
    },
    {
        path:'propriedade',
        component: PropriedadeComponent
    },
    {
        path:'login-app',
        component: LoginComponent
    },
    {
        path:'cadastro-app',
        component: CadastroComponent
    },
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'todo-app'
    }
    
    
]
@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]

})
export class AppRoutingModule{}