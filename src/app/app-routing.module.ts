import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IkhokhaHomepageComponent } from './pages/ikhokha-homepage/ikhokha-homepage.component';
import { ProductsComponent } from './pages/products/products.component';


  export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },  
    {
      path: 'products',
      component: ProductsComponent,
      data: {
        title: 'IKhokha Products Page'
      }
    },
    {
      path: 'dashboard',
      component: IkhokhaHomepageComponent,
      data: {
        title: 'dashboard'
      },


    children: [
      {
        path: 'footer',
        loadChildren: () => import('./common-ikh-components/footer/footer.component').then(m => m.FooterComponent)
      }
    ]
    }
  ];

  @NgModule({
    imports: [ 
      RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
   
    ],
    providers: [
    ],
    exports: [ RouterModule ],
  })
  export class AppRoutingModule {}
