/* eslint-disable no-console */
import { useEffect, useState } from 'react';

const useSomeHook = () => {
  const [someState, setSomeState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSomeState(someState + 1);
    }, 1000);
  }, []);
};

export default function HookSimpleState() {
  useSomeHook();

  console.log('Render!');

  return (
    <div>
      Check the console to observe the re-renders taking place.
    </div>
  );
}
