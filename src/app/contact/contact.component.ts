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
  isXLarge = false;
  isLarge = false;
  isPhonePortrait = false;
  isTabletLandscape = false;
  isTabletPortrait = false;
  isTablet = false;

  constructor(private responsive:BreakpointObserver){

  }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait
    ])
      .subscribe(result => {
        this.isXLarge = false;
        this.isLarge = false;
        this.isTabletLandscape = false;
        this.isTabletPortrait = false;
        this.isPhonePortrait = false;
  
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.isXLarge = true;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.isLarge = true;
        }
        if (result.breakpoints[Breakpoints.TabletLandscape]) {
          this.isTabletLandscape = true;
        }
        if (result.breakpoints[Breakpoints.TabletPortrait]) {
          this.isTabletPortrait = true;
        }
        if (result.breakpoints[Breakpoints.HandsetPortrait]) {
          this.isPhonePortrait = true;
        }
      });
  }

}
