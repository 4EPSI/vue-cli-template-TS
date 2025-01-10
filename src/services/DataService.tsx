/*
  doc: https://swapi.py4e.com/
  api: https://swapi.py4e.com/api/people/
*/

const API_URL = 'https://swapi.py4e.com/api/'

import axios from 'axios'

class DataService {
  getAll(): Promise<any> {
    return axios.get(`${API_URL}/people/`)
  }
}

export default new DataService()