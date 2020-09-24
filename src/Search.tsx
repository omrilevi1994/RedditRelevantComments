import * as React from 'react';

// Your props are your public API, so it's worth taking the
// time to use JSDoc to explain how it works:

export interface Props {
  search: CallableFunction,
}

const Search: React.FC<Props> = (props: any) => {

  const [Search, setSearch] = React.useState("");

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  }

  const handleClick = () => {
    if(Search) {
      props.search(Search);
      setSearch("");
    }
  }

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Search On Reddit</button>
    </div>
  )
}

export default Search;