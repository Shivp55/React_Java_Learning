import React from "react"

// Using Props for passing and getting data
// export default function PageTitle(props){
//     return <h1 className="page-title">{props.title}</h1>
// }

//Using destructuring
export default function PageTitle({title}){  //using destructuring instead of writing props , use directly the key
    return <h1 className="page-title">{title}</h1>
}