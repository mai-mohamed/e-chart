import React from "react";
import ReactEcharts from 'echarts-for-react';
import {option1 ,option2 ,option3 ,option4 ,option5} from './options';
function TestChart(){
    return(
        <div>
             <ReactEcharts  option={option2}  style={{padding:"100px" ,height:"80vh"}}/>
             <ReactEcharts  option={option1}  style={{padding:"100px" ,height:"80vh"}}/>

           {/* <ReactEcharts  option={option3} />
           <ReactEcharts  option={option4} /> */}
           <ReactEcharts  option={option5}  style={{padding:"100px" ,height:"80vh"}}/>
        </div>
    )
}

export default TestChart