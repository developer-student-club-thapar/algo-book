n = input("enter your value")
temp =n
sum=0
while(temp != 0):
    d= temp % 10
    sum= sum+ d*d*d
    temp=temp/10
if(sum==num):
    print("Number is Armstrong")
else:
    print("number is not Armstrong")
