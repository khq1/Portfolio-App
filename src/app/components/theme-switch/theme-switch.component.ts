import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Option } from "../../option.model";
import { ThemeService } from "../.././theme.service";




@Component({
  selector: "app-theme-switch",
  templateUrl: "./theme-switch.component.html",
  styleUrls: ["./theme-switch.component.css"]
})
export class ThemeSwitchComponent {

  @Input() options: Array<Option>|null = [];
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  
  constructor(private themeService: ThemeService) { }

  changeTheme(themeToSet: string) {
    this.themeChange.emit(themeToSet);
  }





}
