import { useState, useEffect } from 'react'


function Q5() {

    const [itemsList, setItemsList] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);


    useEffect(() => {
        //Double check your port
        fetch(`http://localhost:5154/api/WebAPI/GetItemsBetweenPriceRange?minPrice=${minPrice}&maxPrice=${maxPrice}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItemsList(data);


            })
    }, [minPrice, maxPrice])


    function searchQuery(evt) {
        const valueMin = document.querySelector("#InputOne").value;
        const valueMax = document.querySelector("#InputTwo").value;

        if (!valueMin || !valueMax) {
            alert("Must have min and max Value")

        } else {
            setMaxPrice(valueMax)
            setMinPrice(valueMin)

        }



    }
    return (
        <><div>
            <p>This is your Q5 Component</p>
            <p>Write your answer here!</p>
        </div><div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basicLabel">Search</span>
                </div>
                <input type="text" id="InputOne" defaultValue="" className="form-control" placeholder="Start Typing..." />
                <input type="text" id="InputTwo" defaultValue="" className="form-control" placeholder="Start Typing..." />
                <input type="submit" onClick={searchQuery} className="form-control btn btn-outline-primary" value="Submit" />
            </div><div className="row mb-3">
                <ul>
                    <li>Put your output components here</li>
                    {/*
                    Use the GetItemsBetweenPriceRange(decimal minPrice, decimal maxPrice) API method.
                    */ }
                    {itemsList.map((obj) => (
                        <li key={obj.itemId}>
                            ItemID:{obj.itemId} <br />
                            ItemName:{obj.itemName} <br />
                            ItemDescription: {obj.itemDescription} <br />
                            ItemCost:{obj.itemCost } <hr />



                        </li>


                    ))}

                </ul>
            </div></>
);

}

export default Q5;
