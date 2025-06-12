import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { presetColors } from 'ng-zorro-antd/core/color';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FooterModel } from '../../models/footer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
@Component({
  selector: 'app-footer',
  imports: [NzButtonModule, 
            NzDividerModule, 
            NzToolTipModule, 
            NzIconModule,
            NzQRCodeModule],
  standalone: true,
  templateUrl: './footer.component.html' ,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerModel!: FooterModel;
  presetColors = presetColors;

}



      