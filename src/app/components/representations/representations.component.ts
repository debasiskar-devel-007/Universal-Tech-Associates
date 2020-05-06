import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-representations',
  templateUrl: './representations.component.html',
  styleUrls: ['./representations.component.css']
})
export class RepresentationsComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Universal Tech Associates - Our Representation');
    this.meta.setTag('og:description', 'Introducing, negotiating and structuring deals for emerging technologies and companies with the largest global partnerships in the world through expert legal representation and engagement.');
    this.meta.setTag('twitter:description', 'Introducing, negotiating and structuring deals for emerging technologies and companies with the largest global partnerships in the world through expert legal representation and engagement.');

    this.meta.setTag('og:keyword', 'Universal Tech Associates Representation, Universal Tech Associates Expert Representation, UTA Legal Representation');
    this.meta.setTag('twitter:keyword', 'Universal Tech Associates Representation, Universal Tech Associates Expert Representation, UTA Legal Representation');

    this.meta.setTag('og:title', 'Universal Tech Associates - Our Representation');
    this.meta.setTag('twitter:title', 'Universal Tech Associates - Our Representation');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/logo-twitter.jpg');
   }

  ngOnInit() {
  }

}
