import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Tour of Heroes';

	canSave: boolean;
	isUnchanged: boolean;

	isSpecial: boolean = true;

	currentClasses: {};
	setCurrentClasses() {
	// CSS classes: added/removed per current state of component properties
		this.currentClasses =  {
			'saveable': this.canSave,
			'modified': !this.isUnchanged,
			'special':  this.isSpecial
  		};
	}

	changeSpecial(): void {
		this.isSpecial = !this.isSpecial;
	}
}
