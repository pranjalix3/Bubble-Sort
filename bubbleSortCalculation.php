<?php
//Make all error reports visible for debugging purpose
//To allow cross http reference access

header('Access-Control-Allow-Origin: *');
error_reporting(E_ALL);

$result_array = array();

//Input array received from the client - It might contain a partially sorted data
$arrayName = json_decode($_GET['inputarray']);

//Swap elements - essential function of the Bubble Sort
function swap_elements(&$input, $index_one, $index_two)
{
    $temp              = $input[$index_one];
    $input[$index_one] = $input[$index_two];
    $input[$index_two] = $temp;
}

/* We pass two arrays to this function $input_array is the one with input
and $result_array is kept for bookkeeping purpose where we store all data in stepwise manner
including elements swapped, swap indicator and intermediate arrya state */

function bubble_sort(&$input_array, &$result_array)
{

  //Indicates how this array should be sorted 0 -Ascending 1- Descending
    $order        = $_GET['sortedorder'];
    $array_length = count($input_array);
    $flag         = true;

    for ($i = 1; $i <= $array_length && $flag; $i++) {
        $flag = false;
        for ($j = 0; $j < ($array_length - 1); $j++) {
            //descending
            if ($order == 1) {
                if ($input_array[$j + 1] > $input_array[$j]) {
                    swap_elements($input_array, ($j + 1), $j);
                    $flag = true;
                }
            } 
        //Ascending
            else {
                if ($input_array[$j + 1] < $input_array[$j]) {
                    swap_elements($input_array, ($j + 1), $j);
                    $flag = true;
                }
            }
            //Put successive values and intermediate results in $result_array send it to clint based
            //on the index passed to the server

            //current Processing index
            //Value of current element being processed
            //Value of next element being processed
            //Did last two value we encounter got swapped?
            //Partially sorted array data

            array_push($result_array, array(
                $j,
                $input_array[$j],
                $input_array[$j + 1],
                $flag,
                $input_array
            ));
        }
    }
}
    bubble_sort($arrayName, $result_array);

//Processing is in progress - Return empty string once it's done
    if($_GET['stepindex']<count($result_array)){
    echo json_encode($result_array[$_GET['stepindex']]);
}
else{
    //Processng done successfully - Indicate it by sending back blank string
    echo "";
}
?>