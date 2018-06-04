import { Component, OnInit } from '@angular/core';
import {CipService} from '../../../services/cip.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
numero:any;
  constructor(public route : ActivatedRoute) {
    this.numero = this.route.snapshot.params['numero']

  }

  ngOnInit() {
  }

}
