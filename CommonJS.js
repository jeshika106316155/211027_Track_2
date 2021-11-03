//----------------------------------------------------------
      //for : Post body weight vital sign measurement for track-2
      function Submit_Measurement(form,scenarioNum){
        var thisform = document.getElementById(form.id);
	      var elements = thisform.elements;
        var resource;

        if(CheckFill(elements)==1){
          alert("Please fill all field!");
          return;
        }
        switch(scenarioNum){
          case 1:
            Observation_Track_2.status= elements[0].value;
            Observation_Track_2.category[0].coding[0].code = elements[1].value;
            Observation_Track_2.category[0].coding[0].display = elements[2].value;
            Observation_Track_2.code.coding[0].code = elements[3].value;
            Observation_Track_2.code.coding[0].display = elements[4].value;
            Observation_Track_2.subject.reference = "Patient/"+elements[5].value;
            Observation_Track_2.effectiveDateTime = elements[6].value;
            Observation_Track_2.valueQuantity.value = parseInt(elements[7].value);
            Observation_Track_2.valueQuantity.unit = elements[8].value;
            Observation_Track_2.valueQuantity.code = elements[8].value;
            break;
          case 2:
            Observation_Track_2=Observation_Track_2_2;
            Observation_Track_2.basedOn[0].reference = "MedicationRequest/"+elements[0].value;
            Observation_Track_2.status= elements[1].value;
            Observation_Track_2.category[0].coding[0].code = elements[2].value;
            Observation_Track_2.category[0].coding[0].display = elements[3].value;
            Observation_Track_2.code.coding[0].code = elements[4].value;
            Observation_Track_2.code.coding[0].display = elements[5].value;
            Observation_Track_2.subject.reference = "Patient/"+elements[6].value;
            Observation_Track_2.effectiveDateTime = elements[7].value;
            Observation_Track_2.valueQuantity.value = parseInt(elements[8].value);
            Observation_Track_2.valueQuantity.unit = elements[9].value;
            Observation_Track_2.valueQuantity.code = elements[9].value;
            break;
          case 3:
            Observation_Track_2=Observation_Track_2_3;
            Observation_Track_2.basedOn[0].reference = "MedicationRequest/"+elements[0].value;
            Observation_Track_2.status= elements[1].value;
            Observation_Track_2.category[0].coding[0].code = elements[2].value;
            Observation_Track_2.category[0].coding[0].display = elements[3].value;
            Observation_Track_2.code.coding[0].code = elements[4].value;
            Observation_Track_2.code.coding[0].display = elements[5].value;
            Observation_Track_2.subject.reference = "Patient/"+elements[6].value;
            Observation_Track_2.effectiveDateTime = elements[7].value;
            Observation_Track_2.bodySite.coding[0].code = elements[8].value;
            Observation_Track_2.bodySite.coding[0].display = elements[9].value;
            Observation_Track_2.bodySite.text = elements[10].value;
            Observation_Track_2.valueQuantity.value = parseInt(elements[11].value);
            Observation_Track_2.valueQuantity.unit = elements[12].value;
            Observation_Track_2.valueQuantity.code = elements[12].value;
            break;
        }
        HTTPPostData(FHIRrootURL+"/Observation", JSON.stringify(Observation_Track_2));
        //EmptyForm(thisform);
      }
      //----------------------------------------------------------
      //----------------------------------------------------------
      //for: Check wether all the input already filled
      function CheckFill(elements){
        for(var i=0;i<elements.length;i++){
          if(elements[i].value==""){
            return 1;
          }
        }
        return 0;
      }
      //----------------------------------------------------------
      //----------------------------------------------------------
      //for : Post body weight vital sign measurement for track-2
      function EmptyForm(form){
        var elements = form.elements;
        for(var i=0;i<form.length;i++){
          elements[i].value="";
        }
      }
      //----------------------------------------------------------
