import React, { Component } from 'react'
import './salform.css';

export default class SalForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            name : "",
            Name : "",
            email : "",
            Email : "",
            bsal : "",
            ta : "",
            da : "",
            hra: "",
            lic: "",
            pf: "",
            net:""
        }
    }

    inputSet = (e) => {
            this.setState({[e.target.name]:[e.target.value]});
            
    }


    saveData = (e) => {
        e.preventDefault();

    

        this.setState({
            Name : this.state.name,
            Email : this.state.email
        });


        var netSal=0,ta =0,da = 0,hra=0,lic=0,pf=0;
        


        if(this.state.bsal >= 15000)
        {


            ta = (this.state.bsal * 40 ) / 100;
            da = (this.state.bsal * 35 ) / 100;
            hra = (this.state.bsal * 30 )/100;
            lic = (this.state.bsal * 25 )/100;
            pf = (this.state.bsal * 20)/100;

            this.setState({
                ta : ta,
                da : da,
                hra : hra,
                lic : lic,
                pf :pf,
                
            }); 
        
        }
        else if((this.state.bsal > 10000) && (this.state.bsal < 15000))
        {

            ta = (this.state.bsal * 35 ) / 100;
            da = (this.state.bsal * 30 ) / 100;
            hra = (this.state.bsal * 25 )/100;
            lic = (this.state.bsal * 20 )/100;
            pf = (this.state.bsal * 15)/100;
            
                        this.setState({
                            ta : ta,
                            da : da,
                            hra : hra,
                            lic : lic,
                            pf :pf,
                            
                        }); 
        }
        else if(this.state.bsal <= 10000)
        {
            ta = (this.state.bsal * 30 ) / 100;
            da = (this.state.bsal * 25 ) / 100;
            hra = (this.state.bsal * 20 )/100;
            lic = (this.state.bsal * 15 )/100;
            pf = (this.state.bsal * 10)/100;
            
                        this.setState({
                            ta : ta,
                            da : da,
                            hra : hra,
                            lic : lic,
                            pf :pf,
                            
                        }); 
        }
        netSal = parseInt(this.state.bsal) + parseInt(ta) + parseInt(da) + parseInt(hra) - (parseInt(lic) + parseInt(pf));

        
         this.setState({
             net : netSal
              })

    }

    render() {
        return (
            <div>
            <form method='post'>
            <h2>Form</h2> 
            <br/>
               <div className='example'>
                   <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="name" name='name' onChange={this.inputSet} /><br/>
                <br/>
                
                    <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="email" name="email" onChange={this.inputSet} /><br/>
                <br/>
                
                    <label>Basic Salary</label> &nbsp;
                    <input type="text" id="bsal" name='bsal' onChange={this.inputSet} /><br/>
                <br/>

                    <input type='submit' value="SUBMIT" onClick={this.saveData} id="frmid"/>
                </div>  

                <br/>
                <h2>Result</h2>
                <br/><br/>
                <div className='demo'>
                   <label>Name</label> &nbsp;
                    <input type="text" id="sname" readOnly  value={this.state.Name} /><br/><br/>
                
                
                    <label >Email</label> &nbsp;
                    <input type="text" id="mail" readOnly value={this.state.Email} /><br/><br/>
                
                
                    <label >TA</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="ta"  readOnly value={this.state.ta} /><br/><br/>

                    <label >DA</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="da" readOnly value={this.state.da} /><br/><br/>

                    <label >HRA</label> &nbsp;&nbsp;
                    <input type="text" id="hra" readOnly value={this.state.hra} /><br/><br/>

                    <label >LIC</label> &nbsp;&nbsp;&nbsp;
                    <input type="text" id="lic" readOnly value={this.state.lic} /><br/><br/>

                    <label>PF</label> &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="pf" readOnly value={this.state.pf} /><br/><br/>

                    <label >NET</label> &nbsp;&nbsp;
                    <input type="text" id="net" readOnly value={this.state.net} /><br/><br/>
                </div>  
            </form>
            </div>
        )
    }
}


