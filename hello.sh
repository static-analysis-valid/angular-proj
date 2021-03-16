#echo "hellow world"
LINT_ISSUES="$(app/node_modules/.bin/stylelint -f json **/*.scss)"
#echo "LINT_ISSUES" $LINT_ISSUES

# echo  $LINT_ISSUES | jq '.[] | {source: .source, warnings: .warnings[]}'

#JQ_ISSUE=$( echo "${LINT_ISSUES}" | jq '.[] | {source: .source, warnings: .warnings[]}' )
# declare -a JQ_ISSUE
JQ_ISSUE=$( echo $LINT_ISSUES |  jq -r '.[] | {source: .source, warnings: .warnings[]} ' )
echo "$JQ_ISSUE" > output_file.json
echo 'JQ_ISSUE', "$JQ_ISSUE" 


# for line in $JQ_ISSUE[@]; do
#     echo "line " $line
# done
row="eyJsaW5lIjozLCJjb2x1bW4iOjEsInJ1bGUiOiJuby1taXNzaW5nLWVuZC1vZi1zb3VyY2UtbmV3bGluZSIsInNldmVyaXR5Ijoid2FybmluZyIsInRleHQiOiJVbmV4cGVjdGVkIG1pc3NpbmcgZW5kLW9mLXNvdXJjZSBuZXdsaW5lIChuby1taXNzaW5nLWVuZC1vZi1zb3VyY2UtbmV3bGluZSkifQ=="
# echo "${row}" | base64 --decode | jq -r .

ROW_DECODED=$( echo "${row}" | base64 --decode | jq -r -c . )
echo "ROW DECODED:" $ROW_DECODED

COLUMN=$( echo $ROW_DECODED | jq .column )
echo "COLUMN: " $COLUMN

LINE=$( echo $ROW_DECODED | jq .line )
echo "LINE: " $LINE

TEXT=$( echo $ROW_DECODED | jq .text )
echo "TEXT: " $TEXT

echo "::warning file=app/src/app/app.component.scss,line=$LINE,col=$COLUMN::$TEXT"




# echo "Doublequoted args:" $*


# READ FILE
# pass file name as terminal input
# read and print line by line
# does 'line' stand for keyword
: '
    while read line
    do
        echo "$line"
    done <  output_file.txt
'


# INPUT VALUES
# echo $1 $2 $3
: '
    args=("$@")
    echo "print first 3 inputs" ${args[0]} ${args[1]} ${args[2]}
    echo "print all" $@
    echo "print length: " $#
'



# UNTIL CONDITION
: '
    untilNumber=1
    until [ $untilNumber -gt 10 ]
    do
        echo "$untilNumber"
        untilNumber=$(( untilNumber+1 ))
    done
'

# CONDITIONAL STATEMENTS
: '
    count=10

    # required space between both brackets and a value
    if [ $count -lt 9 ]
    then
        echo "the condition is true"
    elif (( $count == 10 )) ## ELSE IF
    then
        echo "the value is equal to condition"
    else
        echo "the value is greater than condition"
    fi #end if statement
'


# echo LINT_ISSUES: $LINT_ISSUES  | jq '.'

# # store output to the file
echo $LINT_ISSUES > output_file.txt

: '
 MULTILINE COMMENT HERE
 interactive editor input to the file & CTRL+D
 replace text
'
#cat > output_file.txt

## Append text with interactive editor
#cat >> output_file.txt

cat << hereDocDelimiter
    HereDocDelimiter: multiline text output in the terminal
    e.g. show comments on the output
    Good for writting notes to remember
hereDocDelimiter
