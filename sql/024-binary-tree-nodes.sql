-- version 2
-- use if statement instead of case
SELECT
  N,
  IF(P IS NULL, 'Root', IF(B.N IN (SELECT P FROM BST), 'Inner', 'Leaf'))
FROM BST AS B
ORDER BY N


-- version 1
-- tried with case. i don't know what i'm doing this early in the morning
SELECT
  N,
  CASE
    WHEN B.N IN (SELECT DISTINCT P FROM BST WHERE P IS NULL) THEN 'Root'
    WHEN B.N IN (SELECT DISTINCT P FROM BST WHERE P IS NOT NULL) THEN 'Inner'
    WHEN B.N NOT IN (SELECT DISTINCT P FROM BST) THEN 'Leaf'
    ELSE 'wtf'
  END NODE_TYPE
FROM BST AS B
ORDER BY N
