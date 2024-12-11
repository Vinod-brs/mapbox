import React from "react";

export const Layout = (props) => {

  const { children } = props;

    return (
      <AppContext.Provider value={contextValue}>
       
        {children}
         
      </AppContext.Provider>
    )
}