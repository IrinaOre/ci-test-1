import getHealthStatus from "../src/health.js";

test('health > 50 should return "healthy"', () => {
  const result = { name: "Маг", health: 75 };
  expect(getHealthStatus(result)).toBe("healthy");
});

test('health <= 50 and health > 15 should return "wounded"', () => {
  const result = { name: "Маг", health: 35 };
  expect(getHealthStatus(result)).toBe("wounded");
});

test('health < 15 should return "critical"', () => {
  const result = { name: "Маг", health: 10 };
  expect(getHealthStatus(result)).toBe("critical");
});
