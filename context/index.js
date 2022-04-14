import { useState, createContext, useMemo } from "react";
import topics from "../api/topics";

export const Context = createContext();

const Provider = ({ children }) => {
  const [searchInput, setSearchInput] = useState(null);
  const handleOnChange = (e) => setSearchInput(e.target.value);

  const values = useMemo(() => {
    const results = topics.filter((topic) => {
      const title = topic.title.toLowerCase();
      const content = topic.content.toLowerCase();
      const term = searchInput?.toLowerCase();
      console.log(title.indexOf(term) > -1);
      console.log(content.indexOf(term) > -1);
      return title.indexOf(term) > -1 || content.indexOf(term) > -1;
    });
    return !!searchInput?.length ? results : topics;
  }, [searchInput]);

  const value = useMemo(() => {
    console.log({ searchInput });
    return {
      search: handleOnChange,
      items: !!searchInput ? values : topics,
    };
  }, [searchInput]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
