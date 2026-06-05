/**
 * lib/api.js — Local stub for reward API calls.
 * This provides graceful fallback behaviour when no backend is connected.
 * All functions return Promises so they are drop-in compatible with real API calls.
 */

/**
 * Fetch reward summary for a user.
 * Falls back to returning null so the component uses local estimate.
 */
export async function getUserRewards(userId) {
  // No backend connected — return null so the component falls back to local data
  return null;
}

/**
 * Redeem a reward for a user.
 * Falls back to a local coupon code generation.
 */
export async function redeemReward(userId, payload) {
  // No backend connected — generate a local promo code and return a mock response
  const code = `REWARD-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  return {
    promo_code: { code },
    balance: null,
    transactions: []
  };
}
