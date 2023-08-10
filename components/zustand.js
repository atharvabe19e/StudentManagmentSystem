import { create } from 'zustand'



export const useStore = create((set)=>({
    count :0,
    pageNumber:1,
    increasePageNumber:()=> set(state=>({pageNumber:state.pageNumber + 1})),
    decreasePageNumber:()=> set(state=>({pageNumber:state.pageNumber-1})),
    setPageNumber:()=>set(state=>({pageNumber:1})),
    modalData:[],
    setModalData:(newArray) => set({ modalData: newArray }),
  

    


    myData:[],
}))
