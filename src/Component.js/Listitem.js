import React from "react";

const App = (props) => {
    const number = [6,16,3,4,7,9,3]

    const listitem = number.map((element) =>{
        return <li>{element}</li>
    })
    console.log(listitem);

    return(
        <div>
            <h1>The Numbers of Given:</h1>
            <ul>
                <li>{listitem}</li>
            </ul>
        </div>
    )
}

export default App;