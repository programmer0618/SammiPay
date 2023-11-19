const FooterLinks = ({ link }) => {
  return (
    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
      <h4
        className={`font-montserrat font-medium text-[18px] leading-[27px] text-white mb-3`}
      >
        {link.title}
      </h4>
      <ul className="list-none">
        {link.links.map((item, idx) => (
          <li
            className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer ${
              idx !== link.links.length ? "mb-4" : "mb-0"
            }`}
            key={item.name}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
