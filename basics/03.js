let id = 12
let string_id = '12a'

convert_id = Number(string_id)


/*
'12' => 12 Number
'12a' => Nan Number

*/

console.table([id, typeof id, string_id, typeof string_id, convert_id, typeof convert_id])