window.onload=function() {
    window.jsPDF  = window.jspdf.jsPDF;
    var doc=jsPDF();
    var addsubjectbtn =document.getElementById("add-subjects");
    addsubjectbtn.onclick=function() {
        var totalMarks=0;
        var div=document.createElement("div");
        div.id="horizontal";

        //subject
        var subject =document.createElement("input");
        subject.name="subject";
        subject.placeholder="Subject Name";
        subject.type="text";

        //fullmarks
        var fullmarks =document.createElement("input");
        fullmarks.name="fullMarks";
        fullmarks.placeholder="fullMarks";
        fullmarks.type="number";
        fullmarks.value=100;
        
        //Obtained
        var obtainedmarks=document.createElement("input");
        obtainedmarks.name="Obtained";
        obtainedmarks.placeholder="ObtainedMarks";
        obtainedmarks.type="number";

        //delete button
        var deleteButton=document.createElement("button");
        deleteButton.innerHTML="<i class ='fa fa-trash'></i>";
        deleteButton.className="delete-button";
        deleteButton.type="button";

        //adding subjects

        div.append(subject);
        div.append(fullmarks);
        div.append(obtainedmarks);


        //Adding div tag to form
        var dynamicArea =document.getElementById("dynamic-area");
        dynamicArea.append(div);

        //create subject tr

        var subectTr =document.createElement("tr");
        subjectTr.style.textAlign ="center";

        var subjectTd=document.createElement("td");
        subjectTd.setAttribute("colspan","3");

        var fullMarksTd =document.createElement("td");
        fullMarksTd.innerHTML=100;
        var ObtainedTd=document.createElement("td");
        ObtainedTd.setAttribute("colspan","2");

        subjectTr.append(subjectTd);
        subjectTr.append(fullMarksTd);
        subjectTr.append(ObtainedTd);

       var subjectbody=document.getElementById("subject-body");
       subjectbody.append(subjectTr);

       //live preview subject and marks entry

       subject.oninput=function() {
        subjectTd.innerHTML=this.value;
       }

       fullmarks.oninput=function() {
        fullMarksTd.innerHTML=this.value;

       }

       fullmarks.oninput=function(){
        ObtainedTd.innerHTML =this.value;
       }



            //calculate total marks
            var obm=document.getElementsByClassName("obtained-marks");
            for(var i=0; i<obm.length;i++)
            {
            var num=Number(obm[i].value);
            totalMarks = totalMarks+num;
            }
            
            var totalMarksTd = document.getElementById("total-marks");
            totalMarks.innerHTML =totalMarks;

            //calculate percentage
            var noOfSubjects = obm.length;
            var percentage = parseInt(totalMarks/noOfSubjects);
            percentage.innerHTML=percentage+'%';

            //Finding grade

            var grade ="";
            if(percentage > 90 )grade ='A+';

            else if(percentage > 80 )grade = 'A';

            else if(percentage > 70 )grade ='B+';
            
            else if(percentage > 60 )grade = 'B';

            else if(percentage > 50 )grade ='C ';

            else if(percentage > 40 )grade ='D';

            else grade  = 'E';

            var gardeTd = documnet.getElementById("grade");
            gardeTd.innerHTML=grade;
            

            




        
        //delete row
        deleteButton.onclick= function() {
            div.remove();
            subjectTr.remove();

        }




    }

    //upload and Preview student image
    var studentPicInput = document.getElementById("student-pic-input");
    studentPicInput.onchange = function() {
        var file  =this.files[0];
        var url=URL.createObjectURL(file);
        var studentPic = document.getElementById("student-pic");
        studentPic.src = url;
    }

    //upload and Preview school logo

    var schoollogo =document.getElementById("school-logo-input");
    schoollogo.onchange =function() {
        var file=this.files[0];
        var url =URL.createObjectURL(file);
        var schoollogo =document.getElementById("school-logo");
        schoollogo.src=url;
    }

        //Live preview school name
        var schoolnamelogo=document.getElementById("school-name-logo");
        schoolnamelogo.oninput=function() {
        var schoolname=document.getElementById("school-name");
        schoolname.innerHTML =this.value;

            
        }

        //tagline  live preview
        var taglineInput =document.getElementById("tagline");
        taglineInput.oninput= function() {
            var tagline =document.getElementById("tagline-text");
            tagline.innerHTML =this.value ;
        }
             
        //candidatenameinput live prve

        var candidatenameinput =document.getElementById("candidate-name-input");
        candidatenameinput.oninput =function() {
            var candidatename = document.getElementById("candiate-name");
            candidatename.innerHTML =this.value;

        }

        //father name live reveiew
        var fatherNameInput = document.getElementById("father-name-input");
        fatherNameInput.oninput = function () {
            var fathername = document.getElementById("father-name");
            fatherNameInput.innerHTML=this.value;
        }


       //DOB live review

       var dobInput = document.getElementById("dob-input");
       dobInput.onchange=function() {
        var dob =document.getElementById("dob");
        dob.innerHTML=this.value;

       }

       //gender live preview
       var chooseGender =document.getElementById("choose-gender");
       chooseGender.onchange=function() {
        var gender=document.getElementById("gender");
        gender.innerHTML= this.value;

       }
       
        
       //class live input
       var classInput=document.getElementById("class-input");
       classInput.oninput=function() {
        var classText=document.getElementById("class");
        classText.innerHTML=this.value;
       }

       //roll live preview
       var rollInput =document.getElementById("roll-input");
       rollInput.onchange= function() {
        var roll=document.getElementById("roll");
        roll.innerHTML=this.value;
       }

       //Export to pdf 
       var form =document.getElementById("marksheet-form");
       form.onsubmit =function(e){
        e.preventDefault();
        var elements =form.elements;
        var schoollogo=elements.schoollogo.files[0];
        var schoollogoUrl =URL.createObjectURL(schoollogo);
        var schoolName=elements.schoolName.value;
        var tagline=elements.tagline.value;
        var candidateName=elements.candidateName.value;
        var fathersName = elements.fatherName.value;
        var dob=elements.dob.value;
        var gender=elements.gender.value;
        var studentClass =elements.class.value;
        var roll=elements.roll.value;


        //Getting subjects values

        var subjects=document.getElementsByClassName("subjects");
        var fullmarks =document.getElementsByClassName("fullmarks");
        var obtainedMarks=document.getElementsByClassName("obtained-marks");
         
        var subjectsBody = [];
        for(var i=0;i<subjects.length;i++)
        {
            var subjects=subjects[i].value;
            var fullmark=fullmarks[i].value;
            var obtainedMarks=obtainedMarks[i].value;
    
           subjectsBody .push([subject,fullmark,obtainedMarks])
        
        subjectsBody.push(['Total Marks','78']);
        subjectsBody.push(['Grade','A','Percentage','19%']);

      

        //genearte pdf
        var schoolLogoWidth =30;
        var pageWidth =doc.internal.pageSize.width;
        var schoolLogoLeftMargin= (pageWidth-schoollogoWidth)/2;
        doc.addImage(schoollogoUrl,'PNG',10,10,schoollogoWidth,30);
        doc.save("marksheet.pdf");


        //setting school name
        var schoolNameFontSize = 30;
        var schoolNmaeWidth =findTextWidth(SchoolNmae,schoolNameFontSize);
        var schoolNameLeftMargin = (pagwWidth -schoolNameWidth)/2;
        doc.setFontSize(SchoolNameFontSize);
        doc.text(schoolName,schoolNameLeftMargin,10);


        //setting tagline

        var taglineFontSize =14;
        var taglineWidth=findTextWidth(tagline,taglineFontSize);
        var taglineLeftMargin = (pageWidth-taglineWidth)/2;
        doc.setFontSize(taglineFontSize);
        doc.text(tagline,taglineLeftMargin,55);


        //setting table
        doc.autoTable({
            margin:{top:70},
    
            body:[
                [
                    {content:'Student`s Name', styles:{fontStyle:'bold',fillColor :'dodgerblue',textColor:'white'}},
                candidateName,
                {content:'Father`s Name', styles:{fontStyle:'bold'}},
                fathersName
            ],
                [
                    {content:'DOB', styles :{fontStyle:'bold',fillColor:'dodgerblue',textColor:'white'}},
                    dob,
                    {content:'Gender', styles:{fontStyles:'bold',fillColor:'dodgerblue',textColor:'white'}},
                    gender
                ],
                [
                    {content:'Class', styles:{fontStyle:'bold',fillColor:'dodgerblue',textColor:'white'}},
                studentsClass,
                {content:'Roll', styles:{fontStyle:'bold',fillColor:'dodgerblue',textColor:'white'}},
                roll]
               ]

        })
           

       }
       
    }
 