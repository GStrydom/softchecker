import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root',
})
export class ChecksheetService {

  constructor(private db: AngularFirestore) {
  }

  getSectionDetails(sectionName: string) {
    console.log('Section name is ' + sectionName);
    return this.db.collection(sectionName);
  }

  async getCheckSheets() {
    return this.db.collection('checksheets').valueChanges()
  }

  updateWorking(value: boolean) {
    this.db.collection('immerse-launcher');
  }

  async checkIfChecksheetExists(sheetName) {
    console.log('Checking...');
    const sheets = await this.getCheckSheets();
    console.log(sheets);
  }

  addChecksheet(form) {
    this.db.collection("checksheets").doc('28_july_2022').set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })
  }
}
