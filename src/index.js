import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
class Body extends React.Component{
    constructor(props){
        super(props)
        this.state={
            item : "",
            list : ["pratik hi"],
            updateId : ""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addData = this.addData.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
        this.cutbox=this.cutbox.bind(this)
        this.update=this.update.bind(this)

    }
// creating functions--------------
    onChangeHandler(event){
        this.setState({
            item:event.target.value
        })
    }
    addData(event){
        var listInstance = this.state.list;
        if (this.state.item != ""){
            listInstance.push(this.state.item);
            this.setState({
                list:listInstance,
                item:""
            })
        }
    }   
    handleKeyPress = (event) => {
        if(event.key === 'Enter' & this.state.updateId==""){
            var listInstance = this.state.list;
            if (this.state.item != ""){
                listInstance.push(this.state.item);
                this.setState({
                    list:listInstance,
                    item:""
                })
            }
        }else if(event.key == "Enter"){
            var list=this.state.list;
            var id=this.state.updateId;
            var item=this.state.item;
            var newlist=[];
            for (var i of list){
                if (i==id){
                    newlist.push(item)
                }
                else{
                    newlist.push(i)
                }
            }
            // console.log(newlist);
            this.setState({
                list:newlist,
                item:"",
                updateId:""
            })
            document.getElementById(id).style.display = "block";
            document.getElementById("button").style.display = "none";
            document.getElementById("button2").style.display = "block";
            document.getElementById(id+"t").style.borderColor = "white";
        }
      }
    cutbox=(event)=>{
        // console.log(event.target)
        var data=document.getElementById(event.target.id)
        document.getElementById("button2").style.display = "block";
        document.getElementById("button").style.display = "none";
        // console.log(data.id);
        var listInstance=this.state.list
        var newlist=[]
        var count=1
        for( var i of listInstance){
            if (i==data.id & count >0){
                count--
                continue
            }
            newlist.push(i)
        }
        // console.log(newlist);
        this.setState({
            list:newlist,
            item:""
        })
    }
    update=(event)=>{
        document.getElementById(event.target.id).style.display = "none";
        document.getElementById("button").style.display = "block";
        document.getElementById("button2").style.display = "none";
        document.getElementById(event.target.id+"t").style.borderColor = "red";
        var data=document.getElementById(event.target.id);
        this.setState({
            updateId:data.id
        })
        // console.log(data.id)
        this.setState({
            item:data.id
        })
    }
    handelupdate=(event)=>{
        var list=this.state.list;
        var id=this.state.updateId;
        var item=this.state.item;
        var newlist=[];
        for (var i of list){
            if (i==id){
                newlist.push(item)
            }
            else{
                newlist.push(i)
            }
        }
        // console.log(newlist);
        this.setState({
            list:newlist,
            item:"",
            updateId:""
        })
        document.getElementById(id).style.display = "block";
        document.getElementById("button").style.display = "none";
        document.getElementById("button2").style.display = "block";
        document.getElementById(id+"t").style.borderColor = "white";
    }
    render(){
        var mainData = this.state.list.map((event,index)=>
        <div id={event+"t"} className="box"><div key={index}>{index+1+". "+event}</div><div className="cut">
            <i id={event} onClick={this.update} className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <i  id={event} onClick={this.cutbox} className="fa fa-trash-o" aria-hidden="true"></i></div></div>
        )
        return(
            <div>
                <div>
                    <h1 className="head">😎 To Do 😎</h1>
                </div>

                <div>
                    <div className="data">{mainData}</div>
                </div>
                <div className="foot">
                    <input type="text" onKeyPress={this.handleKeyPress} onChange = {this.onChangeHandler} value={this.state.item} placeholder="Add some here..." ></input>
                    <i id="button" onClick={this.handelupdate} className="fa fa-pencil-square-o" aria-hidden="true"></i><i id="button2" onClick={this.addData} className="fa fa-plus" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Body />,document.getElementById('root'))
