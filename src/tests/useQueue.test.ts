import useQueue from "@/hooks/useQueue";
import { renderHook, act, cleanup, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

describe("useQueue", () => {
  afterEach(() => {
    cleanup();
  });

  it("should initialize without values", () => {
    const { result } = renderHook(() => useQueue());
    const [queue, actions] = result.current;
    expect(queue).toStrictEqual([]);
    expect(actions.size).toBe(0);
  });

  it("should initialize with values", () => {
    const { result } = renderHook(() => useQueue([1, 2, 3]));
    const [queue, actions] = result.current;
    expect(queue).toStrictEqual([1, 2, 3]);
    expect(actions.size).toBe(3);
  });

  it("should add an element to the queue", () => {
    const { result } = renderHook(() => useQueue([1, 2, 3]));
    act(() => {
      result.current[1].add(4);
    });
    const [queue, actions] = result.current;
    expect(queue).toStrictEqual([1, 2, 3, 4]);
    expect(actions.size).toBe(4);
    expect(actions.first).toBe(1);
    expect(actions.last).toBe(4);
  });

  it("should remove an element from the queue", () => {
    const { result } = renderHook(() => useQueue([1, 2, 3]));
    act(() => {
      result.current[1].remove();
    });
    const [queue, actions] = result.current;
    expect(queue).toStrictEqual([2, 3]);
    expect(actions.size).toBe(2);
    expect(actions.first).toBe(2);
    expect(actions.last).toBe(3);
  });

  it("should clear the queue", () => {
    const { result } = renderHook(() => useQueue([1, 2, 3]));
    act(() => {
      result.current[1].clear();
    });
    const [queue, actions] = result.current;
    expect(queue).toStrictEqual([]);
    expect(actions.size).toBe(0);
  });
});
