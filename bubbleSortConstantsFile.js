

	//Global Variable for an application 

	//Index of the iteration for which request was made. Increased for successive iteration to get next intermediate sorted array value 
	var r = 0;

    //Functioninterval to run iteration sequence automatically when user presses play button
    var functionInterval;
    //Input array to be sent to server for sorting
    var inputarrayrequest = new Array();
    //Canvas variables
    var can, ctx;

     //Default Values, will be changed based on the number of elements and maximum value given to sort an array

        //When processing is done through auto mode, we want some parameter to keep track if user reset the simulation
        //In the middle of that process

        var didResetGraph=0;
        
        //Final Value of fully sorted array is stored in the this variable at the end of iteration
        var finalSortedArray=[];

        /* Function for getting minimum and maximum elements.
        0 indicates maximum element and 2 indicates minimum element requested*/


	//Order in which array should be sorted 0 for ascending order (Default) and 1 for Descending
	var sortedOrderVar = 0;
    //Number of Elements to sort (Default  is 10 elements)
    var numelements = 10;
    //Range of numbers to sort - Represent minimum and maximum number to pass to function
    var minnumber = 0;
    var maxnumber = 100;

    var canWidth=800;
    var canHeight=600;

    var BAR_WIDTH_CONSTANT=5;
    var AUTO_FUNCTION_RUN_TIMEOUT_IN_SECONDS=1;
	
	//Graph Constants
    var initialGraphSpacing=40;
    var barWidthMultiplier=1.8;
    var barGraphHeightAdjustParameter=45;
    var individualBarLinePositionMultiplier=40;
	var individualBarLineHeight=5;


    var minMaxPreference={
    	maximum:1,
    	minimum:2
    }

    var sortPreference={
    ascending:0, //Default Value
    descending:1
}

var interactiveGraphBackgroundRGBValues={
	RED:139,
	GREEN:142,
	BLUE:65
}
var minmaxErrorAlertOnNoElement="Please Provide an input array and click this button after sorting is complete";
var inputArrayNotFoundErrorAlertMessage="Please provide an array input to sort";
var numberOfElementsError="Please specify number of Elements in the inclusive range 1 to 100";

var graphUpdateColorValue="red";
var graphNormalColorValue="white";

//All Element Retrived from getElementById
var maxValueHTMLElement=document.getElementById('maxValue');
var minValueHTMLElement=document.getElementById('minValue');
var graphObjectHTMLElement=document.getElementById('graph');
var swapHTMLElement=document.getElementById('swap');

//This element gets added programmatically in later phaes - That's why not initialising here
var inputSortElementsTable;

var minNumberHTMLTextElement=document.getElementById('minno');
var maxNumberHTMLTextElement=document.getElementById('maxno');
var numberOfElementsTextHTMLElement=document.getElementById('numelementstext');
var divForSortProgressTable=document.getElementById('numbertable');
var currentSortingStateElement=document.getElementById('pr');
var swappedElementsState=document.getElementById('swappingprocess');
var stepupButtonElement=document.getElementById('stepup');
var swappedOrNotElement=document.getElementById('swapped');
var currentProcessingIndex=document.getElementById('index');
var initializeButtonHTMLElement=document.getElementById('initializeButton');
var currentElementUnderProcessing=document.getElementById('currentarrindex');
var nextElementUnderProcessing=document.getElementById('nextarrindex');




