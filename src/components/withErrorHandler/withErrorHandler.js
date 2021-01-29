import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqId);
            axios.interceptors.response.eject(this.resId);
        }

        componentWillMount() {
            this.reqId = axios.interceptors.request.use((request) => {
                this.setState({ error: null });
                return request;
            }, (error) => {

            });
            this.resId = axios.interceptors.response.use((response) => {
                return response;
            }, (err) => {
                this.setState({ error: err });
            })
        }

        cancelErrorHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.error} cancel={this.cancelErrorHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </React.Fragment>
            );
        }
    };
}

export default withErrorHandler;