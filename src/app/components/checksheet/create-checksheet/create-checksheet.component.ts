import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChecksheetService } from '../../../services/checksheet.service';
import { AngularFirestore } from "@angular/fire/compat/firestore";

interface names {
  value: string,
  viewValue: string;
}

@Component({
  selector: 'app-create-checksheet',
  templateUrl: './create-checksheet.component.html',
  styleUrls: ['./create-checksheet.component.css']
})
export class CreateChecksheetComponent implements OnInit {
  createForm: FormGroup;
  assignedTesters = []
  names: names[] = [
    {value: 'gregstrydom', viewValue: 'Gregory Strydom'},
    {value: 'carmengregor', viewValue: 'Carmen Gregor'},
  ];

  constructor(private fb: FormBuilder, private checksheetService: ChecksheetService, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      'name': ['', [
        Validators.required,
      ]
      ],
      'testersAssigned': ['', [
        Validators.required
      ]
      ],
      'connectVersion': ['', [
        Validators.required
      ]
      ],
      'immerseVersion': ['', [
        Validators.required
      ]
      ],
      'eventLink': ['', [
        Validators.required
      ]
      ],
    });
  }

  addToAssigned(option) {
    this.assignedTesters.push(option.value)
    console.log(this.assignedTesters)
  }

  createChecksheet() {
    if (this.checksheetService.checkIfChecksheetExists(this.createForm.value['name'])) {
        console.log('A checksheet with that name already exists. PLease make sure there are no other check sheets with the same name.');
        return;
    } else {
      let _temp = this.createForm.value['testersAssigned'];
      this.createForm.value['testersAssigned'] = []
      this.createForm.value['testersAssigned'].push(_temp);
      console.log(this.createForm);
      this.checksheetService.addChecksheet(this.createForm);
    }
  }
}
