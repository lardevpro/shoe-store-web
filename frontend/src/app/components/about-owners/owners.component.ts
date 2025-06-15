import { Component } from '@angular/core';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
@Component({
  selector: 'app-about-owners',
  imports: [NzDescriptionsModule],
    template: `
      <nz-descriptions nzTitle="Carmen María Calzados y Complementos">
        <nz-descriptions-item nzTitle="Comerico">Carmen María Calzados y Complementos</nz-descriptions-item>
        <nz-descriptions-item nzTitle="Teléfono">+34 690 11 67 03</nz-descriptions-item>
        <nz-descriptions-item nzTitle="Ubiicación">Manzanares, Ciudad Real</nz-descriptions-item>
        <nz-descriptions-item nzTitle="Marcas">Pitillo, Annek..</nz-descriptions-item>
        <nz-descriptions-item nzTitle="Dirección">
          Empedrada,17, Manzanares, España, 13200
        </nz-descriptions-item>
      </nz-descriptions>
  `
})
export class OwnersComponent  {

  constructor() { }


}

