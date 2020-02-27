import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

type ReactFrm=React.FormEvent<HTMLFormElement>;


export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('');

  const handleSubmit= (e : ReactFrm): void =>{   
    e.preventDefault();
    setValue('');
  };
  
  return (
    <Fragment>
      <h1>Record List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e=>setValue(e.target.value)} required />
        <button type="submit">Add Record</button>
      </form>
    </Fragment>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
