import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const Q4 = ({ }) => {
    const [categoryList, setcategoryList] = useState([]);
    const [itemsList, setItemsList] = useState([]);
    let itemCategory = ''; // your incoming URL Route value

    let params = useParams();
    itemCategory = params.categoryId;

    
    useEffect(() => {
        //Double check your port
        fetch("http://localhost:5154/api/WebAPI/GetCategories")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setcategoryList(data)
            });
    }, [])


    // add your fetch  code here


    useEffect(() => {
        //Double check your port
        if (itemCategory) {
            fetch(`http://localhost:5154/api/WebAPI/GetItems?categoryID=${itemCategory}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setItemsList(data)
                }); 
        }
    }, [itemCategory])
        

    return (
        <div>
            <h2 className="text-center mb-2">ReactJS Q4</h2>
            <div className="row mb-3">
                <div className="col-4">
                    <div className="list-group">
                        {categoryList.map((data, index) => 
                            <Link to={`/TestQuestions/Q4/${data.CategoryId}` } key={data.CategoryId } className={`list-group-item list-group-item-action ${data.CategoryId == itemCategory && "active"}`}>
                            {data.CategoryName}
                         
                            </Link>
                        
                        )}
                    </div>
                </div>
                <div className="col">
                    {itemCategory &&
                        <div>
                            <div className="alert alert-success py-1 text-dark">
                                There are {itemsList.length} offences in this category:
                            </div>
                            <div className="border border-success rounded p-3">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>Item Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {itemsList.map(item =>
                                            <tr key={item.itemId} className="list-group-item d-flex justify-content-between align-items-start">
                                                <td className="fw-bold">{item.itemName}</td>
                                                <td>{item.itemDescription}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    }
                    {!itemCategory &&
                        <div className="alert alert-info text-dark">
                            <p>Select an Item Category from the list to view the items</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default Q4