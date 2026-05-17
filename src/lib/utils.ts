import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getCurrentYear() {
    return new Date().getFullYear();
}

export const formatPrice = (amount: number, useSymbol: boolean = false): string => {
    return new Intl.NumberFormat('ro-RO', {
        style: 'currency',
        currency: 'RON',
        currencyDisplay: useSymbol ? 'symbol' : 'code',
    }).format(amount);
};