import { describe, it, expect } from "vitest";
import { levelFromXp, xpForNextLevel, computeStreak, earnedBadges, streakAtRisk } from "./gamification";

describe("levelFromXp", () => {
  it("returns 1 for no XP", () => {
    expect(levelFromXp(0)).toBe(1);
    expect(levelFromXp(-5)).toBe(1);
  });

  it("increases with cumulative XP", () => {
    expect(levelFromXp(100)).toBeGreaterThanOrEqual(1);
    expect(levelFromXp(10_000)).toBeGreaterThan(levelFromXp(100));
  });

  it("is monotonic", () => {
    expect(levelFromXp(500)).toBeGreaterThanOrEqual(levelFromXp(400));
  });
});

describe("xpForNextLevel", () => {
  it("always returns a positive threshold", () => {
    expect(xpForNextLevel(1)).toBeGreaterThan(0);
    expect(xpForNextLevel(10)).toBeGreaterThan(0);
  });
});

describe("computeStreak", () => {
  const today = "2026-09-02";

  it("starts a streak on first activity", () => {
    const r = computeStreak({ lastActivity: null, today, currentStreak: 0, longestStreak: 0 });
    expect(r.current).toBe(1);
    expect(r.longest).toBe(1);
  });

  it("adds to streak on consecutive day", () => {
    const r = computeStreak({ lastActivity: "2026-09-01", today, currentStreak: 4, longestStreak: 6 });
    expect(r.current).toBe(5);
    expect(r.longest).toBe(6);
  });

  it("resets to 1 after a gap", () => {
    const r = computeStreak({ lastActivity: "2026-08-28", today, currentStreak: 4, longestStreak: 9 });
    expect(r.current).toBe(1);
    expect(r.longest).toBe(9);
  });

  it("keeps streak when active again the same day", () => {
    const r = computeStreak({ lastActivity: today, today, currentStreak: 3, longestStreak: 5 });
    expect(r.current).toBe(3);
    expect(r.longest).toBe(5);
  });
});

describe("streakAtRisk", () => {
  const today = "2026-09-02";
  it("is at risk when active exactly yesterday", () => {
    expect(streakAtRisk("2026-09-01", today)).toBe(true);
  });
  it("is not at risk when active today", () => {
    expect(streakAtRisk(today, today)).toBe(false);
  });
  it("is not at risk with no activity", () => {
    expect(streakAtRisk(null, today)).toBe(false);
  });
});

describe("earnedBadges", () => {
  it("unlocks first_lesson after one lesson", () => {
    const badges = earnedBadges({ lessonsDone: 1, currentStreak: 0, totalXp: 10, level: 1 });
    expect(badges).toContain("first_lesson");
  });
  it("keeps already owned badges", () => {
    const badges = earnedBadges(
      { lessonsDone: 0, currentStreak: 0, totalXp: 0, level: 1 },
      ["streak_3"]
    );
    expect(badges).toContain("streak_3");
  });
});