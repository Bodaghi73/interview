import React from "react";

const ListContext = React.createContext({
	list: [],
	setList: (list) => {},
});
export const ListProvider = ListContext.Provider;
export default ListContext;