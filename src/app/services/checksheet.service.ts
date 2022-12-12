import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";

import {
  CollectionReference,
  DocumentData,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { CreateChecksheetInterface } from "../interfaces/create-checksheet.interface";

@Injectable({
  providedIn: 'root',
})
export class ChecksheetService {
  checksheetCollection: CollectionReference<DocumentData>
  constructor(private db: Firestore) {
    this.checksheetCollection = collection(this.db, "checksheets")
  }

  getSectionDetails(sectionName: string) {
    console.log('Section name is ' + sectionName);
    // return this.db.collection(sectionName);
  }

  async getCheckSheets() {
    return collectionData(this.checksheetCollection, {
      idField: 'id',
    }) as Observable<CreateChecksheetInterface[]>
  }

  updateWorking(value: boolean) {
    //
  }

  async checkIfChecksheetExists(sheetName) {
    console.log('Checking...')
    const sheets = await this.getCheckSheets()
    sheets.subscribe((res) => {
      if (res.length === undefined) {
        return res[0].name !== sheetName;
      } else {
        for (let x = 0; x < res.length; x++) {
          if (res[x].name !== undefined) {
            return res[x].name !== sheetName;
          }
        }
        return false
      }
    })
  }

  addChecksheet(form) {
    // this.db.collection("checksheets").doc('28_july_2022').set({
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // })
  }
}
