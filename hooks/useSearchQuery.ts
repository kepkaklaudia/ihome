import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { useParams, useSearchParams } from "next/navigation";

export const useSearchQuery = () => {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const getAll = () => {
    const params: Record<string, string | string[] | undefined> = {};

    for (const key of search.keys()) {
      params[key] = search.getAll(key);
    }

    return params;
  };

  const update = (key: string, value: string | string[] | null | undefined) => {
    const query = getAll();

    const remove = !value || value.length === 0;

    if (remove) {
      delete query[key];
    }

    if (!remove) {
      query[key] = value;
    }

    if (key !== "p") {
      query["p"] = "1";
    }

    router.replace(
      { pathname, params: params as any, query },
      { scroll: true }
    );
  };

  return { search, getAll, update };
};
