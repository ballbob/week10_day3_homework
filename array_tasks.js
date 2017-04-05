var arrayTasks = {

	concat: function (arr1, arr2) {
		arr2.forEach(function(element){
			arr1.push(element)
		})
		return arr1
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index,0,itemToAdd)
		return arr
	},

	square: function (arr) {
		var newArray = []
		arr.forEach(function(element){
			newArray.push(Math.pow(element,2))
		})
		return newArray		
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
