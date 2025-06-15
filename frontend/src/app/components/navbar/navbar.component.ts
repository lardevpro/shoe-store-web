import { Component, HostListener } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterLink } from '@angular/router';
import { DropdowComponent } from "../dropdow/dropdow.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzDropDownModule,
    RouterLink,
    DropdowComponent
],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showDropdown = false;
  ngOnInit() {
    this.checkWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkWidth();
  }

  private checkWidth() {
    const width = window.innerWidth;
    
    this.showDropdown = width < 768; 
  }
}