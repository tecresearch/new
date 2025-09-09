import React, { useState } from "react";
import "./index.css"

export default function KanbanBoard() { 

	let [tasks, setTasks] = React.useState([])

	let [stagesNames, setStagesNames] = React.useState(['Backlog', 'To Do', 'Ongoing', 'Done']);

	const [newTask,setNewTask]=useState('')




	let stagesTasks = [];
	for (let i = 0; i < stagesNames.length; ++i) {
		stagesTasks.push([]);
	}


	const clickHandler =()=>{

		if(newTask.trim()===''){
			return;
		}

			
				const newTaskObj = {
					id: Date.now(), 
					name: newTask,
					stage: 0
				};

		  
		  setTasks([...tasks,newTaskObj])

		  setNewTask("");
		

			
	}

		const clickForward =(index,task)=>{

		      if(index+1<stagesTasks.length){
					setTasks(prevTasks =>
						prevTasks.map(t =>
							t.id === task.id ? { ...t, stage: index + 1 } : t
						)
						);
			}
	    }

     const clickBackWard =(index, task)=>{

			if(index>0){
				setTasks (prevTasks=>
					prevTasks.map(t =>
						t.id===task.id ?{...t,stage:index-1}:t
					)
				)
			}
		   
	}

	const deleteHandler =(id)=>{
           
		setTasks ( prevTasks =>
			prevTasks.filter(task=>task.id!==id)
		)
	}

		for (let task of tasks) {
					const stageId = task.stage;
					stagesTasks[stageId].push(task);
	    }




	return (
		<div className="mt-20 layout-column justify-content-center align-items-center">
			<section className="mt-50 layout-row align-items-center justify-content-center">
				<input id="create-task-input" type="text" className="large" placeholder="New task name" data-testid="create-task-input" onChange={(e)=>setNewTask(e.target.value)} value={newTask}  />
				<button type="submit" className="ml-30" data-testid="create-task-button" onClick={clickHandler}>Create task</button>
			</section>

			<div className="mt-50 layout-row">
				{stagesTasks.map((tasks, i) => {
					return (
						<div className="card outlined ml-20 mt-0" key={`${i}`}>
							<div className="card-text">
								<h4>{stagesNames[i]}</h4>
								<ul className="styled mt-50" data-testid={`stage-${i}`}>
									{tasks.map((task, index) => {
										return <li className="slide-up-fade-in" key={`${i}${index}`}>
											<div className="li-content layout-row justify-content-between align-items-center">
												<span data-testid={`${task.name.split(' ').join('-')}-name`}>{task.name}</span>
												<div className="icons">
											    <button disabled={i===0} className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-back`} onClick={ ()=>clickBackWard(i,task)}>
														<i className="material-icons">arrow_back</i>
													</button>
													<button  disabled={i===3}className="icon-only x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-forward`} onClick={()=>clickForward(i,task)} >
														<i className="material-icons">arrow_forward</i>
													</button>
													<button className="icon-only danger x-small mx-2" data-testid={`${task.name.split(' ').join('-')}-delete`} onClick={()=>deleteHandler(task.id)}>
														<i className="material-icons">delete</i>
													</button>
												</div>
											</div>
										</li>
									})}
								</ul>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}