import { Request } from '../Http/Request';
import { Response } from '../Http/Response';

class Action
{
	constructor() {
		let response = new Response();
		this.request = new Request(response);
	}

	request() {
		return this.request;
	}
}

export Action;