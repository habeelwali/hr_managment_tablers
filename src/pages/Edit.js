import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
function Edit() {
    const list = useSelector((state)=>state)
    const dispatch = useDispatch()
   const {id} = useParams();
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const currentdata = list.find((list)=>list.id===parseInt(id))

    useEffect(()=>{
        if(currentdata){
            setName(currentdata.name);
            setEmail(currentdata.email);
            setContact(currentdata.contact);
        }
    },[currentdata])
    const handleSubmit=(e)=>{
        e.preventDefault()

        const data= {
            id:parseInt(id),
            name,
            email,
            contact,
        };
        dispatch({type:"UPDATE_USER",payload:data});


    

    }
  return (
    <div className="container " style={{width:"100%"}} >
             
    <div className='d-flex  justify-content-center mt-2'>
  
        <div class="col-md- col-lg-5  ">
       
        
            <div class="card  ">
            <form  className='ms-2' onSubmit={handleSubmit}>
                <div class="card-stamp">
                    <div class="card-stamp-icon bg-white text-primary">
                        {/* <!-- Download SVG icon from http://tabler-icons.io/i/star --> */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
                    </div>
                </div>
                <div class="card-body ms-0">
                <label class="form-label text-start">Name</label>
                    <div class="mb-3">
                       
                        <input type="text" class="form-control" name="example-text-input" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label class="form-label text-start">Email</label>
                        <input type="text" class="form-control" name="example-text-input" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div class="mb-3">
                        <label class="form-label text-start">Contact</label>
                        <input type="text" class="form-control" name="example-text-input" placeholder="Enter Contact"  value={contact} onChange={(e) => setContact(e.target.value)}/>
                    </div>
                </div>
                <button className="btn btn-success mb-2 text-center" type="submit">submit</button>
        </form>
            </div>
           
        </div>

        

       

           
          
    </div>
    
</div>
    )



  
}

export default Edit