import React from 'react'

const Beer = ({beers})=>{

    return (
        <div>
            <h1 className={"text-center"}>Beer List</h1>
            {beers.map((contact) => (
                <div className={"row justify-content-center my-2"}>
                    <div className={"col-xl-4"}>
                        <div className="card text-center">
                            <div className={"view"}>
                                <img className={"img-fluid"} src={contact.labels.large}/>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{contact.name}</h2>
                                <h6 className="card-subtitle mb-2 text-muted">{contact.description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Beer;