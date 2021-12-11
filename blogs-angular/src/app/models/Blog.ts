export class Blog {
    constructor(
      public id : number,
      public username : string,
      public title : string,
      public topic : string,
      public description : string,
      public imageUrl : string,
      public creationDate : Date,
      public updatedDate : Date
    ){}
  }