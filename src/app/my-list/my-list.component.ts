import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModelService } from '../model.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  color: number;
  type: string;
  cost: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { name: 'Hydrogen', color: 1.0079, type: 'H', cost: 0},
//   {name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {
  displayedColumns: string[] = ['name', 'color', 'type', 'cost', 'actions'];
  data = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // dataSource = ELEMENT_DATA;
  constructor(public model: ModelService) {
    this.data.filterPredicate = (data: any, filter: string) => {
      return data.color.includes(filter);
     };

    this.model.jsonData.subscribe((newData) => {      
      this.data.data = newData;
    })
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.data.paginator = this.paginator
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }

  deleteRow(rowId: any) {
    this.data.data = this.data.data.filter((val: any) => {
      return val.id != rowId;
    })
  }
}
