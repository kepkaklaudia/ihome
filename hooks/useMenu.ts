import { gql } from "@/__generated__";
import { NavigationItemFragment } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";

interface NavigationItem {
  id: string;
  name: string | null;
  level: number;
  path: string[];
  namePath: string[];
  key: string;
  children: NavigationItem[];
}

type RawNavigationItems =
  | Array<
      | (NavigationItemFragment & {
          children?: RawNavigationItems;
        })
      | null
      | undefined
    >
  | null
  | undefined;

const GET_MENU = gql(/* GraphQL */ `
  query GetMenu {
    menu: categories {
      items {
        ...NavigationItem
        children {
          # level 1
          ...NavigationItem
          children {
            # level 2
            ...NavigationItem
            children {
              #level 3
              ...NavigationItem
            }
          }
        }
      }
    }
  }
`);

const format = (result: RawNavigationItems): NavigationItem[] => {
  if (!result) {
    return [];
  }

  return result.flatMap((child) => {
    if (!child || !child.level) return [];

    const children = format(child.children);

    if (child.level === 1) {
      /**
       * Ignore root category
       */
      return children;
    }

    if (
      !child.name ||
      !child.include_in_menu ||
      !child.url_path ||
      !child.url_key
    )
      return [];

    const path = child.url_path.split("\\/");

    const breadcrumbs =
      child.breadcrumbs?.flatMap((item) => item?.category_name ?? []) ?? [];

    const namePath =
      breadcrumbs.length === child.breadcrumbs?.length
        ? [...breadcrumbs, child.name]
        : [child.name];

    return {
      id: child.uid,
      name: child.name,
      level: child.level - 1,
      path,
      namePath,
      key: child.url_key,
      children
    };
  });
};

export const useMenu = () => {
  const { data, loading } = useQuery(GET_MENU);

  const items = data?.menu?.items;

  const menu = format(items);

  const nav = {
    id: "root",
    name: null,
    level: 0,
    path: [],
    namePath: [],
    key: "root",
    children: format(items)
  };

  const getChildrenByPath = (path: string[]) => {
    let found: NavigationItem[] | null = menu;

    for (const pathKey of path) {
      found = found?.find(({ key }) => key === pathKey)?.children ?? null;
    }

    return found;
  };

  const getNavItem = (path: string[]) => {
    let found: NavigationItem | null = nav;

    for (const pathKey of path) {
      found = found?.children.find(({ key }) => key === pathKey) ?? null;

      if (!found) break;
    }

    return found;
  };

  const validatePath = (path: string[]) => {
    const available: string[] = [];

    for (const pathKey of path) {
      const found = getNavItem([...available, pathKey]);

      if (!found || found.children.length === 0) break;

      available.push(pathKey);
    }

    return available;
  };

  return { menu, loading, getChildrenByPath, getNavItem, validatePath };
};
