import React from 'react';
// import Page from '.'
import SubCategory from '../SubCategory/SubCategory';
// import Page from '../Page/Page'


class Property extends React.Component {
    state = {
        subCat: [
            {
                name: 'Rent',
                image: './images/rent.svg',
                link:'rent'
            },
            {
                name: 'Sale',
                image: './images/for-sale.svg',
                link:'sale'
            },
            {
                name: 'Project',
                image: './images/project.svg',
                link:'project'
            },
           
        ]
    }
    render() {
        return (
            <div className="container-fluid">
                <SubCategory subCat={this.state.subCat} />
                {/* <Page dataArray={this.state.dataArray} /> */}
            </div>
        );
    }
}

export default Property;