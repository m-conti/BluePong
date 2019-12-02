

const actionSimulator = (type, data) => ({
		meta: { remote: true },
		type: type,
		...data
	});

export default actionSimulator;
