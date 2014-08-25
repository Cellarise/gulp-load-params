Feature: gulp-istanbul

  Scenario: istanbul instrument a file

    Given a Javascript file
    When istanbul is executed
    Then the file is instrumented

  Scenario: istanbul instrument a stream

    Given a Javascript file stream
    When istanbul is executed
    Then a streams not supported error is thrown

  Scenario: istanbul.summarizeCoverage

    Given files have been instrumented and tests run
    When istanbul.summarizeCoverage is executed
    Then statistics about the test run are returned

  Scenario: istanbul.registerReport

    Given files have been instrumented and tests run
    When istanbul.registerReport is executed
    Then a custom report is registered

  Scenario: istanbul.writeReports to stdout

    Given files have been instrumented
    When istanbul.writeReports is executed
    Then coverage report is output to stdout

  Scenario: istanbul.writeReports to file

    Given files have been instrumented
    When istanbul.writeReports is executed
    Then coverage report is output to file

  Scenario: istanbul.writeReports with directory

    Given files have been instrumented
    When istanbul.writeReports is executed with directory specified in the legacy way
    Then coverage report is output to specified directory

    Given files have been instrumented
    When istanbul.writeReports is executed with directory specified
    Then coverage report is output to specified directory

  Scenario: istanbul.writeReports with specified reporter

    Given files have been instrumented
    When istanbul.writeReports is executed with valid reporter specified
    Then coverage report is output using specified reporter

    Given files have been instrumented
    When istanbul.writeReports is executed with an invalid reporter specified
    Then an invalid reporter error is thrown
