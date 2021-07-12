import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { IconsModule } from '../../../../icons/icons.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [RouterModule, IconsModule, MatButtonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
