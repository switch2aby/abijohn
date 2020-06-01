
import React ,{Component} from 'react'
import SectorComponent from '../componets/SectorComponent'
import SortComponent from '../componets/SortComponent';
import Header from '../../../shared/componets/Header';
import Navigation from '../../../shared/componets/Navigation'
import Loader from '../../../shared/componets/Loader';
import Error from '../../../shared/componets/Error';
import {connect} from 'react-redux';
import {loadOutboundFlightsAction,openPopupAction} from '../../../store/actions/SearchResultActions';
import {bindActionCreators} from 'redux'
import FlightInfoComponent from '../componets/FlightInfoComponent';
import {loadLanguageContentAction} from '../../../store/actions/LanguageContentAction'
import {IntlProvider, FormattedMessage} from "react-intl"
import {addLocaleData} from 'react-intl';
import Loadable from 'react-loadable';




class SearchResultsComponent extends Component{
    /**
     * @author Yousuf Rifay
     * if you are implemeting cons()tractor dont forget to pass props to parent 
     * if you dont implement there will be a default constructer which not visible that will do the job of passing props to parent
     */
    constructor(props){
        super(props);
     
        console.log(props.page);
        console.log("[App.js] inside constructor",props);
        
    }
    
    getOptionText=()=>{
        return "options" ;
    }
    
   
    

    componentWillMount(){
        console.log("search result component successfully created");
    }

    shouldComponentUpdate(){
       return true
    }

    showPopup=(componetName)=>{
        console.log('popup to show'+componetName);
        this.props.openPopup(componetName);
    }

    getSortype=()=>{
        return 'RECOMMENDED';
    }

    closePopup=()=>{
       
    }
    componentDidMount(){
        this.props.loadLanguageContent();
        this.props.outBoundFlights();
        console.log("component did moun");
       
        console.log(this.props.languageContent);
        
      }

    Content(){
        let sector;
        
            if(this.props.flightResults){
                console.log(this.props.contents);
        console.log(this.props.locale);
                console.log(this.props.flightResults);
              sector=(
                <SectorComponent 
                flightResults={this.props.flightResults}
                showPopup={this.showPopup}    
                getOptionText= {this.getOptionText}
                openBrandDetails={this.openBrandDetails} 
                openFlightInfo = {this.openFlightInfo}
                content={this.props.contents}
                />
              )
            }else{
                debugger;
                sector=this.props.error?<Error/>:<Loader/>
            }
            
        

        switch(this.props.page){
            case 'sector': return(sector);
            case 'sort': return (<SortComponent showPopup={this.showPopup}/>);
            case 'flightinfo': return (<FlightInfoComponent flightdetail={this.state.flightinfo} showPopup={this.showPopup} />);
            default :return (sector);
        }
    }

    openBrandDetails=(a,b,c)=>{

    }

    openFlightInfo=(optiondId)=>{
 
     
       const flightOptionDetails = [... this.props.flightResults.flightOptionDetails]
       flightOptionDetails.map((flightOption)=>{
           if(optiondId == flightOption.optionId){
            console.log(flightOption);
              this.setState({
                  flightinfo:flightOption
              })
            
           }
       })

       this.showPopup("flightinfo")
    }
  

    render(){
      return(
        <IntlProvider locale={this.props.locale} 
        messages={this.props.contents}>
         <div>
             <Header/>
             <Navigation/>
             {this.Content()}
             
         </div> 
         </IntlProvider>
      )

    }

   

}
/**
 * 
 * @param {*} state 
 * @description mapStatetoProps is a function which expect state store in redux as argument 
 * and return a java script object.takes application state as argument and what ever return will be map to a props
 */

/* const mapStateToProps = state =>{
   return{
    flightResults:state.flightResults,
    fareOptionHeight:state.fareOptionHeight,
    isHybrid:state.isHybrid,
    page:state.page,
    error:state.error
   };
} */

const mapStateToProps = (state) => {
    return {  flightResults: state.searchResults.flightResults,
        fareOptionHeight: state.searchResults.fareOptionHeight,
        isHybrid: state.searchResults.isHybrid,
        page: state.searchResults.page,
        error: state.searchResults.error,
        locale:state.languageContent.locale,
        contents:state.languageContent.contents };
  }
  

const mapDispatchToProps = dispatch =>{
    return{
        loadLanguageContent :()=> dispatch(loadLanguageContentAction()),
        outBoundFlights: () => dispatch(loadOutboundFlightsAction()),
        openPopup: (componentName) => dispatch(openPopupAction(componentName)),
    };
 } 
 
  /* const mapDispatchToProps = dispatch =>{
   return bindActionCreators({
          outBoundFlights:loadOutboundFlightsAction
   },dispatch);
}   */



 

export default connect(mapStateToProps,mapDispatchToProps)(SearchResultsComponent);