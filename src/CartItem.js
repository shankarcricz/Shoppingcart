import React from "react";
import { useState } from "react";

const CartItem = ({item}) => {
    let [qnty, setQnty] = useState(1);
    let [total, setTotal] = useState(item.price);
    const rise = () => {
        setQnty(qnty+=1)
        
    }
    const fall = () => {
        if(qnty==1) return;
        setQnty(qnty-=1)
      
    }
    return (
        <div className="row mb-5">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={item.image}
                            className="w-100" alt="Blue Jeans Jacket" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        </a>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <p><strong>{item.title}</strong></p>
                    <p>Size: M</p>
                    <button  type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                        title="Remove item">
                        M
                    </button>
                    <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                        title="Move to the wish list">
                        L
                    </button>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                        <button onClick={fall} className="btn btn-primary px-3 me-2">
                            -
                        </button>

                        <div className="form-outline">
                            <input disabled='disabled' value={qnty || 0}  id="form1" min="0" name="quantity" type="number" className="form-control" />
                            <label className="form-label">Quantity</label>
                        </div>

                        <button onClick={rise} className="btn btn-primary px-3 ms-2"
                        >
                            +
                        </button>
                    </div>

                    <p className="text-start text-md-center">
                        <strong>${item.price * qnty}</strong>
                    </p>
                </div>
            </div>
    );
}

export default CartItem;