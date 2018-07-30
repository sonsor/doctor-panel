import axios from 'axios';

/**
 * 
 */
export class Request {

	/**
	 * [constructor description]
	 * @param  {response} response a Response class object
	 * @return {[type]}          [description]
	 */
    constructor(response) {
        this.response = response;
    }
    
    /**
     * [getRequest description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    getRequest(data) {
        return (dispatch) => {
            axios(data)
                .then((data) => {
                    this.response.onSuccess(data, dispatch);
                })
                .catch(this.response.onError)
        }
    }

    /**
     * [get description]
     * @param  {[type]} url  [description]
     * @param  {[type]} data [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    get(url, data, type) {

        let data = {
            url: url,
            data: data,
            method: 'GET',
            headers: {
                'X-Action-Type': type
            }
        };
        return this.getRequest(data);
    }

    /**
     * [post description]
     * @param  {[type]} url  [description]
     * @param  {[type]} data [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    post(url, data, type) {

        let data = {
            url: url,
            method: 'POST',
            data: data,
            headers: {
                'X-Action-Type': type
            }
        };
        return this.getRequest(data);
    }

    /**
     * [put description]
     * @param  {[type]} url  [description]
     * @param  {[type]} data [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    put(url, data, type) {

        let data = {
            url: url,
            method: 'PUT',
            data: data,
            headers: {
                'X-Action-Type': type
            }
        };
        return this.getRequest(data);
    }

    /**
     * [patch description]
     * @param  {[type]} url  [description]
     * @param  {[type]} data [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    patch(url, data, type) {

        let data = {
            url: url,
            method: 'PATCH',
            data: data,
            headers: {
                'X-Action-Type': type
            }
        };
        return this.getRequest(data);
    }

    /**
     * [delete description]
     * @param  {string} url  request url to grab the data
     * @param  {object} data the data object which data you need to send in body
     * @param  {string} type its a action type constant which action you need t o trigger on response
     * @return {claure}      a function that handle the dipatcher
     */
    delete(url, data, type) {

        let data = {
            url: url,
            method: 'DELETE',
            data: data,
            headers: {
                'X-Action-Type': type
            }
        };
        return this.getRequest(data);
    }
}