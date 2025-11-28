import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import SearchResults from "./components/SearchResult";
import { Axios } from "@/lib/axios/Axios";
import { apiRoutes } from "@/services/api-routes/apiRoutes";
import IconBadge from "../../../small-screens/mobile-widget/components/common/IconBadge";

const DEBOUNCE_INTERVAL = 400;

const Search = () => {
  const { t } = useTranslation();
  const [showSearch, setShowSearch] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState({ value: "", deferred: "" });

  const panelRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleShowSearch = () => setShowSearch((prev) => !prev);

  const handleInputChange = useCallback((val: string) => {
    setSearch((prev) => ({ ...prev, value: val }));

    if (!val.trim()) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
      setSearch({ value: "", deferred: "" });
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearch((prev) => ({ ...prev, deferred: val }));
      debounceRef.current = null;
    }, DEBOUNCE_INTERVAL);
  }, []);

  const clearSearch = useCallback(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setSearch({ value: "", deferred: "" });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowSearch(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, []);

  const { data: products, isFetching } = useQuery({
    queryKey: [apiRoutes.search, search.deferred],
    enabled: !!search.deferred,
    queryFn: async ({ queryKey, signal }) => {
      const [, term] = queryKey as [string, string];
      const params: any = { name: term };
      const response = await Axios.get(apiRoutes.search, {
        params,
        signal,
      });
      return response.data.data;
    },
    staleTime: 1000 * 30,
  });

  const hasSearchValue = !!search.value.trim();
  const hasDeferredValue = !!search.deferred.trim();

  const searchState = useMemo(() => {
    if (!hasDeferredValue) return "idle";
    if (isFetching) return "loading";
    if (products?.length === 0) return "empty";
    if (products?.length > 0) return "success";
    return "idle";
  }, [hasDeferredValue, isFetching, products]);

  const showResults = isFocused && hasDeferredValue;
  const onClose = () => setShowSearch(false);

  return (
    <>
      {/* زرار السيرش في الناف بار */}
      <button
        className="hidden lg:flex lg:items-center lg:justify-center w-8 h-8 rounded-full  text-white bg-primaryGreen focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryGreen"
        onClick={toggleShowSearch}
        aria-label={t("Search.Search")}
      >
        <IoIosSearch size={20} />
      </button>
      <div className="lg:hidden">
        <IconBadge
          Icon={IoIosSearch}
          title={`Search.Search`}
          onClick={toggleShowSearch}
        />
      </div>
      {/* Overlay / Dialog */}
      {showSearch && (
        <div
          className="
            fixed inset-0 z-[40000]
            flex items-center justify-center
            bg-black/50 backdrop-blur-sm
            px-3 md:px-4
          "
          role="dialog"
          aria-modal="true"
          aria-label={t("Search.Search")}
        >
          <div className="w-full max-w-xl md:max-w-2xl">
            <div
              ref={panelRef}
              className="
                relative mx-auto
                rounded-2xl
                bg-warmCream/95
                border border-softGray
                shadow-2xl
                px-4 py-3 md:px-5 md:py-4
                min-w-0
                animate-[fadeIn_0.18s_ease-out]
              "
            >
              {/* Header row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex flex-col gap-1">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-primaryDarkGreen">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primaryGreen/10 text-primaryGreen">
                      <IoIosSearch size={14} />
                    </span>
                    {t("Search.Search")}
                  </span>
                  <p className="text-xs text-slate-500">{t("Search.desc")}</p>
                </div>

                <button
                  onClick={onClose}
                  className="
                    inline-flex items-center justify-center
                    h-8 w-8 rounded-full
                    bg-softGray hover:bg-softYellowLight
                    text-slate-700 hover:text-primaryDarkGreen
                    transition-colors
                  "
                  aria-label={t("Global.close")}
                >
                  <RxCross2 size={16} />
                </button>
              </div>

              {/* Input */}
              <div
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-white
                  border border-softGray
                  px-3 py-2
                  focus-within:border-primaryGreen
                  focus-within:ring-1 focus-within:ring-primaryGreen/60
                  transition-colors
                "
              >
                <IoIosSearch
                  size={18}
                  className="text-slate-400 shrink-0"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  aria-label={t("Search.Search")}
                  className="
                    flex-1 bg-transparent border-none outline-none
                    caret-primaryGreen
                    text-sm
                  "
                  placeholder={t("Search.Search")}
                  value={search.value}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  onChange={(e) => handleInputChange(e.target.value)}
                  aria-busy={isFetching}
                />

                {hasSearchValue && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="
                      text-xs text-slate-400 hover:text-primaryDarkGreen
                      px-1
                    "
                  >
                    {t("Global.clear")}
                  </button>
                )}
              </div>

              {/* Results box */}
              {showResults && (
                <div
                  className="
                    mt-3
                    w-full
                    rounded-2xl border border-softGray
                    bg-white
                    shadow-lg
                    max-h-80
                    overflow-auto
                  "
                >
                  <SearchResults
                    products={products}
                    isLoading={searchState === "loading"}
                    hasSearchValue={hasSearchValue}
                    onClear={clearSearch}
                    onClose={onClose}
                  />
                </div>
              )}

              {/* Hint row تحت لو مفيش results لسه */}
              {!showResults && !hasDeferredValue && (
                <p className="mt-3 text-xs text-slate-400">{t("Search.end")}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
