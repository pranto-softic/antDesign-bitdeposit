import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

const AntComponentsModule = [
  NzButtonModule,
  NzFormModule,
  NzCheckboxModule,
  NzInputModule,
];

@NgModule({
  exports: [AntComponentsModule],
  imports: [AntComponentsModule],
})
export class AntDesignComponentsModule {}
