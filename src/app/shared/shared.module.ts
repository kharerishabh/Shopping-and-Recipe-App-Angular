import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinner } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropDownDirective } from './dropdown.directive';
import { LoggingServices } from '../logging-service';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinner,
    PlaceholderDirective,
    DropDownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinner,
    PlaceholderDirective,
    DropDownDirective,
    CommonModule
  ],
  providers: [LoggingServices]
})
export class SharedModule {}
