import {useState} from 'react'

export const Likes = () =>  {
    const [likes, setLikes] = useState(0)
    console.log("render", likes)
    const increment = () => {
      setLikes(likes+1)
      console.log(likes)
    }   
    return <button onClick={() => increment()}>Likes {likes}</button>
  }