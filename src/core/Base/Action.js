import { Request } from '../Http/Request';
import { Response } from '../Http/Response';

/**
 * 
 */
class Action
{
	/**
	 * [constructor description]
	 * @return {[type]} [description]
	 */
	constructor() {
		let response = new Response();
		this.request = new Request(response);
	}

	/**
	 * [request description]
	 * @return {[type]} [description]
	 */
	request() {
		return this.request;
	}
}

export Action;