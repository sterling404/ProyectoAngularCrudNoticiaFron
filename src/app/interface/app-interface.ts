export interface Blog {
    id: number;
    title: string;
    subtitle: string;
    body: string;
    report_type: string;
    is_primary: boolean;
    publisher_name: string;
    publisher_job: string;
    created_at?: string;
  }
  export interface  typeBlog {
    id:number;
    name:string;
    
  }
  export interface  jobs {
    id:number;
    name:string;
    
  }
  // report_type: 'Educacion',
  //   is_primary: true,
  //   publisher_name: 'Louvendy sterling',
  //   publisher_job: 'Informatico',
  //   created_at: 