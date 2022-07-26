import React, {Component} from 'react';
import {Stack, Typography} from '@mui/material';
import MyAlert from './MyAlert';
import Trigger from './Trigger';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertType: ""
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        console.log(value);
        this.setState({alertType: value});
    }

    render() {
        const alertTypes = new Map();
        alertTypes.set("warning", {title: "Warning", content: "This is a warning message"});
        alertTypes.set("info", {title: "Information", content: "This is an information message"});
        alertTypes.set("error", {title: "Error", content: "This is an error message"});

        const type = this.state.alertType;

        return (
            <>
                <Stack sx={{width: '600px', padding: '20px'}} spacing={2}>
                    <Typography variant={'h4'}>Alerts</Typography>
                    {
                        type ? <MyAlert
                            type={type}
                            title={alertTypes.get(type).title}
                            content={alertTypes.get(type).content}
                        /> : null
                    }
                    <Trigger onChange={this.onChange} alertTypes={Array.from(alertTypes.keys())} />
                </Stack>
            </>
        );
    }
};

export default App;
