import React from 'react'

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Beer extends React.Component{

    render(){
        return (
            <MDBTable className={"table-responsive"}>
                <MDBTableHead color="primary-color-dark" textWhite>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Alcohol %</th>
                        <th>Organic</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        this.props.beers.map((beer) => (
                        <tr>
                            <td><img  alt={"N/A"} src={beer.labels.icon}/></td>
                            <td>{beer.name}</td>
                            <td>{beer.description}</td>
                            <td>{beer.abv}</td>
                            <td>{beer.isOrganic}</td>
                        </tr>
                        ))
                    }
                </MDBTableBody>
            </MDBTable>
        );
    }
}

export default Beer;