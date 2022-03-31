import React from 'react';

function Error({message}) {
		console.log(message)
	return <div data-testid="errorMsg" className="   slide-up-fade-in bg-danger text-light my-3 ">
	{message? message:""}
	</div>
}

export default Error;
