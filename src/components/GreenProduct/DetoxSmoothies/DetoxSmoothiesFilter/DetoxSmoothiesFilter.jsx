import { useState } from "react";
import style from "./DetoxSmoothiesFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  changeSearch,
  selectFilter,
  selectSearch,
} from "../../../../features/products/productsSlice";
import { filters } from "./DetoxSmoothiesFilterList";

function DetoxSmoothiesFilter() {
  const filter = useSelector(selectFilter);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const [active, setActive] = useState({});

  const handleFilterChange = (item) => {
    setActive(item);
    dispatch(changeFilter(item.name));
    dispatch(changeSearch(""));
  };

  const handleSearchChange = (value) => {
    dispatch(changeSearch(value));
  };

  return (
    <div className={style.filter}>
      <div className={style.buttons}>
        <p>
          FILTER  
          <button
            onClick={() => {
              dispatch(changeFilter(""));
              dispatch(changeSearch(""));
              setActive({});
            }}
          >
            {filter ? (
              <svg
                x="0px"
                y="0px"
                width="14"
                height="14"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            ) : (
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
              >
                <path d="M1 1H13" stroke="#212311" strokeLinecap="round" />
                <path d="M1 5H13" stroke="#212311" strokeLinecap="round" />
                <path d="M1 9H13" stroke="#212311" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </p>
        {filters.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => handleFilterChange(item)}
              style={{
                borderBottom:
                  item.id == active.id ? "2px solid rgb(91, 93, 75)" : null,
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className={style.search}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M13 13L9.53548 9.53548M9.53548 9.53548C10.4732 8.59781 10.9999 7.32604 10.9999 5.99997C10.9999 4.6739 10.4732 3.40213 9.53548 2.46446C8.59781 1.52678 7.32604 1 5.99997 1C4.6739 1 3.40213 1.52678 2.46446 2.46446C1.52678 3.40213 1 4.6739 1 5.99997C1 7.32604 1.52678 8.59781 2.46446 9.53548C3.40213 10.4732 4.6739 10.9999 5.99997 10.9999C7.32604 10.9999 8.59781 10.4732 9.53548 9.53548Z"
            stroke="black"
            strokeOpacity="0.64"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DetoxSmoothiesFilter;
