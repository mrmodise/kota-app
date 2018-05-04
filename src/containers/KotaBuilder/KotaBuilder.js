import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kota from '../../components/Kota/Kota';
import BuildControls from '../../components/Kota/BuildControls/BuildControls';

class KotaBuilder extends Component {
   state = {
       ingredients: {
           lettuce: 0,
           bacon: 0,
           cheese: 0,
           meat: 0
       }
   };

    render() {
        return (
            <Aux>
                <Kota ingredients={this.state.ingredients}>Kota</Kota>
                <BuildControls/>
            </Aux>
        );
    }
}

export default KotaBuilder;
