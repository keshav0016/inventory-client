import React, {Component} from 'react';
import axios from 'axios'

class AssetsAdd extends Component{
    constructor(props){
        super(props)
        this.state = {
            serial_number: '',
            asset_name: '',
            purchase_date: '',
            description: '',
            invoice_number: '',
            vendor: '',
            amount: '',
            gst: '',
            category: ''
        }
        this.handleSerial_number = this.handleSerial_number.bind(this)
        this.handleAsset_number = this.handleAsset_number.bind(this)
        this.handlePurchase_date = this.handlePurchase_date.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handleInvoice_number = this.handleInvoice_number.bind(this)
        this.handleVendor = this.handleVendor.bind(this)
        this.handleAmount = this.handleAmount.bind(this)
        this.handleGst = this.handleGst.bind(this)
        this.handleTotal = this.handleTotal.bind(this)
        this.handleCategory = this.handleCategory.bind(this)
    }
    render(){
        return(
            <div class="row">
                <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                    <input placeholder="Placeholder" id="serial_number" type="text" class="validate"/>
                    <label for="serial_number">serial_number</label>
                    </div>
                    <div class="input-field col s6">
                    <input id="asset_name" type="text" class="validate"/>
                    <label for="asset_name">asset_name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <input id="date" type="date" class="validate"/>
                    <label for="date">purchase_date</label>
                    </div>
                </div>
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                        <i class="material-icons prefix">mode_edit</i>
                        <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                        <label for="icon_prefix2">description</label>
                        </div>
                    </div>
                    </form>
                </div>
        
                <div class="row">
                    <div class="input-field col s12">
                    <input id="number" type="number" class="validate"/>
                    <label for="number">invoice_number</label>
                    </div>
                </div>
                </form>
            </div>
                    
        )
    }
}
export default AssetsAdd