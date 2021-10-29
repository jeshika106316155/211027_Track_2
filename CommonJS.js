//----------------------------------------------------------
      //for : Post body weight vital sign measurement for track-2
      function Submit_Measurement(){
        if(document.getElementById("Measure_Value").value.trim()!="" && document.getElementById("Effective_Date").value.trim()!="")
        {
          Observation_Track_2.category[0].coding[0].code = category_coding[VitalSigns_Code].code;
          Observation_Track_2.category[0].coding[0].display = category_coding[VitalSigns_Code].display;
          Observation_Track_2.code.coding[0].code = coding_code[VitalSigns_Type].code;
          Observation_Track_2.code.coding[0].display = coding_code[VitalSigns_Type].display;
          Observation_Track_2.valueQuantity.unit = coding_code[VitalSigns_Type].unit;
          Observation_Track_2.valueQuantity.code = coding_code[VitalSigns_Type].unit;
          Observation_Track_2.subject.reference = "Patient/"+patient_Id;

          Observation_Track_2.valueQuantity.value = document.getElementById("Measure_Value").value;
          Observation_Track_2.effectiveDateTime = document.getElementById("Effective_Date").value;
          HTTPPostData(FHIRrootURL+"/Observation", JSON.stringify(Observation_Track_2));
          EmptyForm();
        }
        else{
          alert("Please fill all the input box!");
        }
      }
      //----------------------------------------------------------