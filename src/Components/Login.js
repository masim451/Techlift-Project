import React, {useEffect, useState} from 'react'
import axios from 'axios';


function Login() {
    // API fetching
    const [data, setData]=useState([])

    const fetchData = () => {
      fetch('http://localhost:4000/show')
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setData(response);
        });
      }

      const [user,setUser]=useState({
        name:"",
        description:"",
        activity:"",
        duration:"",
        date:""
      })

      const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
      };
      console.log(user)

      const [edit, setEdit]=useState(false)
      const [editid,setEditid]=useState("")
      const onSubmit = (e) => {
        e.preventDefault();
        if (edit) {
          axios
            .put(`http://localhost:4000/update/${editid}`, user)
            .then(res => {
              setEdit(false);
              setUser({
                name:"",
                description:"",
                activity:"",
                duration:"",
                date:""
              });
              fetchData();
            });
        } else {
          axios
            .post('http://localhost:4000/create', user)
            .then(res => {
                setUser({
                name:"",
                description:"",
                activity:"",
                duration:"",
                date:""
              });
              fetchData();
            });
        }
      };

      const editData = id => {
        let newUser = data.find(element => {
          return element._id === id;
        });
        setEdit(true);
        setEditid(id);
        setUser({
          name: newUser.name,
          description: newUser.description,
          activity: newUser.activity,
          duration:newUser.duration,
          date:newUser.date
        });
      };

      // Delete Data
    const deleteData = (id) => {
      axios
      .delete(`http://localhost:4000/delete/${id}`)
      .then(res => {
      fetchData();
    });
  };

useEffect(()=>{
  fetchData();
},[])

  return (
    <div>
    <form className='lbimg' onSubmit={onSubmit}>
        <div className='container col-6 p-5'>

        <div className='form-group'>
            <label>Name</label>
            <input type="text" className="form-control" value={user.name} name="name" onChange={handleChange}/>
        </div>

        <div className='form-group'>
            <label>Description</label>
            <input type="text" className='form-control' value={user.description} name="description" onChange={handleChange}/>
        </div>

        <div className='form-group'>
            <label>Select Activity</label>
            <div className="mb-3">
            <select className="custom-select" id="inputGroupSelect04" value={user.activity} name="activity" onChange={handleChange} >
                <option selected>Choose...</option>
                <option value="run">Run</option>
                <option value="cycling">Bicycle Ride</option>
                <option value="swim">Swim</option>
                <option value="walk">Walk</option>
                <option value="hike">Hike</option>
            </select>
            </div>
        </div>

        <div className='form-group'>
            <label>Duration</label>
            <input type="time" className='form-control' value={user.duration} name="duration" onChange={handleChange}/>
        </div>

        <div className='form-group'>
            <label>Date</label>
            <input type="date" className='form-control' value={user.date} name="date" onChange={handleChange}/>
        </div>

        <div className='form-group'>
          <input type="submit" className='btn btn-info'/>
        </div>
        </div>
    </form>
    <div className='gradient-custom'>
      <div className='container-fluid row'>
        <div className='card-deck mt-2 mb-2 ml-2 mr-2'>
          {
          data.map((a,i) => (
          <div className='col-4' key={i}>
            <div className="card mb-1">
              <div className="card-body cardcolor">
                <h5 className="card-title">Name : {a.name}</h5>
                <h6>Activity Type : {a.activity}</h6>
                <h6>Duration : {a.duration}</h6>
                <h6>Date : {a.date}</h6>
                <h6 className="card-text">Description : {a.description}</h6>
                <button className="btn btn-outline-success mr-2" onClick={()=>editData(a._id)}>Edit</button>
                <button className="btn btn-outline-danger" onClick={()=>deleteData(a._id)}>Delete</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login