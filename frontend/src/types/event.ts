// src/types/event.ts
export interface EventItem {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    latitude?: number;  
    longitude?: number;
}