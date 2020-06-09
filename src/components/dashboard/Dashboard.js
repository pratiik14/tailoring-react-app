import React,{Component} from 'react';
import Notifications from './Notification'
import ProjectList from '../projects/ProjectList'
import menCategory from '../../images/menCategory.jpg'
import womenCategory from '../../images/womenCategory.jpg'
class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col">
                        
                        {/* <ProjectList /> */}
                            <h1>CHOOSE CATEGORY</h1>
                        
                    </div>
                    {/* <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div> */}
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={menCategory} alt="Logo"/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">MEN<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src={womenCategory} alt="Logo"/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">WOMEN<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
                
                <nav>
                    <div class="nav-wrapper">
                        <div class="col s12">
                            <a href="#!" class="breadcrumb">First</a>
                            <a href="#!" class="breadcrumb">Second</a>
                            <a href="#!" class="breadcrumb">Third</a>
                        </div>
                    </div>
                </nav>
            </div>
            
        )
    }
}
export default Dashboard;