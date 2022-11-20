
     API Testing

You can test the Magento Web API from the perspective of a client application using the Web API testing framework. Both REST and SOAP can be utilised with the tests. The PHPUnit configuration specifies the REST or SOAP adaptor that executes the tests.
     
Implementation Details:

The integration testing framework is a prerequisite for the Web API functional testing framework.

Custom Annotations for Data Fixtures:

The specific annotation @magentoApiDataFixture is provided for declaring fixtures solely in the Web API functional tests. This annotation differs from @magentoDataFixture in that HTTP requests made within the test body will result in the fixture being committed and available. The usage guidelines for @magentoApiDataFixture and @magentoDataFixture are identical.

After test execution, data that was added to the DB using @magentoApiDataFixture won't be automatically erased. Utilizing @magentoDataFixture clears the data.
Fixtures shouldn't be defined in dev/tests/api-functional. Instead, they must come from development, testing, and integration. The majority of required fixtures are defined by the integration framework, and they ought to be used again during functional testing of Web APIs. Add new fixtures under dev/tests/integration if the existing set is insufficient. Both testing frameworks will then have access to the fixtures.

Clear all entities produced in fixture files or during test execution from the database to maintain a clean test environment. Either directly in tearDown or through a similar rollback for the fixture file, this can be accomplished.

How to Create a New Test:

The generic test case should be the ancestor for all Web API functional tests. Magento\TestFramework\TestCase\WebapiAbstract. The _webApiCall() method, which is what should be used to make Web API calls from tests, is defined. The adapter that will be utilised to make the remote call is unknown to clients of _webApiCall().

          namespace Magento\Webapi\Routing;
          class CoreRoutingTest extends \Magento\TestFramework\TestCase\WebapiAbstract
          {
              public function testBasicRoutingExplicitPath()
              {
                  $itemId = 1;
                  $serviceInfo = [
                      'rest' => [
                          'resourcePath' => '/V1/testmodule1/' . $itemId,
                          'httpMethod' => \Magento\Framework\Webapi\Rest\Request::HTTP_METHOD_GET,
                      ],
                      'soap' => [
                          'service' => 'testModule1AllSoapAndRestV1',
                          'operation' => 'testModule1AllSoapAndRestV1Item',
                      ],
                  ];
                  $requestData = ['itemId' => $itemId];
                  $item = $this->_webApiCall($serviceInfo, $requestData);
                  $this->assertEquals('testProduct1', $item['name'], "Item was retrieved unsuccessfully");
              }
          }

Depending on the adapter that the testing framework is presently using, the aforementioned test should be able to test both SOAP and REST. The Web API client adapter interface specifies the format of $serviceInfo:

          namespace Magento\TestFramework\TestCase\Webapi;
          interface AdapterInterface
          {
              /**
               * Perform call to the specified service method.
               *
               * @param array $serviceInfo <pre>
               * array(
               *     'rest' => array(
               *         'resourcePath' => $resourcePath, // e.g. /products/:id
               *         'httpMethod' => $httpMethod,     // e.g. GET
               *         'token' => '21hasbtlaqy8t3mj73kjh71cxxkqj4aq'    // optional : for token based Authentication. Will
               *                                                             override default OAuth based authentication provided
               *                                                             by test framework
               *     ),
               *     'soap' => array(
               *         'service' => $soapService,    // soap service name with Version suffix e.g. catalogProductV1, customerV2
               *         'operation' => $operation     // soap operation name e.g. catalogProductCreate
               *     )
               * );
               * </pre>
               * @param array $arguments
               * @param string|null $storeCode if store code not provided, default store code will be used
               * @param \Magento\Integration\Model\Integration|null $integration
               * @return array|string|int|float|bool
               */
              public function call($serviceInfo, $arguments = [], $storeCode = null, $integration = null);
          }


How to Run the Tests:
Prerequisites:
1: Install the PHP Soap extension.

Copy php_soap.dll or php_soap.so to your PHP extensions directory. Edit your php.ini file and enable the PHP Soap extension. Usually this means deleting the leading semi-colon in front of the extension. Then restart Apache.

extension=php_soap.dll

2: Before running the functional tests you need to clear your cache. Now you are ready to run the tests.

Running the Tests:
1: Copy dev/tests/api-functional/phpunit_rest.xml.dist and phpunit_soap.xml.dist to dev/tests/api-functional/phpunit_rest.xml and phpunit_soap.xml.

2: Define the Magento instance URL as a value of TESTS_BASE_URL, Test Webservice User as value of TESTS_WEBSERVICE_USER and Test Webservice API key as value of TESTS_WEBSERVICE_APIKEY in copied file i.e. phpunit_rest.xml or phpunit_soap.xml.

3: Copy dev/tests/api-functional/config/install-config-mysql.php.dist to dev/tests/api-functional/config/install-config-mysql.php.

4: Configure your DB connection and install settings in dev/tests/api-functional/config/install-config-mysql.php. Specify the Magento database. The base URL to access this Magento instance must be the same specified in the phpunit_rest.xml or phpunit_soap.xml file.

5: Run phpunit using the dev/tests/api-functional/phpunit_rest.xml or dev/tests/api-functional/phpunit_soap.xml configuration file::

6: vendor/bin/phpunit --configuration <full xml file path>
or
vendor/bin/phpunit -c <full xml file path>


