import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Fragment} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';

class Trigger extends Component {

    constructor(props) {
        super();
        this.state = {
            alertState: "",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            alertState: event.target.value
        })
        this.props.onChange(event.target.value)
    }

    render() {
        return (
            <Fragment>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select an Alert</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select an Alert"
                        value={this.state.alertState}
                        onChange={this.onChange}
                    >
                        <MenuItem value={'info'}>Info</MenuItem>
                        <MenuItem value={'warning'}>Warning</MenuItem>
                        <MenuItem value={'error'}>Error</MenuItem>
                    </Select>
                </FormControl>
            </Fragment>
        )
    }
}

Trigger.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Trigger;

