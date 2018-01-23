import React, { Component } from 'react';
import {FormList} from './FormList';

export default  class SubmitForm  extends Component {
    constructor(prop) {
        super();
        this.state = {
            titleList: '',
            descriptionList: '',
            lists: []
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this)
    }

    handleTitle(e) {
        this.setState({
            titleList: e.target.value
        })
    }
    
    handleDescription(e) {
        this.setState({
            descriptionList: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let lists = [...this.state.lists];
        let compinedStates = `${this.state.titleList} - ${this.state.descriptionList}`
        lists.push(compinedStates);
        this.setState({
            lists,
            titleList: '',
            descriptionList: ''
        })
    }

    delete(i) {
        let lists = [...this.state.lists];
        lists.splice(i, 1);
        this.setState({lists});
        // let filtered = this.state.lists.filter((e) => {
        //     console.log(e[i])
        //     return e != i
        // });
        
        // this.setState({lists: filtered})

    }

    render () {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    Title
                    <input type="text" value={this.state.titleList} onChange={this.handleTitle}/>

                    Description
                    <input type="text" value={this.state.descriptionList} onChange={this.handleDescription} />
                    <input type="submit" value="submit" />
                </form>
                <FormList todoList={this.state.lists} deleteList={this.delete} />
            </div>
        )
    }
}