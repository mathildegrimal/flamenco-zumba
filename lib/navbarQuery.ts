export const navbarQuery = `
  allPages(orderBy: order_ASC) {
    id
    slug
    titre
  }
  menu {
    marion {
      alt
      url
      title
    }
  }
`;
