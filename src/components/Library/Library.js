import photo from "../../assets/portrait4.png";
export const Library = {
  routeName: [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
  ],
  contact: {
    name: "Contact Us",
    path: "/contact",
  },
  photo: [
    { 
      imageSrc: photo,
      alt: "portrait",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat orci enim, nec dictum felis aliquam a. Nullam ullamcorper magna eu nisi tincidunt bibendum. Mauris in rutrum magna, volutpat vestibulum massa. Morbi augue nisi, ultricies sit amet erat a, efficitur molestie elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sem mauris, faucibus sed risus a, viverra viverra nisl. Ut sed scelerisque urna. Aenean ut neque nulla. Praesent imperdiet urna nec orci ultricies maximus ut sit amet tellus. Praesent vel hendrerit enim. Phasellus nulla urna, sagittis at blandit at, dignissim id elit. Suspendisse sed risus mauris."
     },
    { imageSrc: photo, alt: "portrait" },
    { imageSrc: photo, alt: "portrait" },
    { imageSrc: photo, alt: "portrait" },
  ],
};
