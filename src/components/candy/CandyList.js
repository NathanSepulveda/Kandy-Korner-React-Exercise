import React, { Component } from 'react'

// export default class LocationList  extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Location List</h1>
//                 <section>North Nashville 2000 North Way</section>
//                 <section>South Nashville 2000 South Way</section>
//             </article>
//         );
//     }
// }

// class CandyList extends Component {
//     render() {

//         return (
//             <section className="candies">
//             <h1>Candy List</h1>
//             {
//                 this.props.candies.map(candy =>
                    
//                         <div key={candy.id}>
//                         <strong>Candy</strong>: {candy.name} <strong>Type</strong>: {this.props.candyTypes.find(type => type.id === candy.candyTypeId).type} <br/>
//                         </div>
                    
//                 )
//             }
//             </section>
//         )
//     }
// }

class CandyList extends Component {
    render() {

        return (
            <section className="candies">
            <h1>Candy List</h1>
            {
                this.props.candyTypes.map(candyType =>
                    
                    <div key={candyType.id} class="types">

                        <strong>Candy Types</strong>: {candyType.type} <br/>
                        <strong>Candies</strong>: 
                        {
                            this.props.candies.filter(candy => candy.candyTypeId === candyType.id).map(cand => cand.name)
                        }
                        </div>
                    
                )
            }
            </section>
        )
    }
}

export default CandyList