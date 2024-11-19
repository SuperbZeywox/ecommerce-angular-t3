import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // todo: implementing a sophisticated caching system requires upgrading the back-end
  // Save item with expiry date (in milliseconds)
  saveItem(key: string, value: any, expiryInMinutes: number): void {
    const expiryDate = new Date().getTime() + (expiryInMinutes * 60 * 1000); // Expiry time in milliseconds
    const data = {
      value,
      expiry: expiryDate
    };
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Get item with expiry check
  getItem(key: string): any {
    const data = localStorage.getItem(key);

    if (data) {
      const parsedData = JSON.parse(data);
      const currentTime = new Date().getTime();

      // If the item is expired, remove it and return null
      if (currentTime > parsedData.expiry) {
        // console.log("item expired, removing from local Storage")
        this.removeItem(key);
        return null;
      }

      // Return the stored value if it's still valid
      return parsedData.value;
    }
    console.log("returning null")

    return null;
  }

  // Remove item from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Check if the item exists in local storage and is not expired
  hasExpired(key: string): boolean {
    const data = localStorage.getItem(key);

    if (data) {
      const parsedData = JSON.parse(data);
      const currentTime = new Date().getTime();
      return currentTime > parsedData.expiry;
    }

    return true;
  }

}
