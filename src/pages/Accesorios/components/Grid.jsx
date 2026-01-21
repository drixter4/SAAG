import { useEffect, useMemo, useState } from "react";

export default function Grid() {
  const [accessories, setAccessories] = useState([]);
  const [brandFilter, setBrandFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;

    fetch(`${API_URL}/accesories`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const withImage = data.data.filter(
            (item) => item.image && item.image !== ""
          );
          setAccessories(withImage);
        }
      })
      .catch((err) => console.error("Error loading accessories:", err));
  }, []);

  const STORAGE_URL = process.env.REACT_APP_API_URL.replace(
    "/api",
    "/storage"
  );

  // 🔎 Filtros combinados
  const filteredAccessories = useMemo(() => {
    return accessories.filter((item) => {
      const matchBrand =
        brandFilter === "all" ||
        item.brand.toLowerCase() === brandFilter;

      const matchName = item.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());

      return matchBrand && matchName;
    });
  }, [accessories, brandFilter, nameFilter]);

  return (
    <div>
      {/* TITLE */}
      <section
        className="page-title-center-alignment cover-background top-space-padding"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center position-relative page-title-extra-large">
              <h1 className="alt-font d-inline-block fw-700 ls-minus-05px text-base-color mb-10px mt-3 md-mt-50px">
                Collections
              </h1>
            </div>

            <div className="col-12 breadcrumb breadcrumb-style-01 d-flex justify-content-center">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Collections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-4">
        <div className="container">
          <div className="row g-3 justify-content-center align-items-center">
            <div className="col-md-3">
              <select
                className="form-select"
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value.toLowerCase())}
              >
                <option value="all">Ver todo</option>
                <option value="bestune">Bestune</option>
                <option value="jim">Jim</option>
              </select>
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="position-relative">
        <div className="container">
          <div
            className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center align-items-center"
            data-anime='{ "el": "childs", "translateY": [50, 0], "translateX": [-50, 0], "opacity": [0,1], "duration": 600, "delay":100, "staggervalue": 150, "easing": "easeOutQuad" }'
          >
            {filteredAccessories.map((item, index) => (
              <div
                className="col categories-style-01 text-center mb-50px xs-mb-35px"
                key={item.id}
              >
                <div className="categories-box">
                  <div className="icon-box position-relative mb-10px">
                    <a href="#">
                      <img
                        src={`${STORAGE_URL}/${item.image}`}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </a>

                    <div className="count-circle d-flex align-items-center justify-content-center w-35px h-35px bg-base-color text-white rounded-circle alt-font fw-600 fs-12">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="alt-font fw-600 fs-17 text-dark-gray text-dark-gray-hover d-block"
                  >
                    {item.name}
                  </a>

                  <span className="fs-14 text-medium-gray">
                    {item.brand}
                  </span>
                </div>
              </div>
            ))}

            {filteredAccessories.length === 0 && (
              <p className="text-center w-100 py-5">
                No results found
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
