import { Component, OnInit } from '@angular/core';
import { Enquete } from '../enquete';
import { EnqueteService } from '../enquete.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-enquete',
  templateUrl: './create-enquete.component.html',
  styleUrls: ['./create-enquete.component.css']
})
export class CreateEnqueteComponent implements OnInit {
  enquete = new Enquete();

  constructor(private enqueteService: EnqueteService) { }

  ngOnInit() {
  }

 onSubmit() {
  this.enqueteService.postEnquete(this.enquete).subscribe();
 }
}
