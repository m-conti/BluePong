export default (array) => {
	if (!array.length) { return 1 }
	return array[array.length - 1]._id + 1;
}
