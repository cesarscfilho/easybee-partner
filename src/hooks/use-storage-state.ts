import * as SecureStore from "expo-secure-store";
import * as React from "react";

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  const reducer = (
    state: [boolean, T | null],
    action: T | null,
  ): [boolean, T | null] => [false, action];

  const [state, setState] = React.useReducer(reducer, initialValue);

  return [state, setState];
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export function useStorageState(key: string): UseStateHook<string> {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [state, setState] = useAsyncState<string>();

  React.useEffect(() => {
    SecureStore.getItemAsync(key).then((value) => {
      setState(value);
      setLoading(false); // Set loading to false when the value is retrieved
    });
  }, [key]);

  // Set
  const setValue = React.useCallback(
    (value: string | null) => {
      setLoading(true); // Set loading to true when setting a new value
      setStorageItemAsync(key, value).then(() => {
        setState(value);
        setLoading(false); // Set loading to false after setting the value
      });
    },
    [key],
  );

  return [[loading, state[1]], setValue];
}
