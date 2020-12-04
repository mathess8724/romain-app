import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';

const routes: Routes = [{
  path: ':pageName',
  component: PageComponent
},
  {
    path: '**',
    redirectTo: '/page1'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
