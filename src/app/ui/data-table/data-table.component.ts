import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import { ITableItem } from './interfaces/item.interface';
import { ITableConfig } from './interfaces/table.config';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() tblConfig: ITableConfig;
  @Input() data: ITableItem[] = [];
  @Output() rowSelectedEvn: EventEmitter<any> = new EventEmitter<any>();
  @Output() checkboxEvn: EventEmitter<any> = new EventEmitter<any>();
  @ViewChildren('rows') private rows: QueryList<ElementRef>;

  selectedIndex = null;
  constructor() {}

  ngOnInit(): void {}

  rowSelected(e: MouseEvent, rowData: any, index: number): void {
    if (this.checkIfClickIsFromCheckbox(e)) return;

    if (this.selectedIndex === null) {
      this.addClass(index, 'table-active');
      this.selectedIndex = index;
    } else {
      this.removeClass(this.selectedIndex, 'table-active');
      this.addClass(index, 'table-active');
      this.selectedIndex = index;
    }
    this.rowSelectedEvn.emit(rowData);
  }

  getValue(item: any, index): string {
    const dataKey = this.tblConfig.columns[index]?.dataKey;
    if (dataKey) return item[dataKey];
  }
  checkboxEvent(e, item: any): void {
    this.checkboxEvn.emit({ val: e.target.checked, item: item });
  }
  trackByIndex = (index: number, obj: any): number => {
    return index;
  };
  private checkIfClickIsFromCheckbox(e): boolean {
    if (e.target.classList.contains('form-check-input')) return true;
    return false;
  }
  private addClass(index, cssClass: string): void {
    this.rows.toArray()[index].nativeElement.classList.add(cssClass);
  }
  private removeClass(index, cssClass: string): void {
    this.rows.toArray()[index].nativeElement.classList.remove(cssClass);
  }
  clearSelections(): void {
    this.rows.forEach((row) => {
      if (row.nativeElement.classList.contains('table-active'))
        row.nativeElement.classList.remove('table-active');
    });
  }
}
