import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div>
        <nav>
            <Link to="test1">Test 1</Link>
            <Link to="test2">Test 2</Link>
        </nav>
    </div>
  )
}

export default Test