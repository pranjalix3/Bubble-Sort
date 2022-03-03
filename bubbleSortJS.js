
function getmaxmin(indicator) {

        //Requested minimum element
 if(!finalSortedArray || !finalSortedArray.length)
 {
    alert(minmaxErrorAlertOnNoElement);
 }
 else{
        finalMaxMinValue=-1;

        if (indicator == minMaxPreference.minimum) {
            if (sortedOrderVar == sortPreference.ascending) {
                finalMaxMinValue= finalSortedArray[0];
            } 

            else {
                finalMaxMinValue= finalSortedArray[finalSortedArray.length - 1];
            }
        } 
//Requested maximum element
else {
                if (sortedOrderVar == sortPreference.descending) {
        finalMaxMinValue= finalSortedArray[0];
    } else {
        finalMaxMinValue= finalSortedArray[finalSortedArray.length - 1];
    }
}  


if (indicator == minMaxPreference.maximum){
    maxValueHTMLElement.innerHTML = finalMaxMinValue;
}
else{
    minValueHTMLElement.innerHTML = finalMaxMinValue;
}
}
}

/*Function to actually send request to server for sorting input array. We also pass Various parameters along with it
such as sorting order and stepindex. Where stepindex indicates the step for which this request was made */

function getSortedArray(str) {
    if (str.length == 0) {
        alert(inputArrayNotFoundErrorAlertMessage);
        return;
    }

    if (window.XMLHttpRequest) { 
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    //Response back from server - Sorted array
                    var data = new Array();
                    
                    data = eval(xmlhttp.responseText);
                    //Need to make check for null data to avoid javascript exception
                    if (data != null) {
                    	
                    	/*
                    	Function for actually creating graphical depiction of how array is sorted.
                    	We pass following paramters to it

                    	data[4]= Current intermediate state of an array
                    	data[0]= current index ready to be swapped
                    	data[3]= flag which indicates if Swapping has taken place in earlier step
                    	*/
                    //To stop processing as soon as we receive that user initiated init on auto computation of bubble sort

                    if(!didResetGraph){
                        createGraph(data[4], data[0], data[3]);
                    }
                        //Each time this value is updated and finally, we have fully sorted array on this variable
                        finalSortedArray=data[4];
                        
                        //Update DOM
                        currentProcessingIndex.value = data[0];
                        currentElementUnderProcessing.value = data[1];
                        nextElementUnderProcessing.value = data[2];
                        swappedOrNotElement.value = data[3];
                        swappedElementsState.innerHTML = "No Swapping Done";

                        /* Indicate which values are swapped if swapping was indeed done in the previous stage */
                        
                        swapHTMLElement.value = data[1];
                        
                        if (data[3] === true) {


                            swapHTMLElement.style.color = "red";
                            if(sortedOrderVar==sortPreference.descending){ //descending
                                swappedElementsState.innerHTML = data[1] + " > " + data[2] + " Swapped Successfully";
                            }
                        	else {//ascending
                               swappedElementsState.innerHTML = data[1] + " < " + data[2] + " Swapped Successfully";
                           }
                       } else {

                        swapHTMLElement.value = "N/A";
                        swapHTMLElement.style.color = "black";
                    }
                } else {
                    	// Display the array has been successfully sorted and sent to output
                    	//clear function interval

                        currentSortingStateElement.innerHTML = "Processing Done Successfully";
                        currentSortingStateElement.style.color="red";
                        stepupButtonElement.disabled = true;
                        stepupButtonElement.style.background="white";

                        //Processing done ...Ok to reset setInternal on bubble sort function
                        clearInterval(functionInterval);
                    }

                }
            } 
            xmlhttp.open("GET", "bubbleSortCalculation.php?stepindex=" + str + "&sortedorder=" + sortedOrderVar + "&inputarray=" + (JSON.stringify(inputarrayrequest)), true);
            xmlhttp.send();
        }

//Order in which elements need to be sorted 0 - Ascending 1- Descending
function orderelements(indicator) {
    reset();
    sortedOrderVar = indicator;
}


function createGraph(data, currentIndexReadyToSwap, swapIndicator) {
    if (data) {
        can = graphObjectHTMLElement;

        numberOfTotalInputElements=data.length;                

               //Border should lie just right to the largest possible bar on the given graph
                can.width = maxnumber*(barWidthMultiplier+0.2);
                //Depends on the number of input elements given to the algorithm
                can.height = numberOfTotalInputElements*barGraphHeightAdjustParameter;


                /* Set canvas size */
                ctx = can.getContext("2d");
                
                ctx.fillStyle = "rgba("+interactiveGraphBackgroundRGBValues.RED+","+interactiveGraphBackgroundRGBValues.GREEN+","+interactiveGraphBackgroundRGBValues.BLUE+","+"1.0)";
                //console.log("total elements are "+numberOfTotalInputElements*45);
                ctx.fillRect(0, 0, can.width,can.height );
                /* Table to actual display current elements to be sorted and swapping done - 
                if applicable */
                    var tableData = "<table id='inputarrays'><tr><th>Index</th><th>Value</th></tr>";
                for (var i = 0; i < numberOfTotalInputElements; i++) {
                    var color;
                    if (i == currentIndexReadyToSwap || i==currentIndexReadyToSwap+1) {
                        //Show swapped elements only if swapping is indeed done */
                        if (swapIndicator == true) {
                            ctx.beginPath();
                            ctx.fillStyle = graphUpdateColorValue;
                            ctx.rect(0, initialGraphSpacing + i * individualBarLinePositionMultiplier, data[i] * barWidthMultiplier, BAR_WIDTH_CONSTANT);
                            
                            ctx.fill();
                            tableData += "<tr><td style='background-color:red'>" + i + "</td><td style='background-color:red'>" + data[i] + "</td></tr>";
                            continue;
                        }
                    }
                    //Show index + corresponding element at that index
                    tableData += "<tr><td>" + i + "</td><td>" + data[i] + "</td></tr>";
                    ctx.beginPath();
                    ctx.fillStyle = graphNormalColorValue;
                    ctx.rect(0, initialGraphSpacing + i * individualBarLinePositionMultiplier, data[i] * barWidthMultiplier, individualBarLineHeight);
                    ctx.fill();
                }
                tableData += "</table>";

            }
            divForSortProgressTable.innerHTML = tableData;
            inputSortElementsTable=document.getElementById('inputarrays');
        }


        function getRandomArray() {

		
        if (numberOfElementsTextHTMLElement.value > 0 && numberOfElementsTextHTMLElement.value <= 100 ) 
         {
                numelements = parseInt(numberOfElementsTextHTMLElement.value)||numelements;
            

            //Maximum and Minimum Value you can give
            if (minNumberHTMLTextElement.value >= 0) {
                minnumber = parseInt(minNumberHTMLTextElement.value)||minnumber;
            }
            if (maxNumberHTMLTextElement.value <=2000) {
                maxnumber = parseInt(maxNumberHTMLTextElement.value)||maxnumber;
            }

            /* Swap Number if user mistakenly enters swapped values */
            if (minnumber > maxnumber) {
                var temp = minnumber;
                minnumber = maxnumber;
                maxnumber = temp;
            }

            //numelements - how many array elements were requested from this function
            //Generate random number inclusive of min and max

            for (i = 0; i < numelements; i++) {
                var randomnumber = Math.floor(Math.random() * (maxnumber - minnumber + 1)) + minnumber;
                inputarrayrequest.push(randomnumber);
            }
            return inputarrayrequest;
			}
			else{
            alert(numberOfElementsError);
            return [];
        }
        }

        //Automatically generate successive output when user pressed - Play button
        //Function executes once per second to send request to server to get next result set */
        function auto() {


            functionInterval = setInterval(bubbleSort, AUTO_FUNCTION_RUN_TIMEOUT_IN_SECONDS*1000);

        }

        /* Execute this function for each time user presses step button */
        function bubbleSort() {
            didResetGraph=0;

        //Each time bubble sort in initiated, enable the button again
        initializeButtonHTMLElement.disabled = false;




        currentSortingStateElement.innerHTML = "Processing.....Currently";
            //Get fresh array only for the first time since processing begun
            if (r == 0) {
                inputarrayrequest = getRandomArray();
				if(!inputarrayrequest.length){
				clearInterval(functionInterval);
				return;
				}
            } 
            getSortedArray(r++);

        }

        /*Reset every setting . Resets automatically when user requests change in the order of elements
        New random array is generated and all fields are cleared too */
        function reset() {

        //Each time reset button is clicked, make sure it is disable preventing any random psycho user from repeatedly pressing it
        initializeButtonHTMLElement.disabled = true;

        clearInterval(functionInterval);
        inputarrayrequest = new Array();
        r = 0;
//
currentSortingStateElement.innerHTML = "Ready to Input..";

swapHTMLElement.value = "N/A";
swappedOrNotElement.value = "N/A";

currentElementUnderProcessing.value = "currentarrindex";
nextElementUnderProcessing.value = "nextarrindex";
currentProcessingIndex.value = "index";
minNumberHTMLTextElement.value = "0";
maxNumberHTMLTextElement.value = "100";

currentSortingStateElement.style.color="black";
maxValueHTMLElement.innerHTML = "<button class='button' onclick='getmaxmin(1)'>Get Maximum Value</button>";
minValueHTMLElement.innerHTML = "<button class='button' onclick='getmaxmin(2)'>Get Mainimum Value</button>";
stepupButtonElement.style.background="#E3E1B8";
swappedElementsState.innerHTML="Click step or play to start";
            //$('#stepup').addClass('button');
            stepupButtonElement.disabled = false;
            resetGraphAndValuesTable();

        }


        function resetGraphAndValuesTable(){

            can = graphObjectHTMLElement;
            inputSortElementsTable.style.display='none';           
            can.width = 0;
            can.height =0;
            didResetGraph=1;

        }