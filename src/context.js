import React, { useState, useContext } from "react";

// create context
const AppContext = React.createContext();
// We must have to create const using  React.createContext() and one AppProvider
// we will get two components 1-consumer ,2-provider we will use provider only

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 2nd-way: custom hook , it should be start with 'use' word like useGlobalContext
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// useContext will be looking for AppContext, so we will export AppContext, AppProvider
export { AppContext, AppProvider };
