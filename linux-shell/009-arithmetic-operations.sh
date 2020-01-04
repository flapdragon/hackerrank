read x
# x2=$((x))
# echo "scale=3; $((x))" | bc

# this one is close all but 1 test pass
# bc <<< "scale=3; $x"

printf "%.3f\n" `echo "$x" | bc -l`

# read x
# answer=`echo "$x " | bc -l`
# echo $(printf %.3f $answer)

# takeaways: i need to understand bc, printf and math in bash in general better
