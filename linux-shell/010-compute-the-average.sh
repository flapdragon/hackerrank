read n

sum=0
for (( i = 0; i < $n; i++ ))
do
    read number
    (( sum += number ))
done

printf "%.3f\n" `echo "$sum / $n" | bc -l`
