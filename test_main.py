import requests
import json
import jsonpath
import pytest

url="http://magento2demo.firebearstudio.com/rest/all/V1/applepay/auth"
def test_main():
    response=requests.get(url)
    response = json.loads(response.text)
    pages = jsonpath.jsonpath(response,'client_token')
    assert pages[0]==''
    pages_symbol = jsonpath.jsonpath(response,'display_name')
    assert pages_symbol[0]=='Store'
    pages_symbol = jsonpath.jsonpath(response,'action_success')
    assert pages_symbol[0]=='http://magento2demo.firebearstudio.com/checkout/onepage/success/'
    pages_symbol = jsonpath.jsonpath(response,'logged_in')
    assert pages_symbol[0]==0
    pages_symbol = jsonpath.jsonpath(response,'store_code')
    assert pages_symbol[0]=='admin'