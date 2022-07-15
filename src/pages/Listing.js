import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function Listing() {
  
    const list = useSelector((state)=>state)
    
  return (
    <div className="container">
            <div className="text-center">
                <div className="col-sm-8,text-center">
                <table className="table">
                    <thead>
                      <tr>
                      <th>#</th>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Number</th>
                          <th></th>
                      </tr>
                    </thead>
                   <tbody>
                    {
                        list.map((list,id)=>(

                            <tr>
                            <td>{id+1}</td>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.contact}</td>
                            <td>
                              <Link className='btn btn-success'  to={`/edit/${list.id}`}>edit</Link>
                            </td>
                           </tr>
                        ))
                    }
                  
                   
                   </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )



  

}

export default Listing