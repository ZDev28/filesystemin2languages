import sys
from time import sleep

def slow(text):
  for char in text:
    sys.stdout.write(char)
    sys.stdout.flush()
    sleep(0.1)

filename = str(input("What is the name of the file?\n> "))
filetype = str(input("What is the type of the file?\n> "))
filedescription = str(input("What do you need to write in the file?\n> "))

with open(f'{filename}.{filetype}', 'w') as thefile:
  thefile.write(f'{filedescription}')
