import axios, {AxiosResponse} from "axios";
import {Entries} from "@/types";

/**
 * @method getEntries
 * @param {function} success: success call back function
 * @param {function} failure: failure call back function
 * this function will call entries endpoint
 * */
export const getEntries = function(success: Function ,failure: Function){
    axios
        .get('https://api.publicapis.org/entries')
        .then((response: AxiosResponse) =>  {
          success(response.data.entries)
        })
        .catch(error => {
            failure(error)
        })
}

/**
 * @method getRandom
 * @param {function} success: success call back function
 * @param {function} failure: failure call back function
 * this function will call random endpoint
 * */
export const getRandom =  (success: Function ,failure: Function) =>  {
    axios
        .get('https://api.publicapis.org/random')
        .then(response =>
        {
            success(response.data.entries)
        })
        .catch(error => {
            failure(error)
        })
}

/**
 * @method getCategories
 * @param {function} success: success call back function
 * @param {function} failure: failure call back function
 * this function will call categories endpoint
 * */
export const getCategories = function (success: Function ,failure: Function) {
    axios
        .get('https://api.publicapis.org/categories')
        .then(response => {
            success(response.data)
        })
        .catch(error => {
            failure(error)
        })
}
