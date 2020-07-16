import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core'

class CollapseRadio extends Component {
    
    state={
        open: false,
        value: '0'
    }

    componentDidMount(){
        if(this.props.initState){
            this.setState({
                open:this.props.initState
            })
        }
    }

    handleClick = () => {
        this.setState({
            open: !this.state.open
        })
    }

    arrowTopOrDown =() =>(
        <FontAwesomeIcon 
            icon={this.state.open ? faAngleDown : faAngleUp}
            className="icon"
        />
        
    )

    renderList = () => (
        this.props.list ?
            this.props.list.map( value => (
                <FormControlLabel 
                    key={value._id}
                    value={`${value._id}`}
                    control={<Radio/>}
                    label={value.name}
                />
            ))
        :null
    )

    handleChange = (event)  => {
        this.props.handleFilters(event.target.value)
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <List style={{
                    borderBottom: '1px solid #dbdbdb'
                }}>
                    <ListItem onClick={this.handleClick} style={{padding:'10px 23px 10 0', cursor:'pointer'}}>
                        <ListItemText 
                            primary={this.props.title}
                            className="collapse_title"
                        />
                        {this.arrowTopOrDown()}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <RadioGroup
                                aria-label="prices"
                                name="prices"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                {this.renderList()}
                            </RadioGroup>
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

export default CollapseRadio;