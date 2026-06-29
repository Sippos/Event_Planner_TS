// src/types/event.ts
export interface EventItem {
    _id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    latitude?: number;  // Fragezeichen bedeutet: Dieses Feld ist optional
    longitude?: number;
}