import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    myForm: FormGroup = new FormGroup({});
    name: string = "";
    showImage: boolean = false;
    data: any = {};
    constructor(private apiService:ApiService){
    this.myForm = new FormGroup({
    name: new FormControl(''),
    });
}

ngOnInit(): void {

}

onSubmit(){
    const formValue = this.myForm.value;
    this.name= formValue.name;
    this.consultPokemon(this.name);
    this.myForm.reset();
}

consultPokemon(pokemon:string){
    this.apiService.getData(pokemon).subscribe({
        next: this.handleSuccessMethod.bind(this),
        error:this.handleErrorMethod.bind(this),
    })
}

handleSuccessMethod(data:any){
    this.showImage = true;
    this.data = data;
}

handleErrorMethod(){
        this.showImage = false;
        this.data.name = "Pokemon no encontrado"
    }
}
