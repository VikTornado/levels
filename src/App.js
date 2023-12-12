import React, {useState} from "react";
import Basic from "./Components/Basic";
import Intermediate from "./Components/Intermediate";
import Advanced from "./Components/Advanced";

function App() {

    const [selectedItem, setSelectedItem] = useState(0)

    const data = [
        {id: 1, title: "Basic", description: "This is the Basic package!"},
        {id: 2, title: "Intermediate", description: "This is the Intermediate package!"},
        {id: 3, title: "Advanced", description: "This is the Advanced package!"},
    ]
    return (
        <>
            <div>
                <p className={"text-center text-4xl py-8"}>switching levels</p>
            </div>
            {data.map((x) => {
                return (
                    <div
                        onClick={() => setSelectedItem(x.id)}
                        className={!selectedItem ? "border-2 m-2 p-4 text-center hover:bg-amber-300" : "border-2 m-2 p-4 text-center hover:bg-amber-300 text-red"}
                        key={x.id}>
                        <p>{x.id}</p>
                        <p>{x.title}</p>
                        <p>{x.description}</p>
                    </div>
                )
            })}
            <div className={"text-center"}>
                <p>You have item {selectedItem} selected</p>
                <div className={"text-4xl my-3"}>
                    {selectedItem === 1 && <Basic/>}
                    {selectedItem === 2 && <Intermediate/>}
                    {selectedItem === 3 && <Advanced/>}
                </div>
            </div>
        </>
    );
}

export default App;
