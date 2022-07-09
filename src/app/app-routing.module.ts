import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './shared/auth/auth.guard'
import { CardapioComponent } from './shared/cardapio/cardapio.component'
import { MainPageComponent } from './shared/main-page/main-page.component'

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cardapio', component: CardapioComponent },
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
