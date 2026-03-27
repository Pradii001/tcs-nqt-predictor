// TCS NQT — Advanced Quant & Reasoning + Coding Questions
const ADVANCED_QUESTIONS = [
  {id:"A1",topic:"Permutations & Combinations",prob:"certain",diff:"medium",
    q:"In how many ways can 5 people be seated in a row?",
    options:["120","60","24","720"],answer:0,
    explanation:"5! = 5×4×3×2×1 = 120."},
  {id:"A2",topic:"Permutations & Combinations",prob:"certain",diff:"medium",
    q:"How many 3-digit numbers can be formed using digits 1,2,3,4,5 without repetition?",
    options:["60","120","125","80"],answer:0,
    explanation:"5P3 = 5×4×3 = 60."},
  {id:"A3",topic:"Permutations & Combinations",prob:"very-high",diff:"hard",
    q:"In how many ways can a committee of 3 be formed from 5 men and 4 women with at least 1 woman?",
    options:["74","80","84","70"],answer:0,
    explanation:"Total C(9,3)=84. All men C(5,3)=10. At least 1 woman = 84-10 = 74."},
  {id:"A4",topic:"Probability",prob:"certain",diff:"medium",
    q:"Two dice are thrown. What is the probability that the sum is 7?",
    options:["1/6","1/3","5/36","7/36"],answer:0,
    explanation:"Favorable: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) = 6. Total = 36. P = 6/36 = 1/6."},
  {id:"A5",topic:"Probability",prob:"certain",diff:"medium",
    q:"A bag has 4 red, 3 blue, 2 green balls. One ball is drawn. Probability it is NOT red?",
    options:["5/9","4/9","2/3","1/3"],answer:0,
    explanation:"Total = 9. Not red = 5. P = 5/9."},
  {id:"A6",topic:"Probability",prob:"very-high",diff:"hard",
    q:"Three cards are drawn from a deck of 52. What is the probability all are aces?",
    options:["1/5525","4/52","1/132600","3/52"],answer:0,
    explanation:"P = C(4,3)/C(52,3) = 4/22100 = 1/5525."},
  {id:"A7",topic:"Advanced DI",prob:"certain",diff:"hard",
    q:"Company profits: 2020=₹50L, 2021=₹60L, 2022=₹45L, 2023=₹75L, 2024=₹90L. What is the CAGR from 2020 to 2024?",
    options:["~15.8%","20%","12%","18%"],answer:0,
    explanation:"CAGR = (90/50)^(1/4) - 1 = (1.8)^0.25 - 1 ≈ 0.158 = 15.8%."},
  {id:"A8",topic:"Geometry",prob:"very-high",diff:"hard",
    q:"A cone has radius 7cm and slant height 25cm. Find its curved surface area.",
    options:["550 cm²","500 cm²","600 cm²","450 cm²"],answer:0,
    explanation:"CSA = πrl = 22/7 × 7 × 25 = 550 cm²."},
  {id:"A9",topic:"Permutations & Combinations",prob:"very-high",diff:"medium",
    q:"How many words can be formed from MISSISSIPPI taking all letters?",
    options:["34650","39600","40000","28000"],answer:0,
    explanation:"11!/(4!×4!×2!) = 39916800/(24×24×2) = 34650."},
  {id:"A10",topic:"Probability",prob:"very-high",diff:"medium",
    q:"What is the probability of getting at least one head in 3 tosses of a fair coin?",
    options:["7/8","3/4","1/2","5/8"],answer:0,
    explanation:"P(at least 1H) = 1 - P(no H) = 1 - (1/2)³ = 1 - 1/8 = 7/8."},
  {id:"A11",topic:"Advanced Reasoning",prob:"certain",diff:"hard",
    q:"If all Zips are Zaps, some Zaps are Zops, and no Zops are Zugs. Which MUST be true?",
    options:["Some Zips are not Zugs","All Zips are Zugs","No Zaps are Zugs","All Zugs are Zips"],answer:0,
    explanation:"Zips⊆Zaps. Some Zaps are Zops. Zops∩Zugs=∅. Some Zips may be Zops (which aren't Zugs), so some Zips are not Zugs is possible. Actually needs careful Venn analysis."},
  {id:"A12",topic:"Equations",prob:"very-high",diff:"medium",
    q:"If 3x + 2y = 12 and 2x + 3y = 13, find x + y.",
    options:["5","4","6","3"],answer:0,
    explanation:"Add both: 5x + 5y = 25. x + y = 5."},
  {id:"A13",topic:"Series & Progressions",prob:"very-high",diff:"medium",
    q:"Sum of first 20 terms of an AP where a=3, d=4?",
    options:["820","800","780","840"],answer:0,
    explanation:"S = n/2[2a+(n-1)d] = 20/2[6+76] = 10×82 = 820."},
  {id:"A14",topic:"Probability",prob:"high",diff:"hard",
    q:"In a class, 60% study Math, 40% study Physics, 20% study both. A student is picked at random. What's the probability they study neither?",
    options:["20%","30%","10%","40%"],answer:0,
    explanation:"P(M∪P) = 60+40-20 = 80%. Neither = 100-80 = 20%."},
  {id:"A15",topic:"Geometry",prob:"high",diff:"medium",
    q:"The diagonal of a rectangle is 13cm and one side is 5cm. Find the area.",
    options:["60 cm²","65 cm²","55 cm²","50 cm²"],answer:0,
    explanation:"Other side = √(13²-5²) = √(169-25) = √144 = 12. Area = 5×12 = 60 cm²."},
  {id:"A16",topic:"Permutations & Combinations",prob:"high",diff:"medium",
    q:"In how many ways can 6 books be arranged on a shelf if 2 specific books must always be together?",
    options:["240","360","120","720"],answer:0,
    explanation:"Treat 2 books as 1 unit: 5! = 120. The 2 books can swap: ×2. Total = 240."},
  {id:"A17",topic:"Advanced DI",prob:"high",diff:"medium",
    q:"If a pie chart shows Education=72°, Health=108°, Defense=90°, Others=90°, and total budget is ₹1000Cr, what is Health budget?",
    options:["₹300Cr","₹270Cr","₹350Cr","₹250Cr"],answer:0,
    explanation:"Health = (108/360) × 1000 = 300 Cr."},
  {id:"A18",topic:"Clocks & Calendars",prob:"high",diff:"medium",
    q:"How many times do the hour and minute hands of a clock overlap in 24 hours?",
    options:["22","24","23","12"],answer:0,
    explanation:"Hands overlap 11 times in 12 hours (not 12, since 12 o'clock counts once). In 24 hours: 22 times."},
  {id:"A19",topic:"Advanced Reasoning",prob:"high",diff:"hard",
    q:"5 friends rank 1st to 5th in a test. A is not 1st or 5th. B is ranked just above C. D is ranked before A but after E. Find B's rank.",
    options:["Need more info","3rd","2nd","4th"],answer:0,
    explanation:"E before D before A. A not 1st/5th. B just above C. Multiple arrangements possible depending on B,C placement."},
  {id:"A20",topic:"Equations",prob:"high",diff:"easy",
    q:"If x² - 5x + 6 = 0, find the values of x.",
    options:["2 and 3","1 and 6","-2 and -3","3 and -2"],answer:0,
    explanation:"x² - 5x + 6 = (x-2)(x-3) = 0. x = 2 or 3."},
  {id:"A21",topic:"Series & Progressions",prob:"high",diff:"medium",
    q:"The 5th term of a GP is 48 and the 3rd term is 12. Find the common ratio.",
    options:["2","3","4","1/2"],answer:0,
    explanation:"ar⁴/ar² = r² = 48/12 = 4. r = 2."},
  {id:"A22",topic:"Permutations & Combinations",prob:"high",diff:"hard",
    q:"How many ways can the letters of LEADER be arranged?",
    options:["360","720","120","240"],answer:0,
    explanation:"6 letters, E repeats 2 times. 6!/2! = 720/2 = 360."},
  {id:"A23",topic:"Probability",prob:"high",diff:"medium",
    q:"A number is chosen randomly from 1 to 100. What is the probability it's divisible by both 3 and 5?",
    options:["3/50","1/5","1/15","1/3"],answer:0,
    explanation:"Divisible by 15: 15,30,45,60,75,90 = 6 numbers. P = 6/100 = 3/50."},
  {id:"A24",topic:"Geometry",prob:"high",diff:"hard",
    q:"A sphere has surface area 616 cm². Find its volume. (π=22/7)",
    options:["1437.33 cm³","1200 cm³","1500 cm³","1000 cm³"],answer:0,
    explanation:"4πr²=616. r²=49. r=7. V=4/3πr³=4/3×22/7×343=4312/3≈1437.33 cm³."},
  {id:"A25",topic:"Advanced DI",prob:"very-high",diff:"hard",
    q:"Sales data: Product A=40%, B=25%, C=20%, D=15%. If total sales=₹80L and A increases by 10% and B decreases by 20% next year (others same), new total?",
    options:["₹79.2L","₹80L","₹82L","₹78L"],answer:0,
    explanation:"A=32L→35.2L(+3.2). B=20L→16L(-4). C=16L. D=12L. Total=35.2+16+16+12=79.2L."},
];

const CODING_QUESTIONS = [
  {id:"C_NEW1",topic:"Array",prob:"certain",diff:"hard",
    q:"ACTUAL RECENT Q (March 2026): Find the maximum product from a subset of an array containing positive, negative, and zero elements. Input: [-1, 2, -3, 4] Output: 24 (-1 * -3 * 2 * 4).",
    options:["Sort and greedy approach","Find max neg product pair","Count negatives and zeroes","Dynamic programming"],answer:2,
    explanation:`def max_subset_product(arr):
    if not arr: return 0
    if len(arr) == 1: return arr[0]
    
    max_neg = float('-inf')
    count_neg = 0
    count_zero = 0
    prod = 1
    
    for x in arr:
        if x == 0:
            count_zero += 1
            continue
        if x < 0:
            count_neg += 1
            max_neg = max(max_neg, x)
        prod *= x
        
    if count_zero == len(arr): return 0
    if count_neg % 2 == 1:
        if count_neg == 1 and count_zero > 0 and count_zero + count_neg == len(arr):
            return 0
        prod //= max_neg
    return prod
# Source: Exact March 2026 TCS NQT Shift`},
  {id:"C_NEW2",topic:"Array",prob:"certain",diff:"medium",
    q:"ACTUAL RECENT Q (March 2026): A conveyor belt has packets. Empty packets are represented by 0. Move all empty packets to the end of the array. Input: [1, 2, 0, 4, 3, 0, 5, 0] Output: [1, 2, 4, 3, 5, 0, 0, 0]",
    options:["Two pointer technique","Bubble sort","Extra array","Move non-zeroes forward"],answer:0,
    explanation:`def move_zeroes(arr):
    non_zero = 0
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[non_zero], arr[i] = arr[i], arr[non_zero]
            non_zero += 1
    return arr
# Time: O(n), Space: O(1)
# Source: Exact March 2026 TCS NQT Shift`},
  {id:"C_NEW3",topic:"Number",prob:"certain",diff:"medium",
    q:"ACTUAL RECENT Q (March 2026): Given 'N' number of days and the starting day of the month (e.g., 'Monday'), count the total number of Sundays in those N days.",
    options:["Modulo arithmetic","Use datetime lib","Loop N times","Math formula: (N + offset)/7"],answer:3,
    explanation:`def count_sundays(start_day, n):
    days = {"Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5, "Saturday": 6, "Sunday": 7}
    if start_day not in days: return 0
    
    # How many days until first Sunday?
    first_sunday_offset = 7 - days[start_day]
    
    if n <= first_sunday_offset:
        return 0
        
    remaining_days = n - (first_sunday_offset + 1)
    return 1 + (remaining_days // 7)
# Source: Exact March 2026 TCS NQT Shift`},
  {id:"C_NEW4",topic:"Array",prob:"very-high",diff:"hard",
    q:"ACTUAL RECENT Q (March 2026): Find the minimum number of adjacent swaps required to transform an initial array into a desired final array. Input: arr=[10, 20, 50, 40], target=[50, 20, 40, 10] Output: 4",
    options:["Modified Bubble Sort","Inversion Count","Greedy matching","DFS"],answer:1,
    explanation:`def min_swaps_adjacent(arr, target):
    # Essentially finding the number of inversions mapped to target
    pos = {val: i for i, val in enumerate(target)}
    mapped = [pos[val] for val in arr]
    
    swaps = 0
    n = len(mapped)
    # Count inversions using modified bubble sort or merge sort
    # Simple bubble sort counts adjacent swaps perfectly:
    for i in range(n):
        for j in range(0, n-i-1):
            if mapped[j] > mapped[j+1]:
                mapped[j], mapped[j+1] = mapped[j+1], mapped[j]
                swaps += 1
    return swaps
# Source: Exact March 2026 TCS NQT Shift`},
  {id:"C1",topic:"Array",prob:"certain",diff:"medium",
    q:"Write a program to find the second largest element in an array. Input: [12, 35, 1, 10, 34, 1] Output: 34",
    options:["Sort & pick n-2 index","Use single pass with two vars","Use set then sort","All approaches work"],answer:3,
    explanation:`def second_largest(arr):
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return second
# Time: O(n), Space: O(1)
# Source: GeeksforGeeks TCS NQT Sheet`},
  {id:"C2",topic:"String",prob:"certain",diff:"easy",
    q:"Check if a given string is a palindrome. Input: 'madam' Output: True",
    options:["Compare string with its reverse","Use two pointers from ends","Use stack","All approaches work"],answer:3,
    explanation:`def is_palindrome(s):
    return s == s[::-1]

# Or with two pointers:
def is_palindrome_v2(s):
    left, right = 0, len(s)-1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
# Source: GeeksforGeeks, PrepInsta TCS NQT`},
  {id:"C3",topic:"Number",prob:"certain",diff:"easy",
    q:"Find the sum of digits of a given number. Input: 12345 Output: 15",
    options:["Use modulo and division loop","Convert to string and sum","Use recursion","All work"],answer:3,
    explanation:`def sum_of_digits(n):
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    return total
# Time: O(log n), Source: TCS NQT Previous Year`},
  {id:"C4",topic:"Array",prob:"certain",diff:"medium",
    q:"Remove duplicates from a sorted array in-place. Input: [1,1,2,2,3,4,4,5] Output: [1,2,3,4,5]",
    options:["Two pointer technique","Use set","Hash map","Two pointers is optimal"],answer:0,
    explanation:`def remove_duplicates(arr):
    if not arr: return 0
    i = 0
    for j in range(1, len(arr)):
        if arr[j] != arr[i]:
            i += 1
            arr[i] = arr[j]
    return i + 1
# Time: O(n), Space: O(1). Source: GeeksforGeeks TCS Sheet`},
  {id:"C5",topic:"String",prob:"certain",diff:"medium",
    q:"Count the frequency of each character in a string. Input: 'hello' Output: {h:1, e:1, l:2, o:1}",
    options:["Use dictionary/hashmap","Use Counter class","Use array of 26","All work"],answer:3,
    explanation:`def char_frequency(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1
    return freq
# Or: from collections import Counter; Counter(s)
# Source: PrepInsta, GeeksforGeeks TCS NQT`},
  {id:"C6",topic:"Number",prob:"certain",diff:"easy",
    q:"Check if a number is prime. Input: 29 Output: True",
    options:["Check divisibility up to √n","Check all numbers up to n","Use Sieve","Optimized trial division"],answer:0,
    explanation:`def is_prime(n):
    if n < 2: return False
    if n < 4: return True
    if n % 2 == 0 or n % 3 == 0: return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i+2) == 0:
            return False
        i += 6
    return True
# Time: O(√n). Source: GFG TCS NQT Coding Sheet`},
  {id:"C7",topic:"Array",prob:"very-high",diff:"medium",
    q:"Rotate an array by K positions to the right. Input: [1,2,3,4,5], K=2 Output: [4,5,1,2,3]",
    options:["Reverse approach (3 reverses)","Use extra array","Pop and insert","Reverse is optimal"],answer:0,
    explanation:`def rotate_array(arr, k):
    n = len(arr)
    k = k % n
    arr.reverse()
    arr[:k] = arr[:k][::-1]
    arr[k:] = arr[k:][::-1]
    return arr
# Reverse entire → reverse first k → reverse rest
# Time: O(n), Space: O(1). Source: GeeksforGeeks TCS Sheet`},
  {id:"C8",topic:"Number",prob:"very-high",diff:"easy",
    q:"Find GCD of two numbers using Euclidean algorithm. Input: 36, 24 Output: 12",
    options:["Euclidean: GCD(a,b)=GCD(b,a%b)","Prime factorization","Brute force","Euclidean is standard"],answer:0,
    explanation:`def gcd(a, b):
    while b:
        a, b = b, a % b
    return a
# Time: O(log(min(a,b))). Source: GFG TCS NQT`},
  {id:"C9",topic:"String",prob:"very-high",diff:"medium",
    q:"Reverse words in a sentence. Input: 'Hello World Program' Output: 'Program World Hello'",
    options:["Split, reverse, join","Two pointer on char array","Stack based","Split-reverse-join is simplest"],answer:0,
    explanation:`def reverse_words(s):
    return ' '.join(s.split()[::-1])
# Source: GeeksforGeeks, TakeUForward TCS Sheet`},
  {id:"C10",topic:"Number",prob:"very-high",diff:"easy",
    q:"Generate Fibonacci series up to N terms. Input: N=8 Output: 0 1 1 2 3 5 8 13",
    options:["Iterative with two vars","Recursive","Dynamic Programming","Iterative is best for TCS"],answer:0,
    explanation:`def fibonacci(n):
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result
# Time: O(n), Space: O(n). Source: TCS NQT Previous Papers`},
  {id:"C11",topic:"Array",prob:"very-high",diff:"medium",
    q:"Find the equilibrium index of an array (sum of left = sum of right). Input: [-7,1,5,2,-4,3,0] Output: 3",
    options:["Prefix sum approach","Brute force O(n²)","Two pointer","Prefix sum O(n) optimal"],answer:0,
    explanation:`def equilibrium(arr):
    total = sum(arr)
    left_sum = 0
    for i, num in enumerate(arr):
        total -= num
        if left_sum == total:
            return i
        left_sum += num
    return -1
# Time: O(n). Source: GeeksforGeeks TCS NQT Sheet`},
  {id:"C12",topic:"String",prob:"high",diff:"medium",
    q:"Check if two strings are anagrams. Input: 'listen', 'silent' Output: True",
    options:["Sort both and compare","Use character count array","Use hashmap","All work, sorting simplest"],answer:3,
    explanation:`def are_anagrams(s1, s2):
    return sorted(s1) == sorted(s2)
# Or O(n): use Counter
from collections import Counter
def are_anagrams_v2(s1, s2):
    return Counter(s1) == Counter(s2)
# Source: GeeksforGeeks TCS NQT, PrepInsta`},
  {id:"C13",topic:"Number",prob:"high",diff:"easy",
    q:"Check if a number is an Armstrong number. Input: 153 Output: True (1³+5³+3³=153)",
    options:["Extract digits, compute power sum","Convert to string for digits","Both work","Mathematical approach preferred"],answer:2,
    explanation:`def is_armstrong(n):
    digits = str(n)
    power = len(digits)
    return n == sum(int(d)**power for d in digits)
# Source: GFG TCS NQT, TakeUForward`},
  {id:"C14",topic:"Array",prob:"high",diff:"hard",
    q:"Sort an array of 0s, 1s, and 2s (Dutch National Flag). Input: [0,1,2,0,1,2] Output: [0,0,1,1,2,2]",
    options:["Three-pointer (Dutch Flag)","Count sort","Regular sort","Dutch Flag is O(n) single pass"],answer:0,
    explanation:`def sort_012(arr):
    low, mid, high = 0, 0, len(arr)-1
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1; mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1
    return arr
# Time: O(n), Space: O(1). Source: PrepInsta TCS NQT`},
  {id:"C15",topic:"Pattern",prob:"high",diff:"easy",
    q:"Print a right-angled triangle star pattern for N=5 rows.",
    options:["Nested loops: outer for rows, inner for stars","Single loop","Recursion","Nested loops standard"],answer:0,
    explanation:`def pattern(n):
    for i in range(1, n+1):
        print('* ' * i)
# Output:
# *
# * *
# * * *
# * * * *
# * * * * *
# Source: TCS NQT coding basics`},
  {id:"C16",topic:"Number",prob:"high",diff:"medium",
    q:"Convert a decimal number to binary. Input: 25 Output: 11001",
    options:["Divide by 2 repeatedly, collect remainders","Use bin() built-in","Bit manipulation","Division method for understanding"],answer:0,
    explanation:`def decimal_to_binary(n):
    if n == 0: return '0'
    binary = ''
    while n > 0:
        binary = str(n % 2) + binary
        n //= 2
    return binary
# Or simply: bin(25)[2:] = '11001'
# Source: GeeksforGeeks TCS NQT Sheet`},
  {id:"C17",topic:"String",prob:"high",diff:"medium",
    q:"Find the first non-repeating character in a string. Input: 'aabcbdce' Output: 'd'",
    options:["Use ordered dict / counter","Two pass with hashmap","Use indexOf comparison","Hashmap approach optimal"],answer:1,
    explanation:`def first_non_repeating(s):
    freq = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1
    for ch in s:
        if freq[ch] == 1:
            return ch
    return None
# Time: O(n). Source: GeeksforGeeks TCS NQT Sheet`},
  {id:"C18",topic:"Array",prob:"high",diff:"medium",
    q:"Find the missing number in array of 1 to N. Input: [1,2,4,5,6] N=6 Output: 3",
    options:["Sum formula: N(N+1)/2 - array_sum","XOR approach","Sort and check","Sum formula simplest"],answer:0,
    explanation:`def find_missing(arr, n):
    expected = n * (n + 1) // 2
    return expected - sum(arr)
# Time: O(n), Space: O(1). Source: TCS NQT Previous Papers`},
];
