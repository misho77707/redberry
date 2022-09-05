import React, { useEffect, useState } from "react";
import './Info.css';

const Select2 = (props) => {
  const [teams, setTeams] = useState([])
  const [pos, setPos] = useState([])
  const [value, setValue] = useState("");
  const handlechange = (e) => {
      setValue(e.target.value);
      localStorage.setItem(props.selectInputValue, e.target.value);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setValue(localStorage.getItem(props.selectInputValue));}, []);

  const fetchData = () => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTeams(data.data)
      })
      fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPos(data.data)
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
        <select  value={value} onChange={handlechange} className={props.Selecttype}>
        <option value="" disabled selected hidden>{props.defaultOpt}<div className="Team"></div></option>
          {pos.map(team=>(
            <option key={team.team_id} value={teams.id}>{team.name}</option>
          )
            
          )}
        </select>
    </div>
  )
}

export default Select2