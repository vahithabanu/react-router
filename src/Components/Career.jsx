import React from 'react';


const Career = () => {
  return (
   
    <div className='container'>
        <div className='row  mt-3' style={{gap:'20px'}}>
            

    
      <div className="card" style={{width: '18rem',border:'none',marginBottom:'50px'}}>
  <img src="https://www.guvi.in/blog/wp-content/uploads/2023/03/java.jpeg" className="card-img-top" alt="Card image cap" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  <div className="card-body " style={{borderBottom:'1px solid grey',marginBottom:'10px',padding:'10px'}}>
    <h5 className="card-title">Java Full Stack Development Course</h5>
    <br></br>
    <small className="card-text text-muted">Available in &nbsp;<button style={{border:'none',borderRadius:'3px'}}>ENGLISH</button>&nbsp;<button style={{border:'none',borderRadius:'3px'}}>TAMIL</button></small>
   
    </div>
<p className='card-text'>EMI Options Available</p>
<p className='card-text'>Placement Guidance</p>
<p className='card-text'>1:1 Mentor Doubt Clearing Sessions</p>
<p className='card-text'><button style={{border:'1px solid green',width:'100px' ,height:'50px',borderRadius:'10px'}}>Know More </button>&nbsp;<button style={{border:'none',background:'#0DBA4B',width:'100px',height:'50px',borderRadius:'10px'}}>Syllabus</button></p>
  </div>



  <div className="card" style={{width: '18rem',border:'none',marginBottom:'50px'}}>
  <img src="data:image/png;base64,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" className="card-img-top" alt="Card image cap" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  <div className="card-body " style={{borderBottom:'1px solid grey',marginBottom:'10px',padding:'10px'}}>
    <h5 className="card-title">Automation Testing Course with Java</h5>
    <br></br>
    <small className="card-text text-muted">Available in &nbsp;<button style={{border:'none',borderRadius:'3px'}}>ENGLISH</button>&nbsp;<button style={{border:'none',borderRadius:'3px'}}>TAMIL</button></small>
   
    </div>
<p className='card-text'>EMI Options Available</p>
<p className='card-text'>Placement Guidance</p>
<p className='card-text'>1:1 Mentor Doubt Clearing Sessions</p>
<p className='card-text'><button style={{border:'1px solid green',width:'100px' ,height:'50px',borderRadius:'10px'}}>Know More </button>&nbsp;<button style={{border:'none',background:'#0DBA4B',width:'100px',height:'50px',borderRadius:'10px'}}>Syllabus</button></p>
  </div>


  
  <div className="card" style={{width: '18rem',border:'none',marginBottom:'50px'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaH77Iv00YLEfeTfhR86BR24YJDBG4vgjSpg&s" className="card-img-top" alt="Card image cap" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  <div className="card-body " style={{borderBottom:'1px solid grey',marginBottom:'10px',padding:'10px'}}>
    <h5 className="card-title">Data Engineering Course with Bigdata and Hadoop</h5>
    <br></br>
    <small className="card-text text-muted">Available in &nbsp;<button style={{border:'none',borderRadius:'3px'}}>ENGLISH</button></small>
   
    </div>
<p className='card-text'>EMI Options Available</p>
<p className='card-text'>Placement Guidance</p>
<p className='card-text'>1:1 Mentor Doubt Clearing Sessions</p>
<p className='card-text'><button style={{border:'1px solid green',width:'100px' ,height:'50px',borderRadius:'10px'}}>Know More </button>&nbsp;<button style={{border:'none',background:'#0DBA4B',width:'100px',height:'50px',borderRadius:'10px'}}>Syllabus</button></p>
  </div>



  
  <div className="card" style={{width: '18rem',border:'none',marginBottom:'50px'}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfJHeMPP2kdtr6rkmYJz779byV3wvioBakw&s" className="card-img-top" alt="Card image cap" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  <div className="card-body " style={{borderBottom:'1px solid grey',marginBottom:'10px',padding:'10px'}}>
    <h5 className="card-title">AutoCAD Course for Civil Engineering</h5>
    <br></br>
    <small className="card-text text-muted">Available in &nbsp;<button style={{border:'none',borderRadius:'3px'}}>ENGLISH</button>&nbsp;<button style={{border:'none',borderRadius:'3px'}}>TAMIL</button></small>
   
    </div>
<p className='card-text'>EMI Options Available</p>
<p className='card-text'>Placement Guidance</p>
<p className='card-text'>1:1 Mentor Doubt Clearing Sessions</p>
<p className='card-text'><button style={{border:'1px solid green',width:'100px' ,height:'50px',borderRadius:'10px'}}>Know More </button>&nbsp;<button style={{border:'none',background:'#0DBA4B',width:'100px',height:'50px',borderRadius:'10px'}}>Syllabus</button></p>
  </div>


















</div>
</div>

  )
}

export default Career
