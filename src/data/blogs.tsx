export const blogs = [
    {
        "id" : "0",
        "blogHeadline" : "মৌলিক সংখ্যা",
        "author" : "Mr. X",
        "blogDescription" : "একটা সংখ্যা n কে আমরা মৌলিক সংখ্যা বলে ডাকতে পারি যদি সংখ্যাটাকে শুধু 1 আর n দিয়ে নি:শেষে ভাগ করা যায়।যেমন ধরো 5 একটা মৌলিক সংখ্যা কারণ আমরা 5 কে শুধু 1 আর 5 দিয়ে ভাগ করতে পারি কোন রকম ভাগশেষ না রেখে। আর কোন সংখ্যা দিয়ে 5 কে ভাগ করা সম্ভব নয়। কিন্তু 6 কি একটা মৌলিক সংখ্যা? উমম... নাহ!‍ 6 কে দেখো আমরা ভাগ করতে পারি 1,2,3 আর 6 দিয়ে। তো সংজ্ঞা অনুযায়ী 6 মৌলিক সংখ্যা নয়। 1 কে আমরা মৌলিক সংখ্যা হিসেবে বিবেচনা করি না।যে কোন সংখ্যাকে কিছু মৌলিক সংখ্যার গুণফল হিসেবে ইউনিকভাবে প্রকাশ করা যায়। যেমন ধরো, 8=23। কিংবা, 120=23×3×5। আবার, 36=22×32। তুমি যতই চেষ্টা করো না কেন 8,120 বা 36 কে অন্য কোন মৌলিক সংখ্যার সেটের গুণফল হিসেবে প্রকাশ করতে পারবে না। এভাবে চিন্তা করতে গেলে একেকটা সংখ্যাকে যদি আমরা একেকটা দেয়াল হিসেবে ভাবি, মৌলিক সংখ্যাগুলো হচ্ছে তাদের একেকটা ইট। বাকি সব সংখ্যাগুলো মৌলিক সংখ্যার উপর ভিত্তি করে বানানো। মৌলিক সংখ্যাকে ইংরেজিতে প্রাইম নাম্বার (prime number) বলে। আমরা এখন থেকে মৌলিক সংখ্যাকে প্রাইম নাম্বার ডাকবো।"
    },
    {
        "id" : "1",
        "blogHeadline" : "Euler theorem and Fermat's Little theorem",
        "author" : "Jagonmoy",
        "blogDescription" : "If a and n are co-prime to each other then a^phi(n) ≡ 1 (mod n). Proof : Let us take a set , A = b1,b2,...,bphi(n)(mod n) .... eq(1) here all the intergers in the set A are coprime to n ,they are less than n,they are distinct and there are total phi(n) elements . now let us multiply the eq(1) by a number 'a' to both sides which itself is co-prime to n and name the new set B = ab1,ab2,...,abphi(n) (mod n) ... eq(2) . Now we need to proof that A and B are same Set .so for this we need to take 3 steps .1st step :We are just multiplying the elements of set A by 'a' so the number of elements in A and B are same . there are phi(n) number of elements .2nd step :very element in A that means bi ( 1 <= i <= phi(n) ) is multiplied with 'a' and both the numbers are co-prime with n so their product will be also co-prime , here 1 <= i <= phi(n) 3rd Step : Every elements of set B is distinct . because if it is not then for any i ,j abi ≡ abj (mod n) here 1 <= i,j <= phi(n) => bi ≡ bj (mod n) but that is not possible because all the elements in A are distinct so all the elements in B are distinct also .Now both A and B set have equal number of elements , all the elements of both the sets are co-prime to n , they are disticnt and less than n so both the sets are actually same so now , ab1 x ab2 x ab3 x ... x abphi(n) ≡ b1 x b2 x b3 x ... x bphi(n) (mod n) => a^phi(n) x b1 x b2 x b3 x ...x bphi(n) ≡ b1 x b2 x b3 x...x bphi(n) (mod n) => a^phi(n) ≡ 1 ( mod n) so euler Theoram is proved . Fermat's little theoram : if a and p are coprime and p is a prime, then a^(p−1) ≡ 1 (mod p) it is nothing but a simple application of euler theoram ,from Euler theoram we know already a^phi(n) ≡ 1 ( mod n ) now , if n is a prime then the value phi(p) will be p-1 ,so , euler theoram for any prime number p that is co-prime to a will be a^p-1 ≡ 1 ( mod p )"
    },
    {
        "id" : "2",
        "blogHeadline" : "Headline 3rd Blog",
        "author" : "Mr. y",
        "blogDescription" : "The is the description of 3rd blog."
    }
]