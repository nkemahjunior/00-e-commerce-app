"use client"

 function AdminLinks({session}) {

    // const {data:{user},error} = await supabase.auth.getUser();

    let isAdmin;

    if(session !== false)
     ({isAdmin} = session.user.user_metadata)

    
   
 console.log(isAdmin)

    
    return (
        <ul className="space-y-1">
          {session === false ?  <li className="capitalize font-light">sign up</li> : '' }

           {
            session === false ? <li className="capitalize font-light">sign in</li> : <li className="capitalize font-light">logout</li>
           }
           
           
           { 
            isAdmin && <li className="capitalize font-light"> admin dashboard</li>
           } 
        </ul>
    )
}

export default AdminLinks
