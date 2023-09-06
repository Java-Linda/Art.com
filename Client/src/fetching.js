const API_URL = `http://localhost:8080/api`;

// FETCH ALL ARTWORK
export async function fetchAllArtwork(){
    try{
        const response = (await fetch(`${API_URL}/artwork`)).json();
        const Art = await response.json();
        return Art;
        
    }  catch(err) {
        console.log(err);
        return err;
    }

}

// FETCH SINGLE ARTWORK BY ID
export async function fetchArtworkById(artworkId){
	try {
		const response = await fetch(`${API_URL}/artwork/${artworkId}`);
		const byId = await response.json();
		return byId;

	} catch (error) {
		console.error("Unable to fetch artwork", error);
	}
};

// FETCH ALL SUBJECTS
export async function fetchAllSubjects(){
    try{
        const response = (await fetch(`${API_URL}/subjects`)).json();
        const Subs = await response.json();
        return Subs;
        
    }  catch(err) {
        console.log(err);
        return err;
    }

}

// FETCH SUBJECTS BY ID
export async function fetchSubjectsById(subjectsId){
	try {
		const response = await fetch(`${API_URL}/subjects/${subjectsId}`);
		const byId = await response.json();
		return byId;

	} catch (error) {
		console.error("Unable to fetch subject", error);
	}
};

// FETCH ALL BUYERS
export async function fetchAllBuyers(){
    try{
        const response = (await fetch(`${API_URL}/buyers`)).json();
        const Users = await response.json();
        return Users;
        
    }  catch(err) {
        console.log(err);
        return err;
    }

}

// FETCH BUYER BY ID
export async function fetchBuyerById(buyerId){
	try {
		const response = await fetch(`${API_URL}/buyers/${buyerId}`);
		const byId = await response.json();
		return byId;

	} catch (error) {
		console.error("Unable to fetch buyer", error);
	}
};