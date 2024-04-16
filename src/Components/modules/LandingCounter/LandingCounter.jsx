import React , {useEffect,useState} from 'react'

function LandingCounter({count}) {
    const [coursesCount,setCoursesCount]  = useState(0)
    
    useEffect(()=>{
        let interval = setInterval(() => {
          setCoursesCount(perveCount => perveCount + 1)
        }, 1);
        if(coursesCount === count){
          clearInterval(interval)
        }
        return ()=> {
            clearInterval(interval)}
      },[coursesCount])
  
  
  return (
    <span className="landing-status__count">{coursesCount}</span>
  )
}

export default LandingCounter