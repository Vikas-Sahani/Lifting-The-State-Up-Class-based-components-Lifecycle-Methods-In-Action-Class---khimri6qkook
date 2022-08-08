import React, { useState } from "react";
import "./../styles/App.css";

// let GlobalId =1;
function App() {
	const [inputVal, setInputVal] = useState("");
	const [data, setData] = useState([]);
	const [cnt, setCnt] = useState(1);

	return (
	<div id="main">
		{/* //Do not alter main div
		//Please do not alter the functional component as tests depend on the type of component. */}
		<input 
			type='text' id="task"
			onChange={function(e){
				setInputVal(e.target.value);
			}}
			value={inputVal}
		/> &nbsp;
		<button 
			type="submit" 
			id="btn" 
			onClick={function(){
				if(inputVal.length===0){
					return;
				}

				// let copyOfData = data.slice();
				// let taskObj = {
				// 	task:inputVal,
				// 	id:GlobalId++,
				// 	complete:false
				// }
				// copyOfData.push(taskObj);
				setData([...data, inputVal]);

				setInputVal("")
			}}
		>Add</button>

		<ol>
			{data.map((obj, idx)=>{
				// let task = obj.task;
				// let id = obj.id;
				// let complete= obj.complete;

				return(<>
					<li 
						// key={id} 
						className="list"
					>
						<input 
							type="text" 
							// disabled={!complete}
							// onChange={function(e){
							// 	let copyOfData = data.slice();
							// 	for(let taskObj of copyOfData){
							// 		if(taskObj.id === id){
							// 			taskObj.task = e.target.value;
							// 		}
							// 	}
							// 	setData(copyOfData);
							// }} 
							// value={task}
							value={obj}
						/> &nbsp;
						<button 
							className="delete" 
							onClick={function(e){
								let copyOfData = data.filter((obj, ElmentIdx)=>{
									// return obj.id !== id;
									return idx !== ElmentIdx;
								})
								setData(copyOfData);
						}}>Delete</button> &nbsp;
						{/* {complete?
						<button 
							className="editTask saveTask" 
							disabled={task.length===0}
							onClick={function(e){
								console.log(e.target);
								let copyOfData = data.slice();
								for(let taskEl of copyOfData){
									if(taskEl.id === id){
										taskEl.complete = !taskEl.complete;
									}
								}
								setData(copyOfData);
								setInputVal("");
							}}
						>Save</button>:
						<button className="edit" 
							onClick={function(){
								let copyOfData = data.slice();
								for(let taskEl of copyOfData){
									if(taskEl.id === id){
										taskEl.complete = !taskEl.complete;
									}
								}
								setData(copyOfData);
						}}>Edit</button>
						}  */}
					</li>
				</>)
			})}
		</ol>
	</div>
	);
}
export default App;
