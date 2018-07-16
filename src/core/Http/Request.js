import axios from 'axios';

class Request
{
	constructor(response) {
		this.response = response;
	}

	getRequest(data) {
		return (dispatch) => {
			axios(data)
			.then((data) => {
				this.response.onSuccess(data, dispatch);
			})
			.catch(this.response.onError)
		}
	}

	get(url, data, type) {

		let data = {
			url: url,
			data:, data,
			method: 'GET',
			headers: {
				'X-Action-Type': type
			}
		};
		return this.getRequest(data);
	}

	post(url, data, type) {

		let data = {
			url: url,
			method: 'POST',
			data:, data,
			headers: {
				'X-Action-Type': type
			}
		};
		return this.getRequest(data);
	}

	put(url, data, type) {

		let data = {
			url: url,
			method: 'PUT',
			data:, data,
			headers: {
				'X-Action-Type': type
			}
		};
		return this.getRequest(data);
	}

	patch(url, data, type) {

		let data = {
			url: url,
			method: 'PATCH',
			data:, data,
			headers: {
				'X-Action-Type': type
			}
		};
		return this.getRequest(data);
	}

	delete(url, data, type) {

		let data = {
			url: url,
			method: 'DELETE',
			data:, data,
			headers: {
				'X-Action-Type': type
			}
		};
		return this.getRequest(data);
	}
}

export Request;