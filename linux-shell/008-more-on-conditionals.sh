read s1
read s2
read s3

if [[ $s1 != $s2 && $s1 != $s3 && $s2 != $s3 ]]; then
    echo "SCALENE"
elif [[ $s1 == $s2 && $s1 == $s3 ]]; then
    echo "EQUILATERAL"
# do i really need to code all of the isosceles permutations?
# elif [[ ($s1 == $s2 && $s1 != $s3 && $s2 == $s3) ||  ]]; then
#     echo "ISOSCELES"
else
    echo "ISOSCELES"
fi
