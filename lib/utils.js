import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string"


export function cn(...inputs){
    return twMerge(clsx(inputs));
    
}