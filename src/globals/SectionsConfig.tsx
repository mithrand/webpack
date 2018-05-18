import * as React from 'react';
import entitySection from 'components/EntitySection';

export interface ISection {
  title:string; // Titulo a mostrar para la seccion
  entityType:string; // Tipo de entidad
  icon:string; // nombre del icono
  apiPath:string; // url en la api
  apiCollectionName:string; // nombre de la coleccion en la api, normalmente en plural
  routePath:string; // routa de la url a utilizar
  component:React.ComponentType<any> // tipo de vista que se utilizara (entitySection o dashboar)
  columns:{key:string,caption:string, dataType:string}[];
}

export interface columnConfig {
  key:string;
  caption:string;
  dataType:string;
}

export const SectionsConfig: {[SectionName: string] : ISection } = {
  'alerts':{ 
    title:"Alerts", 
    entityType:"alert",
    icon:"alerts",
    apiPath:"alert",
    apiCollectionName:'alerts',
    routePath:"/alerts",
    component: entitySection,
    columns:[
      { key:"confirmed",caption:"Confirmed",dataType:"Confirmation" },
      { key:"ip",caption:"IP",dataType:"Link" },
      { key:"Tracked",caption:"Tracked",dataType:"DateTime" },
      { key:"Alerts",caption:"Alerts",dataType:"list" },
      { key:"Tags",caption:"Tags",dataType:"List" },
    ],
  },
  'ips':{ 
    title:"Ips", 
    entityType:"ip",
    icon:"ips",
    apiPath:"ip",
    apiCollectionName:'ips',
    routePath:"/ips",
    component: entitySection,
    columns:[
      { key:"confirmed",caption:"Confirmed",dataType:"Confirmation" },
      { key:"ip",caption:"IP",dataType:"Link" },
      { key:"Tracked",caption:"Tracked",dataType:"DateTime" },
      { key:"Alerts",caption:"Alerts",dataType:"list" },
      { key:"Tags",caption:"Tags",dataType:"List" },
    ],
  },
  'domains':{ 
    title:"Domains", 
    entityType:"domain",
    icon:"domains",
    apiPath:"domain",
    apiCollectionName:'domains',
    routePath:"/domains",
    component: entitySection,
    columns:[
      { key:"confirmed",caption:"Confirmed",dataType:"Confirmation" },
      { key:"ip",caption:"IP",dataType:"Link" },
      { key:"Tracked",caption:"Tracked",dataType:"DateTime" },
      { key:"Alerts",caption:"Alerts",dataType:"list" },
      { key:"Tags",caption:"Tags",dataType:"List" },
    ],
  },
  'certificates':{ 
    title:"Certificates", 
    entityType:"certificate",
    icon:"certificates",
    apiPath:"certificate",
    apiCollectionName:'certificates',
    routePath:"/certificates",
    component: entitySection,
    columns:[
      { key:"confirmed",caption:"Confirmed",dataType:"Confirmation" },
      { key:"ip",caption:"IP",dataType:"Link" },
      { key:"Tracked",caption:"Tracked",dataType:"DateTime" },
      { key:"Alerts",caption:"Alerts",dataType:"list" },
      { key:"Tags",caption:"Tags",dataType:"List" },
    ],
  },
  'pastebins':{ 
    title:"Pastebins", 
    entityType:"pastebin",
    icon:"pastebins",
    apiPath:"pastebin",
    apiCollectionName:'pastebins',
    routePath:"/pastebins",
    component: entitySection,
    columns:[
      { key:"confirmed",caption:"Confirmed",dataType:"Confirmation" },
      { key:"ip",caption:"IP",dataType:"Link" },
      { key:"Tracked",caption:"Tracked",dataType:"DateTime" },
      { key:"Alerts",caption:"Alerts",dataType:"list" },
      { key:"Tags",caption:"Tags",dataType:"List" },
    ],
  },
  'emails':{ 
    title:"Emails", 
    entityType:"email",
    icon:"emails",
    apiPath:"email",
    apiCollectionName:'emails',
    routePath:"/emails",
    component: entitySection,
    columns:[
      { key:"confirmed",caption:"Confirmed",dataType:"Confirmation" },
      { key:"ip",caption:"IP",dataType:"Link" },
      { key:"Tracked",caption:"Tracked",dataType:"DateTime" },
      { key:"Alerts",caption:"Alerts",dataType:"list" },
      { key:"Tags",caption:"Tags",dataType:"List" },
    ],
  },
}

export default Object.keys(SectionsConfig).map(key => SectionsConfig[key]);