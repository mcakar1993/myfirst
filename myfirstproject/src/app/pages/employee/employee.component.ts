import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public showvalue : boolean;

  constructor(private router : Router, private acroute : ActivatedRoute) 
  { 
		this.showvalue = false;
		alert("Employee service");
		
		this.acroute.params.subscribe(out =>{
		
		console.log( out );
		
		});
		
		this.acroute.queryParams.subscribe(out => {
		
		console.log( out );
		
		});
		
  }

  ngOnInit() 
  {
		
  
  }

}
