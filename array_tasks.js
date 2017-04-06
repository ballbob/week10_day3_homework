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

	sum: function (arr) {
		total = 0
		arr.forEach(function(element){
			total += element
		})
		return total
	},

	findDuplicates: function (arr) {
		newArray = []
		arr.sort()
		for (i = 0; i < arr.length; i++){
			if(arr[i] === arr[i+1]){
				newArray.push(arr[i])
			}
		}
		for (i=0; i<newArray.length;i++){
			if(newArray[i] === newArray[i-1]){
				newArray.splice(i,i)
			}
		}
		return newArray
	},

	removeAndClone: function (arr, valueToRemove) {
		for (i=0; i<arr.length; i++){
			if(arr[i] == valueToRemove){
				arr.splice(i,1)
			}
		}
		return arr
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = []

		for (i=0; i<arr.length; i++){
			if(arr[i] == itemToFind){
				indexArray.push(i)
			}
		}
		return indexArray
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var number = 0
		arr.forEach(function(element){
			if(element % 2 === 0){
				number += element*element
			}
		})
		return number
	}
}

module.exports = arrayTasks
