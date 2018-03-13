import {
	Component,
	OnInit
}
from '@angular/core';
import {
	ActivatedRoute
}
from '@angular/router';
import {
	Router
}
from '@angular/router';

 @ Component({
	selector : 'app-company',
	templateUrl : './company.component.html',
	styleUrls : ['./company.component.css']
})

export class CompanyComponent implements OnInit 
{
	constructor(private route : ActivatedRoute, private router : Router) {

		const queryparam = { ids : [1,2,3],  kum : [5,6,7] };
		
		this.route.params.subscribe( res => {
			if (!res.id) {
				alert("Customer Refreshed");
			} else {
				alert(res.id);
			}
		})
		
		this.router.navigate(['/employee/1'], { queryParams: queryparam});
		
	}

	ngOnInit() {}

}
