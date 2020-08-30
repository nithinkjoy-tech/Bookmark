import requests
from bs4 import BeautifulSoup
import sys

link = sys.argv[1]
response = requests.get(link)
soup = BeautifulSoup(response.text, "html.parser")
print(soup.title.string)
