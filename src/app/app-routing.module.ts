import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { StoreComponent } from './store/store.component';
import { AccountComponent } from './account/account.component';
import { LogComponent } from './log/log.component';

export const routes: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'store', component: StoreComponent, data: { text: 'store' } },
  { path: 'account', component: AccountComponent, data: { text: 'account' } },
  { path: 'log', component: LogComponent, data: { text: 'log' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
