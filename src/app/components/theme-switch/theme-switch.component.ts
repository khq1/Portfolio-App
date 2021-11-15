import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Option } from "../.././option.model";
import { ThemeService } from "../.././theme.service";

@Component({
  selector: "app-theme-switch",
  templateUrl: "./theme-switch.component.html",
  styleUrls: ["./theme-switch.component.css"]
})
export class ThemeSwitchComponent {

  @Input()
  options!: Array<Option>;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private themeService: ThemeService) { }

  changeTheme(themeToSet: string | undefined) {
    this.themeChange.emit(themeToSet);
  }





}
