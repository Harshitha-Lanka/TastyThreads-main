import React from 'react';
import person from './person';


function Namelist() {
  const persons=[
    {
      id:1,
      Name:'yesh',
      age:20,
      skill:'python'
    },
    {
      id:2,
      Name:'Harsh',
      age:21,
      skill:'java'
    },
    {
      id:3,
      Name:'raj',
      age:23,
      skill:'wordpress'
    }
  ]
  
  const personlist = persons.map(person=> <person key={person.id} person={person}/>)
  return <div>{personlist}</div>
  }

    
//     const names=['rama','raja','riya']
//     const Namelist=names.map(names=><h2>{names}</h2>)
//   return  <div>{Namelist}</div>

    
  


export default Namelist;
