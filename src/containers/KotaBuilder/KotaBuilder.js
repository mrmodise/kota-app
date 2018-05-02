import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kota from '../../components/Kota/Kota';

class KotaBuilder extends Component {
   state = {
       ingredients: {
           salad: 1,
           bacon: 1,
           cheese: 2,
           meat: 2
       }
   };

    render() {
        return (
            <Aux>
                <Kota ingredients={this.state.ingredients}>Kota</Kota>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default KotaBuilder;
