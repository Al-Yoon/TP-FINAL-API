import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          {link.link ? (
            link.link.startsWith('/') ? (
              <a
                className="text-gray-400 hover:text-[#38bdf8] duration-300 text-sm cursor-pointer leading-6"
                href={link.link}
                smooth="true"
              >
                {link.name}
              </a>
            ) : (
              <a
                className="text-gray-400 hover:text-[#38bdf8] duration-300 text-sm cursor-pointer leading-6"
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            )
          ) : (
            link.name
          )}
        </li>
      ))}
    </ul>
  );
};

export default Item;