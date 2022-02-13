import React,{Component} from 'react';
import {variables} from '../Variables.js';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import {ProfileComponent} from "./Profile";
import {ExternalApiComponent} from "./ExternalApi";
import Profile from "../components/Profile";

export class PublicAnimal extends Component {

    constructor(props){
        super(props);

        this.state={
            shelters:[],
            animals:[],
            modalTitle:"",
            AnimalId:0,
            AnimalName:"",
            Shelter:"",
            DateOfArriving:"",
            PhotoFileName:"anonymous.jpg",
            PhotoPath:variables.PHOTO_URL,

            AnimalIdFilter:"",
            AnimalNameFilter:"",
            animalsWithoutFilter:[],
        }
    }

    FilterFn(){
        var AnimalIdFilter=this.state.AnimalIdFilter;
        var AnimalNameFilter = this.state.AnimalNameFilter;

        var filteredData=this.state.sheltersWithoutFilter.filter(
            function(el){
                return el.AnimalId.toString().toLowerCase().includes(
                        AnimalIdFilter.toString().trim().toLowerCase()
                    )&&
                    el.AnimalName.toString().toLowerCase().includes(
                        AnimalNameFilter.toString().trim().toLowerCase()
                    )
            }
        );

        this.setState({shelters:filteredData});

    }

    sortResult(prop,asc){
        var sortedData=this.state.sheltersWithoutFilter.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        });

        this.setState({shelters:sortedData});
    }

    changeAnimalIdFilter = (e)=>{
        this.state.AnimalIdFilter=e.target.value;
        this.FilterFn();
    }
    changeAnimalNameFilter = (e)=>{
        this.state.AnimalNameFilter=e.target.value;
        this.FilterFn();
    }

    refreshList(){

        fetch(variables.API_URL+'animal')
            .then(response=>response.json())
            .then(data=>{
                this.setState({animals:data});
            });

        fetch(variables.API_URL+'shelter')
            .then(response=>response.json())
            .then(data=>{
                this.setState({shelters:data});
            });
    }

    componentDidMount(){
        this.refreshList();
    }


    render(){
        const {
            shelters,
            animals,
            modalTitle,
            AnimalId,
            AnimalName,
            Shelter,
            DateOfArriving,
            PhotoPath,
            PhotoFileName
        }=this.state;

        return(
            <div>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>
                            <div className="d-flex flex-row">


                                <input className="form-control m-2"
                                       onChange={this.changeAnimalIdFilter}
                                       placeholder="Filter"/>

                                <button type="button" className="btn btn-light"
                                        onClick={()=>this.sortResult('AnimalId',true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>

                                <button type="button" className="btn btn-light"
                                        onClick={()=>this.sortResult('AnimalId',false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </button>

                            </div>
                            AnimalId
                        </th>
                        <th>
                            <div className="d-flex flex-row">
                                <input className="form-control m-2"
                                       onChange={this.changeAnimalNameFilter}
                                       placeholder="Filter"/>

                                <button type="button" className="btn btn-light"
                                        onClick={()=>this.sortResult('AnimalName',true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                </button>

                                <button type="button" className="btn btn-light"
                                        onClick={()=>this.sortResult('AnimalName',false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </button>
                            </div>
                            AnimalName

                        </th>
                        <th>
                            Shelter
                        </th>
                        <th>
                            DOJ
                        </th>
                        <th>
                            Image
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {animals.map(emp=>
                        <tr key={emp.AnimalId}>
                            <td>{emp.AnimalId}</td>
                            <td>{emp.AnimalName}</td>
                            <td>{emp.Shelter}</td>
                            <td>{emp.DateOfArriving}</td>
                            <td>
                                <div className="p-2 w-50 bd-highlight">
                                    <img width="250px" height="250px"
                                         src={PhotoPath+emp.PhotoFileName}/>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">

                                    <div className="p-2 w-50 bd-highlight">

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Emp Name</span>
                                            <input type="text" className="form-control"
                                                   value={AnimalName}
                                                   onChange={this.changeAnimalName}/>
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Shelter</span>
                                            <select className="form-select"
                                                    onChange={this.changeShelter}
                                                    value={Shelter}>
                                                {shelters.map(dep=><option key={dep.ShelterId}>
                                                    {dep.ShelterName}
                                                </option>)}
                                            </select>
                                        </div>

                                        <div className="input-group mb-3">
                                            <span className="input-group-text">DOJ</span>
                                            <input type="date" className="form-control"
                                                   value={DateOfArriving}
                                                   onChange={this.changeDateOfArriving}/>
                                        </div>


                                    </div>
                                    <div className="p-2 w-50 bd-highlight">
                                        <img width="250px" height="250px"
                                             src={PhotoPath+PhotoFileName}/>
                                        <input className="m-2" type="file" onChange={this.imageUpload}/>
                                    </div>
                                </div>

                                {AnimalId==0?
                                    <button type="button"
                                            className="btn btn-primary float-start"
                                            onClick={()=>this.createClick()}
                                    >Create</button>
                                    :null}

                                {AnimalId!=0?
                                    <button type="button"
                                            className="btn btn-primary float-start"
                                            onClick={()=>this.updateClick()}
                                    >Update</button>
                                    :null}
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}