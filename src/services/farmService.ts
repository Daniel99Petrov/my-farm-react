import { BASE_URL } from '../constants/constants';
import { Farm } from '../types/types';

export const fetchFarms = async (): Promise<Farm[]> => {
    try {
      const response = await fetch(`${BASE_URL}/farm`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        }
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch farms');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error during fetch farms:', error);
      throw error;
    }
  };

  export const fetchFarmDetails = async (farmId: string | undefined) => {
    try {
      const response = await fetch(`${BASE_URL}/farm/${farmId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch farm details');
      }
  
      return response.json();
    } catch (error) {
      console.error('Error during fetch farm details:', error);
      throw error;
    }
  };