//Fhir Observation JSON 用於存生理監測 
var category_coding = [
    {
        "code": "vital-signs",
        "display": "Vital Signs"
    },
    {
        "code": "laboratory",
        "display": "Laboratory"
    }
]
//Fhir Observation JSON 用於存生理監測 
var coding_code = [
    {
        "code": "29463-7",
        "display": "Body weights",
        "unit" : "kg"
    },
    {
        "code": "8310-5",
        "display": "Body temperature",
        "unit" : "Cel"
    },
    {
        "code": "88365-2",
        "display": "Glucose pre-meal (Bld) [Mass/Vol]",
        "unit" : "mg/dL"
    }
]
//Fhir Patient JSON 紀錄做生理監測的病人 
var Patient_Track_2={
    "resourceType": "Patient",
    "id": "MITWTrack2P1",
    "identifier": [
      {
        "system": "https://www.dicom.org.tw/cs/passportNumber",
        "value": "31195855"
      }
    ],
    "name": [
      {
        "family" : "MITW21",
        "given" :["TRACK2_P1"],
        "text": "MITW21_TRACK2_P1"
      }
    ],
    "active" : true,
    "gender" : "male",
    "birthDate" : "2020-05-27",
    "managingOrganization": {
      "reference": "Organization/MITW.ForPHR"
    },
    "telecom": [
      {
        "system": "email",
        "value": "tcu@tcu.edu.tw"
      },
      {
        "system": "phone",
        "value": "0958000111"
      }
    ],
    "address": [
      {
        "use": "home",
        "text": "花蓮縣花蓮市中央路三段701號",
        "city": "花蓮縣",
        "postalCode": "97004",
        "country": "台灣"
      }
    ],
    "contact": [
      {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
              "code": "N"
            }
          ]
        }
      ],
      "name": {
        "family": "du Marché",
        "_family": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
              "valueString": "VV"
            }
          ]
        },
        "given": ["Bénédicte"]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+33 (237) 998327"
        }
      ],
      "address": {
        "use": "home",
        "type": "both",
        "line": [
          "534 Erewhon St"
        ],
        "city": "PleasantVille",
        "district": "Rainbow",
        "state": "Vic",
        "postalCode": "3999",
        "period": {
          "start": "1974-12-25"
        }
      },
      "gender": "female",
      "period": {
        "start": "2012"
      }
    }
  ]
  }
//Fhir Observation JSON 用於存生理監測 
var Observation_Track_2 = {
    "resourceType": "Observation",
    "status": "final",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "",
            "display": ""
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "",
          "display": ""
        }
      ]
    },
    "subject": {
      "reference": ""
    },
    "effectiveDateTime" :"",
    "valueQuantity" : {
      "value" : 0,
      "unit" : "",
      "system" : "https://ucum.org",
      "code" : ""
    }
  }
//Fhir Observation JSON 用於存生理監測 
var Observation_Track_2_2 = {
  "resourceType": "Observation",
  "basedOn":[{
    "reference":""
  }],
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "",
          "display": ""
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "",
        "display": ""
      }
    ]
  },
  "subject": {
    "reference": ""
  },
  "effectiveDateTime" :"",
  "valueQuantity" : {
    "value" : 0,
    "unit" : "",
    "system" : "https://ucum.org",
    "code" : ""
  }
}
//Fhir Observation JSON 用於存生理監測 
var Observation_Track_2_3 = {
  "resourceType": "Observation",
  "basedOn":[{
    "reference":""
  }],
  "status": "preliminary",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "",
          "display": ""
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "",
        "display": ""
      }
    ]
  },
  "subject": {
    "reference": ""
  },
  "effectiveDateTime" :"",
  "bodySite":{
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "",
        "display": ""
      }
    ],
    "text":""
  },
  "valueQuantity" : {
    "value" : 0,
    "unit" : "",
    "system" : "https://ucum.org",
    "code" : ""
  }
}
//Fhir Medication Request JSON 用於存藥計畫
var MedicationRequest_Track_3 = {
  "resourceType": "MedicationRequest",
  "id": "MITWTrack2MR1",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2021-10-30T18:37:09.887+00:00",
    "source": "#XhYJsD8yY046ccgQ"
  },
  "status": "active",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
          "code": "inpatient",
          "display": "inpatient"
        }
      ]
    }
  ],
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "https://www.nhi.gov.tw/QueryN/Query1.aspx",
        "code": "AC363491G0",
        "display": "211 Metformin 500g"
      }
    ]
  },
  "subject": {
    "reference": "Patient/MITWTrack2P1"
  },
  "authoredOn": "2021-10-14",
  "requester": {
    "reference": "Practitioner/MITWTrack3Pr1"
  },
  "dosageInstruction": [
    {
      "sequence": 1,
      "text": "臨床病口服藥物",
      "timing": {
        "code": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-GTSAbbreviation",
              "code": "BID",
              "display": "BID"
            }
          ]
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://mtrsoftware.com.tw/Page_L/%E7%94%A8%E6%B3%95%E8%A1%A8",
            "code": "PO",
            "display": "口服"
          }
        ]
      },
      "method": {
        "coding": [
          {
            "system": "http://mtrsoftware.com.tw/Page_L/%E7%94%A8%E6%B3%95%E8%A1%A8.htm",
            "code": "PO",
            "display": "口服"
          }
        ]
      }
    }
  ],
  "dispenseRequest": {
    "validityPeriod": {
      "start": "2021-10-13",
      "end": "2021-10-30"
    },
    "numberOfRepeatsAllowed": 1,
    "quantity": {
      "value": 3,
      "unit": "TAB",
      "system": "https://terminology.hl7.org/2.1.0/CodeSystem-v3-orderableDrugForm",
      "code": "TAB"
    },
    "expectedSupplyDuration": {
      "value": 3,
      "unit": "days",
      "system": "https://ucum.org",
      "code": "d"
    }
  }
}

  //Fhir Practitioner JSON 用於存醫護人員資料
  var Practitioner_Track_3 = {
    "resourceType": "Practitioner",
    "id": "MITWTrack3Pr1"
  }

  //Fhir Observation JSON 用於存生理監測 
var Observation_Track_2_4 = {
  "resourceType": "Observation",
  "basedOn":[{
    "reference":""
  }],
  "status": "preliminary",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "",
          "display": ""
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "",
        "display": ""
      }
    ]
  },
  "subject": {
    "reference": ""
  },
  "effectiveDateTime" :"",
  "bodySite":{
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "",
        "display": ""
      }
    ],
    "text":""
  },
  "valueQuantity" : {
    "value" : 0,
    "unit" : "",
    "system" : "https://ucum.org",
    "code" : ""
  },
  "component": [{ "code": { "coding": [{ "system": "http://loinc.org", "code": "8462-4", "display": "Distolic blood pressure" }] }, "valueQuantity": { "value": 60, "unit": "mm[Hg]", "system": "http://unitsofmeasure.org", "code": "mm[Hg]" } }, { "code": { "coding": [{ "system": "http://loinc.org", "code": "8480-6", "display": "Systolic blood pressure" }] }, "valueQuantity": { "value": 120, "unit": "mm[Hg]", "system": "http://unitsofmeasure.org", "code": "mm[Hg]" } }]
}

var s= {
  
  "meta": {
    "profile": [
        "https://hapi.fhir.tw/fhir/StructureDefinition/ObservationForEMS.Common"
    ]
}
}