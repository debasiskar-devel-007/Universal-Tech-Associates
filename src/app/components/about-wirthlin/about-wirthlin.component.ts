import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-about-wirthlin',
  templateUrl: './about-wirthlin.component.html',
  styleUrls: ['./about-wirthlin.component.css']
})
export class AboutWirthlinComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Universal Tech Associates - About Wirthlin');
    this.meta.setTag('og:description', 'Universal Tech Associates is the US based entity chosen to work directly with Wirthlin Worldwide to introduce potential emerging technologies and marketing platforms to the global marketplace.');
    this.meta.setTag('twitter:description', 'Universal Tech Associates is the US based entity chosen to work directly with Wirthlin Worldwide to introduce potential emerging technologies and marketing platforms to the global marketplace.');

    this.meta.setTag('og:keyword', 'Universal Tech Associates, Wirthlin Worldwide, Wirthlin Worldwide UTA');
    this.meta.setTag('twitter:keyword', 'Universal Tech Associates, Wirthlin Worldwide, Wirthlin Worldwide UTA');

    this.meta.setTag('og:title', 'Universal Tech Associates - About Wirthlin');
    this.meta.setTag('twitter:title', 'Universal Tech Associates - About Wirthlin');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
  }

  ngOnInit() {
  }

}
