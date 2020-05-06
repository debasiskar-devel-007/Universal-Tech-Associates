import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Universal Tech Associates - Festering Global Partnerships');
    this.meta.setTag('og:description', 'A Consortium of High-Power Global Partnerships working with Emerging Technologies in the current global marketplace, representing opportunities with the largest corporations, marketing agencies and global investment groups in the world.');
    this.meta.setTag('twitter:description', 'A Consortium of High-Power Global Partnerships working with Emerging Technologies in the current global marketplace, representing opportunities with the largest corporations, marketing agencies and global investment groups in the world.');

    this.meta.setTag('og:keyword', 'Universal Tech Associates, Global Partnerships, Emerging Technology Opportunities');
    this.meta.setTag('twitter:keyword', 'Universal Tech Associates, Global Partnerships, Emerging Technology Opportunities');

    this.meta.setTag('og:title', 'Universal Tech Associates - Festering Global Partnerships');
    this.meta.setTag('twitter:title', 'Universal Tech Associates - Festering Global Partnerships');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
  }

  ngOnInit() {
  }

}
