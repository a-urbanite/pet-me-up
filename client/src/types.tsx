

   export interface Pet {
    _id: string,
    name: string,
    age: string,
    zip: string,
    gender: string,
    type: string,
    breed: string,
    image: string,
    description: string,
    ownerName: string,
    ownerEmail: string
  }

 export interface Pets {
    map(arg0: (pet: Pet) => JSX.Element): import("react").ReactNode;
    pets: Pet[];
}