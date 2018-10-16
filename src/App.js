import React, { Component } from 'react';
import logo from "./Basic_arithmetic_operators.svg.png"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      maxNumber : 25,
      a : 5,
      
      plus: true,
      minus:true,
      times:true,
      division:true
      

    };
    this.changeMaxNumber = this.changeMaxNumber.bind(this)
    this.changeMaxNumberLog = this.changeMaxNumberLog.bind(this)
    this.updateN = this.updateN.bind(this)
    this.getA = this.getA.bind(this)
    this.changePlus = this.changePlus.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
   
    //this.handleMark = this.handleMark.bind(this)
  }
  
   componentDidMount() {
  document.title = "Drill Math + - * /";
  
  document.body.style.background = "#f3f3f3 url('https://owocki.com/wp-content/uploads/2017/01/abstract-background-preview-25.jpg') ";
  
  document.body.style.backgroundSize="100%";
  
  
  }
  
  show (event) {
    
    
    
    //event.target.style.WebkitTransition = "all 2s ease"; // Code for Safari 3.1 to 6.0
    //event.target.style.transition = "all 2s";
      
    var x = event.target;
    x.style.opacity="1";
    setTimeout(() => {x.style.opacity="0"},3333)
  }
  hide (event) {
    event.target.style.opacity="0"
  }
  changeMaxNumber (event) {
    
    this.setState ( {
      maxNumber : event.target.value
    })
  }


    changeMaxNumberLog (event) {
    this.setState ( {
      maxNumber : Math.floor (9+5.01*event.target.value*(1.2-Math.cos(event.target.value/100)) + Math.exp(event.target.value/8.688452))})
    }/*10.11495*/
  
  updateN() {
    //var aa = Math.ceil(this.state.maxNumber*Math.random());
    this.setState({
      a:this.aa,
      
    });
    //this.handleMark();
  }

  equationCreate () {        
    var a = Math.ceil(this.state.maxNumber*Math.random());
    var b = Math.ceil(this.state.maxNumber*Math.random());
    // in a random event, a and b can be 1, but we don't want to use 1 --> equations would be boring. so we find different ranom number
    while (a === 1) {var a = Math.ceil(this.state.maxNumber*Math.random());}
    while (b === 1) {var b = Math.ceil(this.state.maxNumber*Math.random());}
    var v = a*b;
    
    for (var i=1; i<1000; i++) {
        var randomOneFour = Math.ceil(4*Math.random())

      if (randomOneFour === 1 && this.state.plus) {
        return <text><p><div  onClick = {this.show}> {a} + {b} = <span style = {{ opacity:"0"}} className="thing">{a+b}</span></div></p> </text>
      }

      if (randomOneFour === 2 && this.state.minus) {
        return <text><p> {a} - {b} = <span className="thing" style = {{ opacity:"0"}} onClick = {this.show} >{a-b}</span></p> </text>
      }

      if (randomOneFour === 3 && this.state.times) {
        return <text><p> {a} * {b} = <span className="thing" style = {{ opacity:"0"}} onClick = {this.show} >{a*b}</span></p> </text>
      }

      if (randomOneFour === 4 && this.state.division) {
        return <text><p> {v} : {b} = <span className="thing" style = {{ opacity:"0"}} onClick = {this.show} >{a}</span></p> </text>
      }
    }
    
    //return <text><p> {v} {this.state.mark} {a} =<br/></p></text>
    }

  getA() {
    var pole = new Array();
    for (var i = 1; i<14; i++) {
    pole.push(this.equationCreate())
    }
    
    return pole
  }

  changePlus () {
    this.setState({
      plus : !this.state.plus,
      
    })
  }

  hideEm() {
    document.getElementById('tip').style.display = "none"
    
    document.getElementById('logo').style.display = "none"
    document.getElementById('br').style.display = "none"
    document.getElementById('maxSettings').style.display = "none"
  }

  showEm() {
    document.getElementById('logo').style.display = "inline"

    
  }
  

  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.id;

      this.setState({
          [name]: value
        });

        
      /*setTimeout (() => {
          this.handleMark();
        }, 0)*/
  }

  /*
  handleMark() {
      
    if(this.state.plus===true) {
      this.setState ({
        mark : "+"
      })
    }
    else {
      this.setState ({
        mark : "----"
      })
    }

    if(this.state.minus===true) {
      this.setState ({
        mark : "-"
      })
    }

    if(this.state.times===true) {
      this.setState ({
        mark : "*"
      })
    }

    if(this.state.division===true) {
      this.setState ({
        mark : ":"
      })
    } 
  }
  */

  render() {
    
    
    
    //var a = Math.ceil(this.state.maxNumber*Math.random());
    //var b = Math.ceil(this.state.maxNumber*Math.random());
    //var v = a*b

//console.log(pole)
   

    return (
      
      <div className="App">
      
      <div style={{float:"left", marginLeft:"20px", position:"absolute"}} id="tip" onClick = {this.hide}>Tip: click on empty space next to equation to show result</div>
      
       <img src={logo} id="logo" className="App-logo" alt="logo" />

        <div style={{height:"55px", justifyContent:'center', alignItems:'center',display:"flex"}}>
        
            <div style = {{float:"left"}}>
              <button onClick = {this.updateN}>NEW</button>
              
              <button style = {{marginRight:"10px", marginLeft:"10px"}} onClick={() => {this.hideEm(); window.print(); this.showEm()}}>PRINT</button>
            </div>
          {/* checkbox */}
          
            <div style = {{float:"left"}}>
              <input type="checkbox" id="plus" name="feature"
                    value="scales" onChange = {this.handleInputChange} checked={this.state.plus} />
              <label for="scales">+</label>
            </div>

            <div style = {{float:"left"}}>
              <input type="checkbox" id="minus" name="feature"
                    value="scales" onChange = {this.handleInputChange} checked={this.state.minus} />
              <label for="scales">-</label>
            </div>

            <div style = {{float:"left"}}>
              <input type="checkbox" id="times" name="feature"
                    value="scales" onChange = {this.handleInputChange} checked={this.state.times} />
              <label for="scales">*</label>
            </div>

            <div style = {{float:"left"}}>
              <input type="checkbox" id="division" name="feature"
                    value="scales" onChange = {this.handleInputChange} checked={this.state.division} />
              <label for="scales">:</label>
            </div>
          </div>
        <h1>
        {/*Calculate {v} : {a} = */}

        </h1>
        <div id="maxSettings">
        Max: <input type="number" style={{marginLeft:"10px", marginRight:"8px", width:Math.log10(this.state.maxNumber)*10+22, height:"25px", fontSize:"17px", textAlign:"center"}} value={this.state.maxNumber} onChange={this.changeMaxNumber} />
        
        <input type="range" step="1" defaultValue="12" style = {{width:"200px"}}onChange={this.changeMaxNumberLog} />
        </div>

        <br />
        
        <h3>
       
          <br id="br" />
          

            <div >
            <div style = {{width:"33%", float:"left", color:"#125"}}>
            <this.getA/>
            </div>
            <div style = {{width:"33%", float:"left",color:"#512"}}>
            <this.getA/>
            </div>
            <div style = {{width:"33%", float:"left", color:"#251"}}>
            <this.getA/>
            </div>
            </div> 
        
        </h3>
      
      </div>
    );
  }
}

export default App;
