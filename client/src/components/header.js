import React from 'react'
function Header() {
return(
    <span className="container center2"> 
    {/* Länkar till alla componenter */}
  <div>
  
    <a href="/Hem">Hem</a>
    <br></br>
    <a href="/customers">Egen API</a>
    
    <a href="/ProjectApi">Project Api</a>
    
    <a href="/AxiosApi">Axios Api</a>

  </div>
</span>
)
}

export default Header



