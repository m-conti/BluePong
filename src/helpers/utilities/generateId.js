export default (array) => {
	if (!array.length) return 1;
	return array.get(array.length - 1)._id + 1;
}
