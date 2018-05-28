import React, {Component} from 'react';
import classes from './Kota.css';
import KotaIngredient from './KotaIngredient/KotaIngredient';

class Kota extends Component {
    render() {

        console.log(this.props);
        let transformedIngredients = Object
            .keys(this.props.ingredients)
            .map(igKey => {
                return [...Array(this.props.ingredients[igKey])].map((_, i) => {
                    return <KotaIngredient type={igKey} key={igKey + i}/>
                });
            }).reduce((prev, current) => {
                return prev.concat(current)
            }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>You have not added any ingredients</p>
        }

        return (
            <div className={classes.Kota}>
                <KotaIngredient type={"bread-top"}/>
                {transformedIngredients}
                <KotaIngredient type={"bread-bottom"}/>
            </div>
        );
    }
}

export default Kota;
