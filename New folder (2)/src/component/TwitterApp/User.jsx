import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap'
import apiInstance from './Instance'
import { getFileFullUrl, getProfileFileUrl } from '../utils/file'
import { getUserShortName } from './shortname'

const User = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})
  const [isFollowLoading, setIsFollowLoading] = useState(false)

  const getUserByUserId = async ()=>{
    setLoading(true)
    try {
      const data = await apiInstance.get(`/profile/other/${id}`)

    setUser(data?.data?.data?.user || [])
      
    } catch (error) {
      console.log(error);
    }

    const followUser = async ()=>{
      setIsFollowLoading(true)
      try {
        const data = await apiInstance.post(`/follow/${id}`, {
          headers: {
                   Authorization: `Bearer ${localStorage.getItem('token')}`
          }
  
      } )
        setIsFollowLoading(false)
        getUserByUserId()
      } catch (error) {
        console.log(error);
      }
         
    }


  }
  useEffect(()=>{
    getUserByUserId()
  }, [id])

  return (
   <Row>
     <Col>
    
    <Card >
      <CardHeader>
        <CardTitle>
          {user?.name} - {user?.email}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
      <Col>
      {user?.profile_photo_path ? (
          <img src={getFileFullUrl(user?.profile_photo_path)} style={{width: 200}} alt="" />
         ): (
          <div style={{
            width: 100,
            height: 100,
            border: '1px solid' ,
            borderRadius: '50%' ,
            alignItems: 'center',
            lineHeight: '99px',
            textAlign: 'center'

          }}>{getUserShortName(user)}</div>
         )}
      </Col>
      <Col>
      {user?.username ? (
        <p> <strong>Username:</strong> {user?.username}</p>
      ) : ( <p><strong>Username:</strong> {user?.username}</p>)}


      {user?.bio ? (
        <p> <strong>Bio:</strong> {user?.bio}</p>
      ): (<p><strong>Bio:</strong> {user?.bio}</p>)}
      </Col>
      <Col>
      {user?.following_count ? (
        <p> <strong>Following:</strong> {user?.following_count}</p>
      ): (<p> <strong>Following:</strong> {user?.following_count} </p>)}

      {user?.followers_count ? (
        <p> <strong>Followers:</strong> {user?.followers_count}</p>
      ): (<p> <strong>Followers: </strong>{user?.followers_count} </p>)}
      </Col>
        </Row>

      </CardBody>
    </Card>
    </Col>
   </Row>
  )
}

export default User