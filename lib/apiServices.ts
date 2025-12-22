import api from '@/lib/api';
import { Booking, Room, User, Location, Weather } from '@/types/api';

/**
 * booking service
 */
export const BookingService = {
  getAll: () => api.get<Booking[]>('/bookings'),
  getById: (id: string) => api.get<Booking>(`/bookings/${id}`),
  getByUser: (userId: string) => api.get<Booking[]>(`/bookings/user/${userId}`),
  create: (data: Partial<Booking>) => api.post<Booking>('/bookings', data),
  update: (id: string, data: Partial<Booking>) => api.patch<Booking>(`/bookings/${id}`, data),
  cancel: (id: string) => api.delete(`/bookings/${id}`),
};

/**
 * user service
 */
export const UserService = {
  getProfile: () => api.get<User>('/user/profile'),
  updateProfile: (data: Partial<User>) => api.patch<User>('/user/profile', data),
  getSettings: () => api.get<any>('/user/settings'),
  updateSettings: (data: any) => api.patch<any>('/user/settings', data),
};

/**
 * location service
 */
export const LocationService = {
  getAll: () => api.get<Location[]>('/locations'),
  getById: (id: string) => api.get<Location>(`/locations/${id}`),
  create: (data: Partial<Location>) => api.post<Location>('/locations', data),
  update: (id: string, data: Partial<Location>) => api.patch<Location>(`/locations/${id}`, data),
  delete: (id: string) => api.delete(`/locations/${id}`),
};

/**
 * room service
 */
export const RoomService = {
  getAll: () => api.get<Room[]>('/rooms'),
  getById: (id: string) => api.get<Room>(`/rooms/${id}`),
  getByLocation: (locationId: string) => api.get<Room[]>(`/rooms/location/${locationId}`),
  getAvailability: (roomId: string, date: string) =>
    api.get<any>(`/rooms/${roomId}/availability?date=${date}`),
  create: (data: Partial<Room>) => api.post<Room>('/rooms', data),
  update: (id: string, data: Partial<Room>) => api.patch<Room>(`/rooms/${id}`, data),
  delete: (id: string) => api.delete(`/rooms/${id}`),
};

/**
 * weather service
 */
export const WeatherService = {
  getForecast: (data: any) => api.post<Weather>(`/weather`, data),
};
