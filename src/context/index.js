import { useState, createContext, useMemo } from "react";
import topics from "../api/topics";

export const Context = createContext();

const Provider = ({ children }) => {
  const [searchInput, setSearchInput] = useState(null);
  const handleOnChange = (e) => setSearchInput(e.target.value);

  const items = useMemo(() => {
    if(!!searchInput?.length) {
      return topics.filter((topic) => {
        const title = topic.title.toLowerCase(), content = topic.content.toLowerCase(), id = topic.id;
        const term = searchInput?.toLowerCase();
        return title.indexOf(term) > -1 || content.indexOf(term) > -1 || id.indexOf(term) > -1;
      });
    }
    return topics;
  }, [searchInput]);

  const value = useMemo(() => {
    return {
      search: handleOnChange,
      items
    };
  }, [searchInput]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
