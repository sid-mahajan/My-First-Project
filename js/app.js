"use strict"

$(document).ready(function(){
	var resultlist = $("#resultlist");
    resultlist.text("Injected using jquery");

    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function () {
	    console.log("Button clicked");
	    resultlist.toggle(500);

	    if(toggleButton.text() === "Hide" ){
		    toggleButton.text("Show");
	    } else {
		    toggleButton.text("Hide");
	    }
    });

    var results = [];

    

    function displayResults(results) {
    	resultlist.empty();

    $.each(results, function(i, item){
    	var newResult = $("<div class='result'>" + 
            "<div class='title'>" + item.title + "</div>" +
            "<div class='program'>" + "Program : " + "</div>" +
    		"<div" + item.program + "</div" +
    		"</div>");

    	resultlist.append(newResult);
    	resultlist.append("\n");

    	newResult.hover(function (){
            $(this).css("background-color", "lightgray");
            $(this).css("color", "darkblue");
            $(this).css("border-color", "blue");
    	}, function (){
            $(this).css("background-color", "transparent");
            $(this).css("color", "black");
            $(this).css("border-color", "#999");
    	}
    	)
    	
    });

    }


    $("#loginForm").on("submit", function () {
    	var username = $("#username").val();
    	var password = $("#password").val();

    	if(username && password){
    		$.post("/api/login", {}, function(data) {
    		console.log("Success :: " + data);
    		displayResults(data);

            $("#loginForm").hide();
            $("#logoutSection").show();

    		$("#errorMsg").empty();
    	})
    	.fail(function(data){
    		console.log("Something BAD happened!");
    		$("#errorMsg").text("Username and Password are mandatory.");
    	})
    	.done(function(){

    	})

    	}else{
         $("#errorMsg").text("Username and Password are mandatory.");
    	}
    	return false;
     })

     $("#logoutSection").on('click', function(){
     	$("#loginForm").show();
     	$("#logoutSection").hide();
     	resultlist.empty();
     	resultlist.text("Please login to see all courses");
     })	

});











/*var msg = "Hello";
console.log(msg);

var resultsDiv = document.getElementById("results");
console.log(resultsDiv);
resultsDiv.innerHTML = "<p> Message injected by JS </p>";*/
