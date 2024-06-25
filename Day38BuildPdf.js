window.onload = function(){
    window.jsPDF=window.jspdf.jsPDF;
    var doc=jsPDF();

    var findTextWidth = function() {
        doc.getTextDimensions(text ,fontSize{
            fontSize:fontSize
        })
    }
    var generateBtn=document.getElementById("generate-btn");
    generateBtn.onclick=function(){
        console.log(doc);
        doc.setFontSize(30);
        var pageWidth =doc.internal.pageSize.width;
      
        var tagline = "A wap Institite Subsidary Branches for";
        var tagSize = 17
        var taglineWidth =findTextWidth(tagline ,taglineSize);
        var taglineOfMargin =(pageWidth-taglineWidth)/2;
        doc.setFontSize(taglineSize);
        doc.text(tagline,10,10);


        doc.save("wap.pdf");
    }
}

/*doc.text() 
doc.setFont()
doc.addImage('path','JPEG','leftMargin,topMargin,imageWidth,imageHeight)
doc.save()
doc.setFontSize()

*/