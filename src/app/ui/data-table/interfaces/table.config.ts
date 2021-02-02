export interface ITableConfig {
  columns: IHead[];
  containCheckbox: boolean;
}

interface IHead {
  dataKey: string;
  val: string;
}
