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

export const postWork = ()=>{
    //changes to whole 
    return Promise.resolve(mockItems);
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



