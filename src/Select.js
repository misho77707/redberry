import React, { useEffect, useState } from "react";
import './Info.css';

const Select = (props) => {
  const [teams, setTeams] = useState([])
  const [value, setValue] = useState("");
  const handlechange = (e) => {
      setValue(e.target.value);
      localStorage.setItem(props.selectInputValue, e.target.value);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setValue(localStorage.getItem(props.selectInputValue));}, []);

  const fetchData = () => {
    fetch(props.url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTeams(data.data)
      })
  }

  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <select  value={value} onChange={handlechange} className={props.Selecttype}>
        <option value="" disabled selected hidden>{props.defaultOpt}<div className="Team"></div></option>
          {teams.map(team => (
            <option key={team.id}>{team.name}</option>
          ))}
        </select>
        
    </div>
  )
}

export default Select