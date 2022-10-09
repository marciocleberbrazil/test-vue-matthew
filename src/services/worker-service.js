import axios from '../http';

export const getWorkerMatches = async (workerId) => {
  try {
    const response = await axios.get(`/worker/${workerId}/matches`);
    
    return response.data;
  } catch (err) {
    throw err.response || err;
  }
}

export const getWorkerProfile = async (workerId) => {
  try {
    const response = await axios.get(`/worker/${workerId}/profile`);
    
    return response.data;
  } catch (err) {
    throw err.response || err;
  }
};

export const acceptJob = async (workerId, jobId) => {
  try {
    const response = await axios.get(`/worker/${workerId}/job/${jobId}/accept`);
    
    return response.data;
  } catch (err) {
    throw err.response || err;
  }
};

export const rejectJob = async (workerId, jobId) => {
  try {
    const response = await axios.get(`/worker/${workerId}/job/${jobId}/reject`);
    
    return response.data;
  } catch (err) {
    throw err.response || err;
  }
};