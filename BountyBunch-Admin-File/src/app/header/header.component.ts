import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('scroll',function(){
      if ($(window).scrollTop() >= 78) {
        $('.Header').addClass('fixed_header');
  } else {
      $('.Header').removeClass('fixed_header');
  }
  });
    
  }

}
