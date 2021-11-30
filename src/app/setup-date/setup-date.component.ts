import { Pet } from './../Pet';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  sendTextForm = this.formBuilder.group({
      name: ''
  });

private _pet!: Pet;

  constructor( private petService: PetService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  get pet(){
    return this._pet;
  }

  onSubmit() {
    // this.petService.sendMessage(this.sendTextForm.value).subscribe(data => {
    //   this.sendTextForm.reset();
    // });
  }


  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];
    this.petService
      .findPetByName(name)
      .subscribe(pet => this._pet = pet);
  }

}
