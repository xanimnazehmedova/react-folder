import React from 'react'

const TeamMemberDetail = ({selectedMember}) => {
    if(!selectedMember){
   return <p>select member</p>
    }
  return (
    <div>
         <div >
            <br />
            <h2> Name: {selectedMember.name}</h2>
            <p> Role: {selectedMember.role}</p>
            <p> Bio: {selectedMember.bio}</p>
         </div>
         
    </div>
  )
}

export default TeamMemberDetail