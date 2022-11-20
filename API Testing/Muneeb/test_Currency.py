import requests
import json
import jsonpath

url = "http://magento2demo.firebearstudio.com/rest/all/V1/directory/currency"

def test_Currency():
    response = requests.get(url)
    json_response = json.loads(response.text)
    pages = jsonpath.jsonpath(json_response,'base_currency_code')
    assert pages[0]=='USD'
    pages_symbol = jsonpath.jsonpath(json_response,'base_currency_symbol')
    assert pages_symbol[0]=='$'
    pages_symbol = jsonpath.jsonpath(json_response,'default_display_currency_code')
    assert pages_symbol[0]=='USD'
    pages_symbol = jsonpath.jsonpath(json_response,'default_display_currency_symbol')
    assert pages_symbol[0]=='$'
    
#The command for running test is pyhton -m pytest TestCases
