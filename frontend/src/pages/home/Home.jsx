import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [userAuthData, setUserAuthData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [projectName, setProjectName] = useState(''); // State to store the project name

  const URL = 'http://localhost:8000';

  useEffect(() => {
    getUserAuthData();
  }, []);

  // Fetch user auth data from localStorage
  const getUserAuthData = async () => {
    const data = await JSON.parse(localStorage.getItem('userAuthData'));
    console.log('userAuthData => ', data);
    setUserAuthData(data);
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProjectName(''); // Reset project name input
  };

  // Handle project name input change
  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`${URL}/createProject`, {
        userId: userAuthData.data._id, // Assuming userAuthData contains userId
        createdBy:projectName,
      });
      console.log('Project created successfully:', resp.data);
      toast.success("Project Created Successfully Done");
      closeModal(); // Close modal after successful submission
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <section className='section-1 mt-5'>
        <div className='container mx-auto px-3'>
          <button className='create-project' onClick={openModal}>
            Create Project
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Enter project name'
                value={projectName}
                onChange={handleInputChange}
                required
              />
              <div className='modal-buttons'>
                <button type='submit'>Submit</button>
                <button type='button' onClick={closeModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer/>
    </>
  );
};

export default Home;