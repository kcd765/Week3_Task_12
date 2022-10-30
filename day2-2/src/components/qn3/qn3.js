import React, { useState } from 'react'
import './qn3.css'

const qn3 = () => {

    const [fruitArr, setFruitArr] = useState([
        {
            id: 1,
            fruit: 'orange',
            qty: 20,
            price: 0.85
        }, {
            id: 2,
            fruit: 'banana',
            qty: 19,
            price: 1.1
        }, {
            id: 3,
            fruit: 'apple',
            qty: 30,
            price: 0.4
        }, {
            id: 4,
            fruit: 'pear',
            qty: 25,
            price: 0.65
        }
    ])


    const submit = () => {
        let newArr = [...fruitArr]
        newArr[2].fruit = 'watermelon';
        newArr[2].qty = 50;
        newArr[2].price = 4.3;
        setFruitArr(newArr);
    }

    const [obj, setObj] = useState({
        name: "John Smith",
        salary: 4000,
        age: 30
    })

    const submit2 = () => {
        setObj({...obj, salary: 5000, age: 34})
    }

    return (
        <div>
            <h2>Qn3a</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fruit</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {fruitArr.map(f => (
                        <tr key={f.id}>
                            <td>{f.id}</td>
                            <td>{f.fruit}</td>
                            <td>{f.qty}</td>
                            <td>{f.price.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button onClick={submit}>Update Index 2</button>

            <br/> <br/>

            <h2>Qn3b</h2>
            <p>Name: {obj.name}</p>
            <p>Salary: ${obj.salary}</p>
            <p>Age: {obj.age}</p>

            <button onClick={submit2}>Update 2 Properties</button>

        </div>
    )
}

export default qn3