import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnqueteService } from '../enquete.service';
import { Location } from '@angular/common';
import { Enquete } from '../enquete';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-get-enquete',
  templateUrl: './get-enquete.component.html',
  styleUrls: ['./get-enquete.component.css']
})
export class GetEnqueteComponent implements OnInit {

  private numeroDossier: number;
  enquete: Enquete;
  constructor(private route: ActivatedRoute, private enqueteService: EnqueteService, private location: Location) { }

  ngOnInit() {
    this.getEnquete();
  }

  getEnquete(): void {
    this.numeroDossier = +this.route.snapshot.paramMap.get('numeroDossier');
    this.enqueteService
    .getEnquete(this.numeroDossier)
    .subscribe(suspect => this.enquete = suspect);
}
}
