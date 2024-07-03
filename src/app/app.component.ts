import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ContactComponent, LayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'moenowblog';
  
  isPhonePortrait = false;
  isTabletLandscape = false;
  isTabletPortrait = false

  constructor(private responsive:BreakpointObserver){

  }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetPortrait
    ])
      .subscribe(result => {
        this.isTabletLandscape = false;
        this.isPhonePortrait = false;
  
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