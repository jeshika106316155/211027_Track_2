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
        "system": "passport",
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
    "active" : "true",
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
    "status": "preliminary",
    "category": [
      {
        "coding": [
          {
            "system": "https://www.hl7.org/fhir/codesystem-observation-category.html",
            "code": "",
            "display": ""
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http ://loinc.org",
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
      "system" : "https://www.hl7.org/fhir/valueset-ucum-units.html",
      "code" : ""
    }
  }
