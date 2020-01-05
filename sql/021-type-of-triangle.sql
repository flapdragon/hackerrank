-- MySQL
-- ok so i learned something about triangles today
-- re-learned? a + b > c or it's not a triangle
-- also
-- you guys are fucking high
-- you're going to tell me a simple select with a couple of where conditions vis a vis the last challenge
-- is the same diffculty as overlapping cases?
-- you guys are fucking high
SELECT
    (CASE
        WHEN (A + B <= C) THEN 'Not A Triangle'
        WHEN (A = B AND A = C) THEN 'Equilateral'
        WHEN (A != B AND A != C AND B != C) THEN 'Scalene'
        WHEN ((A = B AND A != C) OR (A != B AND A = C)) THEN 'Isosceles'
    END) as triangled
FROM TRIANGLES
