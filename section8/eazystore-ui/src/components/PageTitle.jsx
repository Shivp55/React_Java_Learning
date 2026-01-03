import React from "react"

// Using Props for passing and getting data
// export default function PageTitle(props){
//     return <h1 className="page-title">{props.title}</h1>
// }

//Using destructuring
export default function PageTitle({title}){  //using destructuring instead of writing props , use directly the key
    return <h1 className="text-4xl font-primary font-extrabold text-center text-primary mt-4 py-2 dark:text-light">{title}</h1>
}