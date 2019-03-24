import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">小</button>
    <button (click)="inc()" title="bigger">大</button>
    <label [style.font-size.px]="size">字体大小: {{size}}米</label>
  </div>`
})
export class SizerComponent {
	@Input()  size: number | string = 10;
	@Output() sizeChange = new EventEmitter<number>();

	dec() { 
		this.resize(-1);
		console.log(this.size)
	}
	inc() { this.resize(+1); }

	resize(delta: number) {
		this.size = Math.min(40, Math.max(8, +this.size + delta));
		this.sizeChange.emit(this.size);
	}
}