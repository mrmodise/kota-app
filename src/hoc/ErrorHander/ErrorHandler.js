import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {error: null};

        componentDidMount() {
            axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
            });
        }
        
        errorConfirmed = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <Aux>
                    <Modal 
                        modalClosed={this.errorConfirmed}
                        show={this.state.error}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
};

export default errorHandler;
