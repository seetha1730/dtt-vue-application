import axios from "axios";

export const getEntries = function(success,failure){
    axios
        .get('https://api.publicapis.org/entries')
        .then(response => {
          success(response.data.entries)
        })
        .catch(error => {
            failure(error)
        })
}

export const getRandom = function (success, failure) {
    axios
        .get('https://api.publicapis.org/random')
        .then(response => {
            success(response.data.entries)
        })
        .catch(error => {
            failure(error)
        })
}

export const getCategories = function (success, failure) {
    axios
        .get('https://api.publicapis.org/categories')
        .then(response => {
            success(response.data)
        })
        .catch(error => {
            failure(error)
        })
}
