import React from 'react'

const Beer = ({beers})=>{

    return (
        <div>
            <h1 className={"text-center"}>Beer List</h1>
            {beers.map((contact) => (
                <div className={"row justify-content-center my-2"}>
                    <div className={"col-xl-6"}>
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{contact.status}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Beer;