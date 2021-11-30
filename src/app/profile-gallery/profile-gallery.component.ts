import { Component, OnInit } from '@angular/core';
import { PetService } from '../service/pet.service';
import { Pet } from '../Pet';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {
  searchText2: string;
  pets: Pet[] = [];
  selectedPet: Pet | any;


addNewPet = this.formBuilder.group({
  name: '',
  kind: '',
  image: '',
  profileText: '',
  popularity: ''
});

  constructor( private _petService: PetService, private formBuilder: FormBuilder) {
    this.searchText2 = '';
  }


   
   getPets(): void {
    this._petService.getPets()
      .subscribe(pets => this.pets = pets);}


   selectPet(pet: Pet) {
        this.selectedPet = pet;

   }

   onSubmit(){
     this._petService.addPet(this.addNewPet.value).subscribe(data => {
      console.log('message::::', data);
      this.addNewPet.reset();
      this.getPets();
    });
   }


  ngOnInit(): void {
    this.getPets();
  }

}
