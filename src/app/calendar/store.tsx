import type { PlantId } from "@/lib/plants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PlantCalendarStore {
  plantId: PlantId;
  date: string;
  setPlant: (plantId: PlantId) => void;
  setDate: (date: string) => void;
}

export const usePlantCalendar = create(
  persist<PlantCalendarStore>(
    (set) => ({
      plantId: "salata",
      date: new Date().toISOString().slice(0, 10),
      setPlant: (plantId) => set({ plantId }),
      setDate: (date) => set({ date }),
    }),
    {
      name: "plant-calendar",
    },
  ),
);
