export interface books{
  id: string;
  title:string;
  status :boolean ;
  picture : string;
  descri:string;
}
export interface PageBook{
  books:books[];
  page :number;
  size : number;
  totalPages:number;
}
