import { Items } from '../contracts/Items';
import {mockItems} from '../Mock/ItemsMock'

export const findAll = ()=>{
    return Promise.resolve(mockItems);
};

export const findById = (id:number)=>{
  const item = mockItems.find(item=>item.id===id);
  if(item){
    return Promise.resolve(item);
  }
  else{
    return Promise.reject();
  }
};

export const postWork = (newData:Items)=>{
    //changes to whole 
    mockItems.push(newData);
    return Promise.resolve(mockItems);
    // return Promise.resolve([...mockItems,newData]);
}

export const putForId = (id:number) => {
    //changing title
    mockItems[mockItems.findIndex(item=>item.id===id)].title = `changing title for id ${id} and put back in the list...`;
   return Promise.resolve(mockItems);
};

export const deleteForId = (id:number) => {
    mockItems.splice(mockItems.findIndex(item=>item.id===id),1);
    return mockItems;
};



