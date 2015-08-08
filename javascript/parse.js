/* Return description of data */

function getTitle (id, url) {
	var data = JSON.parse(url);
	return data[id-1].title
}	

function getLink (id, url) {
	var data = JSON.parse(url);
	return data[id-1].link;
}	

function getDescription (id, url) {
	var data = JSON.parse(url);
	return data[id-1].description;
}	

