import useBoolean from "@/hooks/useBoolean";
import { renderHook, act, cleanup } from "@testing-library/react-hooks";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

describe("useBoolean", () => {
	beforeEach(() => {
		cleanup();
	});

	afterEach(() => {
		cleanup();
	});

	it("should initialize with the default value", () => {
		const { result } = renderHook(() => useBoolean(true));
		expect(result.current.value).toBe(true);
	});

	it("should set the value using setValue", () => {
		const { result } = renderHook(() => useBoolean(false));
		act(() => {
			result.current.setValue(true);
		});
		expect(result.current.value).toBe(true);
	});

	it("should set the value to true using setTrue", () => {
		const { result } = renderHook(() => useBoolean(false));
		act(() => {
			result.current.setTrue();
		});
		expect(result.current.value).toBe(true);
	});

	it("should set the value to false using setFalse", () => {
		const { result } = renderHook(() => useBoolean(true));
		act(() => {
			result.current.setFalse();
		});
		expect(result.current.value).toBe(false);
	});

	it("should toggle the value using toggle", () => {
		const { result } = renderHook(() => useBoolean(true));
		act(() => {
			result.current.toggle();
		});
		expect(result.current.value).toBe(false);
		act(() => {
			result.current.toggle();
		});
		expect(result.current.value).toBe(true);
	});
});
