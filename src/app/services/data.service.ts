import { Injectable } from '@angular/core'; 
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage:AngularFireStorage) { }
  uploadpdf(selectedpdf: any){
    const filepath = `folder/${Date.now()}`
    console.log(filepath);
    this.storage.upload(filepath,selectedpdf).then(()=>{
      console.log("PDF is uploaded sucessfully")
    })
  }
}
