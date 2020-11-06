import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairType = {
    id: number
    name: string
    priority: string
}; // need to fix any

export type AffairPriorityType = 'all' | 'high' | 'low' | 'middle'; // need to fix any



// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: 1, name: "React", priority: "high"},
    {id: 2, name: "anime", priority: "low"},
    {id: 3, name: "games", priority: "low"},
    {id: 4, name: "work", priority: "high"},
    {id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs:Array<AffairType>, filter: AffairPriorityType):Array<AffairType> => { // need to fix any
    if (filter === "all") {
        return affairs;
    }
    if(filter === "high"){
        affairs = affairs.filter(a => a.priority === 'high')
        return affairs
    }
    if(filter === "low"){
        affairs = affairs.filter(a => a.priority === 'low')
        return affairs
    }
    if(filter === "middle"){
        affairs = affairs.filter(a => a.priority === 'middle')
        return affairs
    }
    else return affairs; // need to fix
}


export const deleteAffair = (affairs: Array<AffairType>, id: number):Array<AffairType> => { // need to fix any
    affairs = affairs.filter( f => f.id !== id )
    return affairs
     // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs); // need to fix any
    const [filter, setFilter] = useState<AffairPriorityType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (id: number) =>  setAffairs(deleteAffair(affairs, id)); // need to fix any

    const setFunFilter = (a: AffairPriorityType) => {setFilter(a)}

    return (
        <div >
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <div className='main'>
                <Affairs
                    filterActive={filter}
                    data={filteredAffairs}
                    setFilter={setFunFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
