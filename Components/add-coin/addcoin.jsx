import React from 'react'

const addcoin = () => {
  return (
    <>
        <div>
            <h1>Add Coin</h1>
            <form>
                <label>
                    Symbol:
                    <input type="text" name="symbol" />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" />
                </label>
                <label>
                    Quantity:
                    <input type="text" name="quantity" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    </>
  )
}

export default addcoin