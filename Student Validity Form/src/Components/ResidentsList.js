import React from 'react';

function ResidentsList({list}) {

	return (
		<div className="pa-10 mt-10 w-75">
			<div className="h3 text-start text-decoration-underline">Residents List</div>
			<ul className="mt-10 styled mx-auto" data-testid="residentsNameList">
				{list.length === 0 ? <h4 className="mt-5 ms-5">There is no student</h4> : list.map((student,i)=>{
					return 	<li className="text-start h5 " key={i}> {student}	</li>
				})}
			</ul>
		</div>
	);
}

export default ResidentsList;
