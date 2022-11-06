import requests
import json
import jsonpath

url = "http://magento2demo.firebearstudio.com/rest/all/V1/directory/currency"

response = requests.get(url)
print(response.content)

json_response = json.loads(response.text)
#print(json_response)

pages = jsonpath.jsonpath(json_response,'base_currency_code')
print(pages[0])



