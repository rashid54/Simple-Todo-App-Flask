export {};

declare global {
    interface Window {
        token: string;
    }
    
    interface Todo {
        "data": string,
        "date": string,
        "priority": string,
        "id": number,
        "user_id": number
      }
}