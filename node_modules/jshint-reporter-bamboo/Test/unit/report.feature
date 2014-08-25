Feature: Create bamboo reporter for JSHint
  As a developer
  I can lint my code and generate a report compatible with the Atlassian Bamboo Mocha Test Parser
  So that my build server can track the lint quality of my code

  Scenario: Lint code with no errors

    Given I have a no-lint-errors Javascript file
    When I lint the file
    Then a report is produced with passes

  Scenario: Lint code with errors

    Given I have a lint-errors Javascript file
    When I lint the file
    Then a report is produced with failures