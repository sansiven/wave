import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';

class CollapseCheckbox extends Component {

    state = {
        open: false,
        checked: []
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

    handleToggle = value => () => {
        //const checked = this.stete.checked
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if(currentIndex === -1){
            newChecked.push(value);
        }else{
            newChecked.splice(currentIndex,1)
        }

        console.log(newChecked)

        this.setState({
            checked: newChecked
        }, () =>{
            this.props.handleFilters(newChecked)
        })
    }

    renderList = () => (
        this.props.list ? 
            this.props.list.map((value) => (
                <ListItem key={value._id} style={{padding: '10px 30px'}}>
                    <ListItemText primary={value.name}/>
                    <ListItemSecondaryAction>
                        <Checkbox 
                            color="primary"
                            onChange={this.handleToggle(value._id)}
                            checked={this.state.checked.indexOf(value._id) !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            ))
        : null
    )

    render() {
        return (
            <div className="collapse_items_wrapper">
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
                            {this.renderList()}
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

export default CollapseCheckbox;