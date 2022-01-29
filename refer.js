/**
 
Explanation:
We are about to implement a referral program feature on our system.
The rules of the referral program are:
1. Users who successfully refer a new user will get 1 point.
2. The first rule applies transitively with no depth limit.
   For example: when `user 1` refers `user 2`, `user 2` refers `user 3.
   `user 2` will get a total of 1 point for successfully referring `user 3`,
   while `user 1` will get a total of 2 points from the results of referring `user 2`
   and an additional 1 point because `user 2` successfully referred `user 3`, and so on.
3. Users can only registered once.
4. Users can't refer themselves.
5. Users can register without referral.

Count the points earned by user x, x is input.

Input = referralsInput: 2D array of referral pairs, userId: number
Notes on referral pairs:
1. First element is user referrer id.
2. Second element is referred user id.
3. Negative number in first element means user in second element register himself.
For example:
[1, 2] means user 1 refers user 2.
[-1, 2] means user 2 register without referral
Output = userReferralCount: number

Limitation:
+ 0 < userId <= int.max()
+ 0 < referralsInput.length <= int.max()

Hint:
You need a dictionary is to store the referral chain
So when a new user registered, we can track the referral chain.
And when a user does not exist we can check on these dictionary keys.
Example for example 1:
Past: User 1 referred user 2
State: {2: 1}
Current: User 2 refers User 3
So we just add total referred user on user 2 and
add to User 1 too because we know that User 2 is referred by User 1.
New state: {2: 1, 3: 2}

You also need a dictionary is to save total points by an user.
Example for example 1:
{1: 2, 2: 1, 3: 0, 4: 1, 5: 0}
This means user 1 have 2 points, user 2 have 1 point, and so on.

Examples:
+ Example 1:
  Input: [[1, 2], [2, 3], [4, 5]], 1
  Output: 2
 
+ Example 2:
  Input: [[1, 2], [2, 3], [3, 4]], 1
  Output: 3
 
+ Example 3:
  Input: [[1, 2], [3, 2], [3, 4]], 1
  Output: Invalid input
  Reason: User 2 already registered
 
+ Example 4:
  Input: [[1, 2], [2, 3], [3, 4]], 4
  Output: 0
  Reason: User 4 hasn't referred someone yet

*/
// write time complexity here: O(n^2)
// write space complexity here: O(2n)
const temp = [
  [1, 2],
  [2, 3],
  [4, 5],
]; // user = 1
function countRefer(arr, user) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i][1];
    let referredBy = arr[i][0];
    if (referredBy == -1) {
      continue;
    }
    map.set(
      referredBy,
      map.has(referredBy) ? map.get(referredBy).push(current) : [current]
    );
  }
  let count = 0;
  map;
  function dfs(node) {
    if (!map.get(node)) return;
    let values = map.get(node);
    values;
    for (let el of values) {
      count++;
      dfs(el);
    }
  }
  dfs(user);
  return count;
}

console.log(
  countRefer(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    4
  )
);
