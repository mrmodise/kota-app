import React, {Component, Fragment} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        state = {error: null};

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });

            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmed = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <Fragment>
                    <Modal 
                        modalClosed={this.errorConfirmed}
                        show={this.state.error}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
};

export default errorHandler;
