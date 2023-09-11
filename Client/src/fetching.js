const API_URL = `http://localhost:8080/api`;

// FETCH ALL ARTWORK
export async function fetchAllArtwork(){
    try{
        const response = await fetch(`${API_URL}/artwork`);
        console.log(response)
        const art = await response.json();
        return art;
        
    }  catch(err) {
        console.log(err);
        return err;
    }

};

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

// FETCH ALL ARTISTS
export async function fetchAllArtists(){
    try{
        const response = await fetch(`${API_URL}/artists`);
        console.log(response)
        const artists = await response.json();
        return artists;
        
    }  catch(err) {
        console.log(err);
        return err;
    }

};

// FETCH SINGLE ARTIST BY ID
export async function fetchArtistById(artistsId){
	try {
		const response = await fetch(`${API_URL}/artists/${artistsId}`);
		const byId = await response.json();
		return byId;

	} catch (error) {
		console.error("Unable to fetch artist", error);
	}
};

// FETCH ALL SUBJECTS
export async function fetchAllSubjects(){
    try{
        const response = (await fetch(`${API_URL}/subjects`));
        const Subs = await response.json();
        return Subs;
        
    }  catch(err) {
        console.log(err);
        return err;
    }

};

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

};

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