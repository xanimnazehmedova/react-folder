import React from 'react'

const TeamMemberCard = ({member,setSelectedMember, children}) => {
  return (
    <div>
        <br />
        <div onClick={()=>{setSelectedMember(member)}}>
        <h2>{member.name}</h2>
        <p> Role: {member.role}</p>
        <p> Bio: {member.bio}</p>
        {children}
        </div>
    </div>
  )
}

export default TeamMemberCard