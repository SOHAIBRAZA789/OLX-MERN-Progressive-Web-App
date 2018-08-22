import React, { Component } from 'react';


class AdDetail extends Component {
    state = {
        ad: {
            name: 'My Ad Name',
            picture: '/images/iron.svg',
            details: 'My Add Details',
            condition: 'My Ad Condition',
            postedBy: 'poster name',
            buyBy: 'customer name',
            price: 15000,
            postedTime: 'time',
            contact: 30406548654,
            link: '/books/music/ads/buy',
            status: 'active'
        }
    }
    // componentDidMount() {
    //     console.log(JSON.parse(this.props.location.name))
    //     let ad;
    //     if (this.props.location.name) {
    //         ad = JSON.parse(this.props.location.name)
    //         localStorage.setItem('ad', this.props.location.name)
    //     } else {
    //         ad = JSON.parse(localStorage.getItem('ad'))
    //     }
    //     this.setState({
    //         ad
    //     })

    // }
    render() {
        return (
            <div className="container-fluid">
               
                <div className="mb-3">
                    <div className='container-fluid row h-100 justify-content-center align-items-center'>
                        <img className="card-img-top" src={this.state.ad.picture} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container">
                                <h1 className="display-4">{this.state.ad.name}</h1>
                                <p className="card-text">{this.state.ad.details}.</p><hr />
                                <p className="card-text"><b>Price</b> <span className='float-right'>{this.state.ad.price}</span>.</p><hr />
                                <p className="card-text"><b>Item Condition</b> <span className='float-right'>{this.state.ad.condition}</span></p><hr />
                                <p className="card-text"><b>Posted By</b> <span className='float-right'>{this.state.ad.postedBy}</span></p><hr />
                                <p className="card-text"><b>Ad Status</b> <span className='float-right'>{this.state.ad.status}</span></p><hr />
                                <p className="card-text"><b>Contact</b> <span className='float-right'><a href={`tel:${this.state.ad.contact}`}>{this.state.ad.contact}</a></span></p><hr />
                                <p className="card-text"><small className="text-muted">Posted Time Is <span className='float-right'>{this.state.ad.postedTime}</span></small></p><hr/>
                                <button className="btn btn-dark">Save Ad Offine</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



// const AdDetail = () => (
//     <div>
       
//         <h1> AdDetail Ad Pages </h1>
//     </div>
// );

export default AdDetail ;