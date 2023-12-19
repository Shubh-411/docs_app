import { useRef } from "react";
import Card from "./Card";
const ref = useRef(null);
function Foreground() {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, qui?",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, qui?",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "sky",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, qui?",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, qui?",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "slate",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, qui?",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "green",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed flex-shrink-0 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} key={{ index }} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
