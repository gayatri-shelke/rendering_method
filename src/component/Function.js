// function rendering(){
// var a=2;
// return(
//     <div>
//         {a===2?<h1> yes</h1>:<h1>no</h1>}
//     </div>
// )
// }
// export default rendering;






// class Function extends Component{
//     constructor(){
//         super()
//         var a=2;
//         if(a==2){
//             return(
//                 <h1>hello</h1>
//             )
//         }
//         else{
//             return(
//                 <h1>hii</h1>
//             )
//         }
//     }

// }

// export default Function;



// function rendering(){
//     switch('pune'){
//         case '1':
//             return(<h1>yes</h1>)
//         default:
//         return(<h1>no</h1>)
//     }
// }
// export default rendering;
    

// class rendering extends Component{
//     render(a){
        
//         if(a===2){
//             return(<h1>hey</h1>)
//         }
//         else{
//             return(<h1>hello</h1>)
//         }
        
//     }
// }
// export default rendering;



// class rendering extends Component{
//     render(){
//         switch('pune'){
//             case 'pune':
//                 return(<h1>hello</h1>)
//             default:
//                 return(<h1>hii</h1>)
//         }
//     }
// }
// export default rendering;

import React,{Component} from "react";
class rendering extends Component{
    name='gayu'
    render(){
        return(<div>
{this.name=='gayu'?<h1>yes</h1>:<h1>no</h1> }         
        </div>)
    }

}
export default rendering;