import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LayoutModule, CommonModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isPhonePortrait = false;
  isTabletLandscape = false;

  constructor(private responsive:BreakpointObserver){

  }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait
    ])
      .subscribe(result => {
        this.isTabletLandscape = false;
        this.isPhonePortrait = false;
  
        if (result.breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
        }
        if (result.breakpoints[Breakpoints.HandsetPortrait]) {
          this.isPhonePortrait = true;
        }
      });
  }

}
