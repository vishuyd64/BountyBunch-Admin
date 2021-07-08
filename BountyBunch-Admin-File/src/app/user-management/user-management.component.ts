import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from "@angular-slider/ngx-slider";
declare var $;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  minValue: number = 20;
  maxValue: number = 40;
  options: Options = {
    floor: 10,
    ceil: 70,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value;
        case LabelType.High:
          return "" + value;
        default:
          return "" + value;
      }
    }
  };
  constructor() { }

  ngOnInit() {
    $("#Accept").click(function(){
      $("body").addClass("side-open");  
      $("#OrderStatus").css({"transform": "translate(0%, 0px)"});
  });

  $(".Closesidebar").click(function(){
    $("body").removeClass("side-open");  
    $(".Sidebar").css({"transform": "translate(120%, 0px)"});
});
  }

}
