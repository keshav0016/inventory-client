import React, {Component} from 'react';
import axios from 'axios'

class Assets extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
        this.handleList = this.handleList.bind(this)
    }
    componentWillMount(){
        this.handleList()
    }
    handleList(){
        axios({
            method: 'get',
            url: 'http://localhost:3001/asset/list',
            withCredentials: true
        })
        .then((res)=>{
            if(res.data.message === 'assets'){
                this.setState({
                    data: res.data.assets
                })
                
            }else{
                alert('assets not found')
            }
        })
    }
    render(){
        return(
            <div class='assets'>
            <div class='centered'>
              <table class='bordered '>
              <thead>
                <tr>
                  <th>asset_id</th>
                  <th>serial_number</th>
                  <th>asset_name</th>
                  <th>purchase_date</th>
                  <th>description</th>
                  <th>invoice_number</th>
                  <th>vendor</th>
                  <th>amount</th>
                  <th>gst</th>
                  <th>total</th>
                  <th>current_status</th>
                  <th>category</th>
                </tr>
              </thead>
              <tbody>{this.state.data.map(function(item,key){
                return(
                  <tr key={key}>
                  <td>{item.asset_id}</td>
                  <td>{item.serial_number}</td>
                  <td>{item.asset_name}</td>
                  <td>{item.purchase_date}</td>
                  <td>{item.description}</td>
                  <td>{item.invoice_number}</td>
                  <td>{item.vendor}</td>
                  <td>{item.amount}</td>
                  <td>{item.gst}</td>
                  <td>{item.total}</td>
                  <td>{item.current_status}</td>
                  <td>{item.category}</td>
                  <td ><a class='dropdown-trigger btn-mini' href='#' data-target='dropdown1'><i class="material-icons">more_vert</i></a>

                    <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">update</a></li>
                    <li><a href="#!">delete</a></li>
                    <li><a href="#!">history</a></li>
                    
                    </ul>
              
                      
                          
                  </td>
                </tr>
                )
              })}
              </tbody>
              </table>
                <a class="btn-floating btn-large waves-effect waves-light" onClick={this.handleAdd}><i class="material-icons">add</i></a>
              
            </div >
            
            </div>
        )
    }
}
export default Assets