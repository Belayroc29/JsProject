const products = document.getElementById('products')

let groupOfManga = [];

const productsManga = async() => {
	try {
		const response = await fetch(`https://kitsu.io/api/edge`);
	
		console.log(response);

		const mangas = await response.json();
		groupOfManga = [...mangas]

		console.log(mangas);

       
		
	} catch(error){
		console.log(error);
	}

}

productsManga();