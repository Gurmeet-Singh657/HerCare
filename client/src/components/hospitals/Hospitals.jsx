import "./hospitals.css"

const Hospitals = () => {
    return (
        <div className="hospitaldetails" >
            <div className="inputForms">
                <div className="form">Please enter location to find hospitals in that area</div>
                <input type="text" className="formInput" placeholder="Enter location" />
                <button type="submit" className="submitBtn">NEXT</button>
            </div>
        </div>
    )
}

export default Hospitals