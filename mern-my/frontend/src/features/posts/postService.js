import axios from 'axios'


const API_URL = '/api/posts/'


// Create new goal
const createPost = async (formData, token, ) => {
  console.log("create post", formData);
  const config = {
    headers: {
      // Multer only parses "multipart/form-data" requests
      'Content-Type': 'aplication/json multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: formData,
  }

  const response = await axios.post(API_URL, formData, config)

  return response.data
}

// Get user goals
const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}



const postService = {
  createPost,
  getPosts,
 // deleteGoal,
}

export default postService
