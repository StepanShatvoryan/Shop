import React, { Component } from 'react'

export class Categoris extends Component {
    constructor(props) {
        super(props)
            this.state = {
                categoris:  [
                    {
                        key: 'all',
                        name: 'all',
                    }, 

                    {
                        key: 'Furniture',
                        name: 'Furniture',
                    }, 
                    
                    {
                        key: 'Sofa',
                        name: 'Sofa',
                    },

                    {
                        key: 'Table chairs and sofa',
                        name: 'Table chairs and sofa',
                    },
                    
                    {
                        key: 'Beds',
                        name: 'Beds',
                    }
                ]
            
        }
    }
  render() {
    return (
      <div className='categoris'>
        {this.state.categoris.map(el => (
            <div key={el.key} onClick={() => this.props.choosCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categoris