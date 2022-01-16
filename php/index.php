<?php

// $test = 'Hello PHP';

// var_dump($test);

// echo '<br>';

// $test = 10;

// var_dump($test);

// echo '<br>';

// $array = [];

// $array = array();

// var_dump($array);

// echo '<br>';

// $null = null;

// var_dump($null);

// echo '<br>';

// $float = 2.14;

// echo "<pre>";
// echo "</pre>";

/*

This variable make good

 */

$number = 10;

// var_dump(gettype($number));

// var_dump(is_int($number));
// var_dump(is_string($number));
// var_dump(is_array($number));

// var_dump(empty(null));

$animals = ['cat', 'dog', 'aligator'];

// $listOfCars = [
//     'car' => [
//         'model' => 'c200',
//         'brand' => 'Mercedes',
//         'year' => 2001,
//     ],
// ];

// echo "<pre>";
// var_dump($listOfCars);
// echo "</pre>";

// echo $listOfCars['car']['model'];

$data = [
    'car' => 'Mercedes',
    'not_1' => 'BMW',
    'car2' => 'Mercedes',
    'not_3' => 'BMW',
    'car4' => 'Mercedes',
    'not_5' => 'BMW',
    'car6' => 'Mercedes',
    'not_7' => 'BMW',
];

// echo "<pre>";
// var_dump($data);
// echo "</pre>";

$test = array_slice($data, 3, 2);

echo "<pre>";
var_dump($test);
echo "</pre>";

// array_keys()
// array_values()
// array_key_exists()
// array_merge()
// array_push//deprecate
// array_reverse()
// array_slice()
// array_sum()
// array_unique()
// array_unshift — Adds one or more elements to the beginning of an array
// asort — Sorts an associative array in ascending order according to the value
// count()
// end()
// reset()
// ksort — Sorts an associative array by key

$test = [
    'b' => 12,
    'a' => 10,
    'e' => 9,
];

echo "<pre>";
var_dump(end($test));
echo "</pre>";

//  explode()
// implode()
// htmlentities()
// ltrim(), rtrim() — Removes spaces or other characters from the left side of a
// md5() - string hash
// sprintf()
// str_replace() — Replaces specified characters in a string (case-sensitive
// str_split()
// strlen() — Returns the length of a string
// stripos() — Finds the position of the first occurrence of a substring within a string (case insensitive)
// strrev() — Reverses a string
// strtolower(), strtoupper()
// substr() — Returns a specified part of a string
// trim() — Removes space or other characters from both sides of a string
// ucfirst() — Transforms the first character of a string to uppercase

$car = ' www. google.compage /$good_cars ';
// $car = ['Mercedes', 'BMW', 'TOYOTA'];

echo "<pre>";
var_dump(stripos($car, 'google'));
echo "</pre>";