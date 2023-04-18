export class FilterConfig {
    public type: string;
    public title: string;
    public subType: string;
    displayData:any[];
    
    constructor(type:string,title:string,subType:string,displayData:any[])
    {
        this.type = type;
        this.title = title;
        this.subType = subType;
        this.displayData = displayData;
    }
    
}
