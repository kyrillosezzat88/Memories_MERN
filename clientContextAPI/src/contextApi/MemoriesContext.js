import {createContext, useReducer} from 'react';
import MemoriesReducer from '../reducers/MemoriesReducer';

const initState = {
    posts:[],
    CurrentID:null
}

export const MemoriesContext  = createContext(initState);

const MemoriesProvier = (props) => {
    const [Memories,dispatch] = useReducer(MemoriesReducer , initState)
    return(
        <MemoriesContext.Provider value={{Memories,dispatch}}>
            {props.children}
        </MemoriesContext.Provider>
    )
}
export default MemoriesProvier;