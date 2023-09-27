function indices(arr) {
		if (!arr.length) {
			return null;
		}
		
		let max = 0;
		let min = 0;
		
		for (let i = 0; i < arr.length; i++) {
			const current = arr[i];
			
			if (current > arr[max]) {
				max = i;
			}
			
			if (current < arr[min]) {
				min = i;
			}
		}
		
		return { max, min };
	}
	
	console.log(indices([40, 4, 9, 3, 150, 100])); 
	console.log(indices([]));
	