interface INavBar {
  id: number;
  title: string;
  route: string;
}

export const navbarItems: INavBar[] = [
  { id: 0, title: "About Us", route: "#about" },
  { id: 1, title: "How it works", route: "#howItWorks" },
  { id: 2, title: "FAQ", route: "#faq" },
  { id: 3, title: "Contact Us", route: "#contact" },
];
