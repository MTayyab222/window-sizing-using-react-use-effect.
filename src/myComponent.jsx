import { useEffect, useState } from "react";

function Component() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added!");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed!");
    };
  }, []);

  useEffect(() => {
    document.title = `size:${width} ${height}`;
  }, [width, height]);
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>window width:{width}px</p>
      <p>window height:{height}px</p>
    </>
  );
}
export default Component;
