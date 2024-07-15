import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    UppercasePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
