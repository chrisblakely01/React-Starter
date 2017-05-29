import axios from 'axios';
import delay from './delay';

//returns data from the express dev server
//api structure is the same as mockApis so they can be swapped out easily

const BASE_URL = 'http://localhost:3000';

class CourseApi {
  static getAllCourses() {
    const url = `${BASE_URL}/api/courses`;
    return axios.get(url).then(response => response.data);
  }
}

export default CourseApi;
