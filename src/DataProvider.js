import React, { createContext, useState } from 'react'
import Data from "./components/ProjectsData";

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [projects, setProjects] = useState(Data);

    const value = {
        projects : [projects, setProjects],
    }

    return (
        <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
    )
}

