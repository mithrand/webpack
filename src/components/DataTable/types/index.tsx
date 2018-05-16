export interface DataTableProps {

}

export interface DataTableConnected {

}

export interface DataTableHeaderProps{
  
}

export interface DataTableHeaderConnected{
  numPerPage:number;
  entities?:{total:number,[id:string]:any};
  UpdateNumPerPage(numPerPage:number):void;
}

export interface DataTablePaginationProps{

}

export interface DataTablePaginationConnected{

}


export interface DataTableBodyProps {

}

export interface DataTableBodyConnected { 
  entities?:{ total:number,[id:string]:any };
  selectedEntity?:string;
}