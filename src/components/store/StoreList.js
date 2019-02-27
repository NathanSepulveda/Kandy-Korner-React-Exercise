import React, { Component } from 'react'


class StoreList extends Component {
    render() {
        
        return (
            <section className="stores">
            <h1>Store List</h1>
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        {store.name}
                        {store.address}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoreList