const LOCALSTORAGE_PREFIX = 'ab-test-';

/**
 * Get a mapping of all stored tests with their assigned variants
 *  @return {Object<String, String>} A mapping of testName with their value
 */
export function getAssignedVariants() {
  return Object.entries(localStorage).reduce((result, [key, value]) => {
    if (key.startsWith(LOCALSTORAGE_PREFIX)) {
      // Remove the localstorage prefix from the testname
      const testName = key.replace(LOCALSTORAGE_PREFIX, '');

      return {
        ...result,
        [testName]: value,
      };
    }

    return result;
  }, {});
}

/**
 * Store the assigned variant for given testname in localStorage
 * @param {String} testName - The name of the test to store a variant for
 * @param {String} assignedVariant - The value of the assigned variant
 */
export function storeAssignedVariant(testName, assignedVariant) {
  return localStorage.setItem(
    `${LOCALSTORAGE_PREFIX}${testName}`,
    assignedVariant,
  );
}
