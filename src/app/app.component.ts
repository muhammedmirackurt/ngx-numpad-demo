import { Component } from "@angular/core";
import { NgxNumpadService } from "ngx-numpad";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form = new FormGroup({
    value: new FormControl(12),
    prefix: new FormControl("#"),
    suffix: new FormControl("$"),
    cantDecimal: new FormControl(true),
    cantZero: new FormControl(true),
    max: new FormControl(1353.05),
    min: new FormControl(-13.008),
    decimalSeparator: new FormControl("."),
    thousandsSeparator: new FormControl(","),
    disableOtherButtons: new FormControl(false),
    onlyNegative: new FormControl(false),
    onlyPositive: new FormControl(false),
    scale: new FormControl()
  });
  value = 12;
  constructor(private numpad: NgxNumpadService) {}

  open() {
    const numpadRef = this.numpad.open(this.form.value);
    numpadRef
      .afterClosed()
      .subscribe(result => result && (this.value = result));
  }
}
