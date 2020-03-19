import React from 'react';
import ReactDOM from 'react-dom';
import SecondExample from '../lib/components/SecondExample'
import Example from '../lib/components/Example'
import Task from '../lib/components/TabExample'
import './index.css';
import req from 'request';
import { Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import { List, Avatar, Input, Button } from 'antd';
// import classnames from 'classnames';
import axios from "axios"
class LoadMoreList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputVal: '', data: [], date: '20/03/2020', count: 0, status: 1 };
        var dataList = [];
      //  this.fnLoadData();
    }
    filterByStatus = (value) => {
        this.setState({ status: value });
    }

    changeTaskStatus = (title, status) => {
        let { data } = this.state
        data.map(item => {
            if (item.title === title) {
                item.status = status === 1 ? 2 : 1
            }
            return item
        })
        this.setState({ data })
    }
    Remove = (title) => {
        // this.setState({data: this.state.data.filter((item, indexItem) => indexItem*1 !== index*1)})
        this.setState(prevState => {
            return {
                data: prevState.data.filter((item) => item.title !== title)
            }
        })

    }
    addTask = () => {

        var { inputVal: task, data } = this.state;
        console.log('data add', this.dataList);
        if (!task) {
            alert('empty')
            return;
        }
        let newTask = {
            Title: task,
            Status: 1
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].title === task) {
                alert('Data Exists')
                return;
            }
        }
        axios({
            url: 'http://localhost:5000/api/AddTodo',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            params:JSON.stringify(newTask)
        })
            .then(function (response) {
              
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });
        // data.push(newTask)

        this.setState({ data, inputVal: "" })

    };
    handleChange = (e) => {
        this.setState({ inputVal: e.target.value });
    }
    componentDidMount(){
        var { data } = this.state;     
        axios({
            url: 'http://localhost:5000/api/v1/todos',
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
        response.data.recordsets[0].forEach(element => {
            data.push(element);
            console.log('datpush',data)
        });
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });
            this.setState({data})
    }
   
  
    filterDataByStatus(status) {
        // this.fnLoadData();
        return this.state.data.filter(item => item.Status * 1 === status * 1)
    }
    render() {
        return (
            <div className="containner">
                <Row>
                    <Col span={14}>
                        <Example
                            date="10/03/2020" />
                        <SecondExample className="numbertask"
                            title={this.filterDataByStatus(this.state.status).length} />
                        <Row>
                            <Col span={20}>  <Input placeholder="Basic usage"
                                onChange={this.handleChange} value={this.state.inputVal} /></Col>
                            <Col span={4}>  <Button type="primary" className="btnAdd" onClick={this.addTask}>Add Task</Button></Col>
                        </Row>


                    </Col>
                    <Col span={10}>
                        <Task value={1} filterByStatus={this.filterByStatus} />
                    </Col>
                </Row>

                <List
                    itemLayout="horizontal"
                    dataSource={this.filterDataByStatus(this.state.status)}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    onClick={() => this.changeTaskStatus(item.Title, item.Status)}
                                    href="#" />}
                                title={<a href="https://ant.design">{item.Title}</a>}
                            />
                            <a className="iconRemove" onClick={() => this.Remove(item.Title)} > <DeleteOutlined /></a>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
ReactDOM.render(<LoadMoreList />, document.getElementById('root'));
serviceWorker.unregister();
