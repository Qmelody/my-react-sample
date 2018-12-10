import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {Modal,Button} from 'react-bootstrap';

import Util from 'util';

class DeleteBusiness extends Component {

    static propTypes = {
        title: PropTypes.string,
        buttons: PropTypes.array,

        onClickCloseButton: PropTypes.func,
        removeShowModal:PropTypes.string
    };

    static defaultProps = {
        buttons: [],
        onClickCloseButton: () => {}
    };

    constructor(props) {
        super(props);

        Util.bindFunction([
            'hideModal'
        ], this);
    }

    hideModal() {

        $(this.popup).find('.fade.in').removeClass('in');
        setTimeout(() => {

            ReactDom.unmountComponentAtNode(this.popup);
            document.body.removeChild(this.popup);
            this.popup = null;
        }, 300);

        $('body').removeClass('modal-open')
    }

    componentWillMount() {
        const body = $('body');

        this.popup = document.createElement("span");
        body.append(this.popup);
        body.addClass('modal-open');
    }

    componentWillUnmount() {
        this.hideModal();
    }

    render() {
        const {
            title,
            buttons,
            children,
            onClickCloseButton,
            removeShowModal
        } = this.props;
        return(
            <Modal show={removeShowModal} onHide={this.props.onClickCloseButton}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { children }
                </Modal.Body>
                <Modal.Footer>
                    { buttons.map((btn, index) => React.cloneElement(btn, {
                        key: ['PageModal', 'button', index].join('-')
                    })) }
                </Modal.Footer>
            </Modal>
        )

    }
}

export default DeleteBusiness;