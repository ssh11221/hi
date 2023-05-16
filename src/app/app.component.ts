import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'',
  styleUrls: ['./app.component.css'],
  // providers:[DemoService]
})
export class AppComponent {
  title='Angular_Tutorial';
  // users:any=[{username:"hemant sahu",email:"jakaa",gender:"Male",country:"Japan",checked:true},{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true},{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true},{username:"hemant",email:"jakaa",gender:"jajaj",country:"jjaja",checked:true}];
  // showForm=false;

  // Name:any="";
  // demo=new DemoService();
  // constructor(){
  //     console.log(this.demo.name) ;
  // }
  
  //  ShowForm(){
  //      this.showForm=true;
  //  }
  //   Changename(){
  //     this.demo.ChangeName();
  //   }
  //  onUserCreated(data:any){
  //         console.log(data);
  //         this.users.push({username:data.username,email:data.email,gender:data.gender,country:data.country,checked:data.checked});
  //  }


   InitialName!: string;
   Name!: string;
   updatedName!: string;
   showList=true;
   showEdit=false;
   showRbs=false;

   reSet(){
    this.showList=false;
    this.showEdit=false;
    this.showRbs=false;
   }



   storeDate(event:any){
       this.InitialName=event
       this.Name=event;
       this.reSet();
       this.showEdit=true;
      //  alert(this.Name);
   }
  
   rbsShow(event:any){
       this.updatedName=event;
       this.reSet();
       this.showRbs=true;
   }

   BackButtonClicked(){
       
       this.Name=this.updatedName;
       this.reSet();
       this.showEdit=true;

   }

   CancelChange(){
       console.log(this.Name,this.InitialName);
       this.reSet();
       this.showEdit=true;
       this.Name=this.InitialName;
    //    alert(this.Name)
       
       

   }

    
}
