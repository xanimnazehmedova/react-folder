import React, { useState } from 'react'
import TeamMemberCard from './TeamMemberCard'
import TeamMemberDetail from './TeamMemberDetail'
import { teamMembers } from './TeamMembers'

const Team = () => {


const [selectedMember, setSelectedMember] = useState(null)

  return (
    <div>
        <h1>team</h1>
        <br />
        <div>
            {teamMembers.map(member =>(
             <TeamMemberCard key={member.id} member={member} setSelectedMember={setSelectedMember} >
                  <p>Email: {member.email}</p>
              </TeamMemberCard>
      
            ))}
        </div>

        <TeamMemberDetail selectedMember={selectedMember} />
      
    </div>
  )
}

export default Team